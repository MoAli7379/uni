import React, { useId } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useConnectWallet } from '@web3-onboard/react';

// Images
import Logo from 'public/assets/svg/logo.svg';
import SearchLogo from 'public/assets/svg/search.svg';

interface I_headerOptions {
  id: string;
  linkName: string;
  path: string;
  isContainSvgIcon: boolean;
  iconURL?: any;
  isLinkDisabled: boolean;
  isActive: boolean;
}

const Header = () => {
  const { pathname } = useRouter();
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const headerOptions: I_headerOptions[] = [
    {
      id: useId(),
      linkName: 'Uniswap',
      path: '/',
      isContainSvgIcon: true,
      iconURL: Logo,
      isLinkDisabled: false,
      isActive: false,
    },
    {
      id: useId(),
      linkName: 'Swap',
      path: '/swap',
      isContainSvgIcon: false,
      isLinkDisabled: false,
      isActive: pathname === '/swap',
    },
    {
      id: useId(),
      linkName: 'Tokens',
      path: '/tokens',
      isContainSvgIcon: false,
      isLinkDisabled: true,
      isActive: false,
    },
    {
      id: useId(),
      linkName: 'NFTs',
      path: '/nfts',
      isContainSvgIcon: false,
      isLinkDisabled: true,
      isActive: false,
    },
    {
      id: useId(),
      linkName: 'Pool',
      path: '/pool',
      isContainSvgIcon: false,
      isLinkDisabled: true,
      isActive: false,
    },
  ];

  // Function to handle the connect button click
  const handleConnectClick = () => {
    if (wallet) {
      disconnect(wallet);
    } else {
      // Redirect to Google for visual purposes
      window.location.href = 'https://www.google.com';
    }
  };

  return (
    <header>
      <nav className='header'>
        <div className='header__logo'>
          <Link
            href={headerOptions[0].path}
            className={headerOptions[0].isActive ? 'active' : ''}
          >
            <Image
              width={48}
              height={48}
              src={headerOptions[0].iconURL}
              alt={headerOptions[0].linkName}
            />
          </Link>
        </div>
        <div className='header__nav'>
          {headerOptions.map((link: I_headerOptions) => (
            <React.Fragment key={link.id}>
              {link.isLinkDisabled ? (
                <p>{link.linkName}</p>
              ) : (
                <Link
                  href={link.path}
                  className={link.isActive ? 'active' : ''}
                >
                  {link.isContainSvgIcon ? (
                    <Image
                      width={48}
                      height={48}
                      src={link.iconURL}
                      alt={link.linkName}
                    />
                  ) : (
                    link.linkName
                  )}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
        <div></div>
        <div className='header__search'>
          <div className='header__search__wrapper'>
            <Image src={SearchLogo} alt='search' />
            <input
              type='search'
              name='search'
              id='search'
              placeholder='Search tokens and NFT collections'
            />
          </div>
        </div>
        
        <div className='header__connect'>
          {!wallet && (
            <button
              disabled={connecting}
              onClick={handleConnectClick}
              style={{
                backgroundColor: '#311c31', // Custom background color
                color: '#fc72ff', // Custom text color
              }}
            >
              
              {connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect Wallet'}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
