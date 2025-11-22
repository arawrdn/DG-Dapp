import VotePanel from '../components/VotePanel';

export default function HomePage() {
  return (
    <main style={{ padding: '50px', fontFamily: 'Arial' }}>
      <h1>DG-DApp: Decentralized Voting Interface</h1>
      <p>Using WalletConnect v2.0 and Wagmi to interact with contract {VOTE_MANAGER_ADDRESS} on Base.</p>
      <div style={{ marginTop: '30px' }}>
        <VotePanel />
      </div>
    </main>
  );
}
