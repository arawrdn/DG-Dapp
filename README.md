# 🚀 DG-DApp: Decentralized Governance on Base

[![Status](https://img.shields.io/badge/Status-In%20Development-yellow.svg)](./)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Powered by](https://img.shields.io/badge/WalletConnect-v2.0-blueviolet.svg)](https://walletconnect.com/)

## 📄 Overview

This DApp serves as the frontend interface for decentralized governance (QnA/Voting) on the Base network. It enables users to connect their wallets securely using **WalletConnect v2.0** and submit transactions to the deployed `VoteManager.sol` smart contract.

## ✨ Features

* **WalletConnect v2.0 Integration:** Seamless connection across various wallets via Web3Modal.
* **Multi-Chain Support:** Configured for Base (Mainnet) and Base Goerli (Testnet).
* **On-Chain Voting:** Execute `vote()` transactions to the core governance contract.
* **Real-Time Data Reading:** Display current vote counts and theme details.

## ⚙️ Setup and Configuration

### Prerequisites

* Node.js (v18+)
* npm or yarn
* A WalletConnect Project ID (Yours: `a5f9260bc9bca570190d3b01f477fc45`)

### Step 1: Clone and Install

```bash
git clone [repository-url]
cd dg-dapp
npm install
