import { useAccount, useEnsName } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';

export default function WaitlistSignup() {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const [joined, setJoined] = useState(false);

  const handleJoinWaitlist = async () => {
    console.log('Wallet:', address);
    console.log('Base name:', ensName || 'No Base Name found');
    setJoined(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Join the Varsity Preps Waitlist</h2>
      <ConnectButton />

      {isConnected && (
        <>
          <p>Wallet: {address}</p>
          <p>Base Name: {ensName || 'No Base Name found'}</p>
          <button onClick={handleJoinWaitlist}>Join Waitlist</button>
        </>
      )}

      {joined && <p>✅ You’re on the Waitlist!</p>}
    </div>
  );
}
