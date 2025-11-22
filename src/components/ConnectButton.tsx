// src/components/ConnectButton.tsx
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <button 
      onClick={() => open()} 
      style={{ padding: '10px', background: isConnected ? '#10b981' : '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
    >
      {isConnected 
        ? `Connected: ${address?.slice(0, 6)}...${address?.slice(-4)}` 
        : 'Connect Wallet'}
    </button>
  );
}
