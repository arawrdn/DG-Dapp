import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { base } from 'wagmi/chains';
import { VOTE_MANAGER_ADDRESS, VOTE_MANAGER_ABI } from '../config/web3';

export default function VotePanel() {
  const { open } = useWeb3Modal();
  const { address, isConnected, chainId } = useAccount();
  const { data: hash, isPending, writeContract } = useWriteContract();

  // Status Transaksi
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  const handleVote = (themeId: number, answerIndex: number) => {
    if (chainId !== base.id) {
        alert('Please switch your wallet to the Base network.');
        // Opsi: Tambahkan logic untuk berpindah chain menggunakan switchChain
        return;
    }
    
    writeContract({
      address: VOTE_MANAGER_ADDRESS,
      abi: VOTE_MANAGER_ABI,
      functionName: 'vote',
      args: [BigInt(themeId), BigInt(answerIndex)],
      chainId: base.id,
    });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Wallet & Governance Panel</h2>
      
      {/* Tombol Koneksi */}
      <button onClick={() => open()} style={{ padding: '10px', background: isConnected ? 'green' : 'blue', color: 'white', border: 'none', borderRadius: '4px' }}>
        {isConnected ? `Connected: ${address?.slice(0, 6)}...` : 'Connect Wallet (WalletConnect v2)'}
      </button>

      {isConnected && (
        <div style={{ marginTop: '20px' }}>
          <p>Network: {chainId === base.id ? 'Base Mainnet' : 'Other Network'}</p>
          
          <h3>🗳️ Vote for October Theme (ID: 1)</h3>
          
          <button 
            onClick={() => handleVote(1, 0)} 
            disabled={isPending || isConfirming}
            style={{ padding: '10px', background: '#333', color: 'white', border: 'none', borderRadius: '4px', marginRight: '10px' }}
          >
            {isPending ? 'Waiting for Approval...' : 'Vote: Answer A (Index 0)'}
          </button>

          {isPending && <p>Transaction Pending...</p>}
          {isConfirming && <p>Confirming Transaction...</p>}
          {isConfirmed && <p style={{ color: 'green' }}>✅ Vote Successful! Hash: {hash}</p>}
        </div>
      )}
    </div>
  );
}
