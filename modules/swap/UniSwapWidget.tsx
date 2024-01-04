import React from 'react';
import '@uniswap/widgets/fonts.css';
import { SwapWidget } from '@uniswap/widgets';

const UniSwapWidget = () => {
  const jsonRpcUrlMap = {
    1: 'https://mainnet.infura.io/v3/913cc8bab755465bbae321da4bf34f43',
    5: 'https://goerli.infura.io/v3/913cc8bab755465bbae321da4bf34f43',
    // Add other networks as needed
  };

  const theme = {
    primary: '#FFFFFF',       // Light text color for dark mode
    secondary: '#8A8D90',     // Secondary text color, slightly dimmed
    interactive: '#212b42',   // Interactive elements, might be buttons or links
    container: '#1A1A1A',     // Dark background color for containers
    module: '#262626',        // Slightly lighter background for modules
    accent: '#4c82fb',        // Accent color for important elements (like links or buttons)
    outline: '#98a1c0',       // Outline color for focused or important elements
    dialog: '#1A1A1A',        // Background color for dialogs or modals
    // Add additional theme properties as needed
  };

  const handleConnectWallet = () => {
    // Redirect to Google when the Connect Wallet button is clicked
    window.location.href = 'https://www.google.com';
  };

  return (
    <section className='swap'>
      <div className='swap__container'>
        <SwapWidget
          jsonRpcUrlMap={jsonRpcUrlMap}
          theme={theme}
          onConnectWalletClick={handleConnectWallet} // Custom handler for Connect Wallet button
          // Include other properties as needed
        />
      </div>
    </section>
  );
};

export default UniSwapWidget;
