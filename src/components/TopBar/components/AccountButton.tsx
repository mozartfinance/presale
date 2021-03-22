
import React, { useCallback } from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import * as bsc from '@binance-chain/bsc-use-wallet'
import useModal from '../../../hooks/useModal'
import WalletProviderModal from '../../WalletProviderModal'
import AccountModal from './AccountModal'
import Button from '../../Button'

interface AccountButtonProps {
}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const [onPresentAccountModal] = useModal(<AccountModal />)
  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal />,
    'provider',
  )

  const { account } = bsc.useWallet()

  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  return (
    <div>
      <StyledAccountButton>
        {!account ? 
          (<Button onClick={handleUnlockClick} size="md" text="🔓 Unlock Wallet" />)
          : 
          (<Button onClick={onPresentAccountModal} size="md" text="My Wallet" />)
        }
        </StyledAccountButton>
    </div>
  )
}

const StyledAccountButton = styled.div``

export default AccountButton