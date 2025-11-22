import { createConfig, http } from 'wagmi';
import { base, baseGoerli } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';
import { parseAbi } from 'viem';

// 1. Ambil Project ID dari env
export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!projectId) {
  console.error("WalletConnect Project ID not found. Check your .env.local file.");
}

// 2. Metadata DApp
const metadata = {
  name: 'DG-DApp (Governance)',
  description: 'Decentralized Governance DApp powered by WalletConnect v2.0',
  url: 'https://your-dapp-url.com', 
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

// 3. Konfigurasi Wagmi
export const wagmiConfig = createConfig({
  chains: [base, baseGoerli], // Mendukung Base Mainnet dan Testnet
  transports: {
    [base.id]: http(),
    [baseGoerli.id]: http(),
  },
  connectors: [
    walletConnect({ projectId: projectId || '', metadata, showQrModal: true }),
    injected({ shimDisconnect: true }),
  ],
});

// 4. Detail Kontrak
export const VOTE_MANAGER_ADDRESS = '0xD499fc7734Eb8a95097457a6FE188cA29C0cb626' as const;

// ABI yang disederhanakan (Pastikan Anda menggunakan ABI yang benar dari kontrak Anda)
export const VOTE_MANAGER_ABI = parseAbi([
  'function vote(uint256 themeId, uint256 answerIndex) public',
  // Tambahkan fungsi lain yang diperlukan, misalnya: 
  // 'function getVoteCount(uint256 themeId, uint256 answerIndex) view returns (uint256)'
]);
