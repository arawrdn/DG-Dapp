'use client';

import React from 'react';
import { WagmiConfig } from 'wagmi';
import { createWeb3Modal } from '@web3modal/wagmi';
import { base, baseGoerli } from 'wagmi/chains';
import { wagmiConfig, projectId } from '../config/web3';

// 1. Inisialisasi Web3Modal UI
if (projectId) {
  createWeb3Modal({
    wagmiConfig,
    projectId,
    chains: [base, baseGoerli],
    enableAnalytics: true, // Opsional
    themeMode: 'dark', // Opsional
  });
}

// 2. Provider komponen React
export function Web3Provider({ children }: { children: React.ReactNode }) {
  // Hanya render WagmiConfig jika projectId sudah ada
  return projectId ? <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig> : null;
}
