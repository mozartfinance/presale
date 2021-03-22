import React, { createContext, useEffect, useState } from 'react'
import * as bsc from '@binance-chain/bsc-use-wallet'
// import { useWallet } from 'use-wallet'
import { Presale } from '../../presale'
import { useWallet } from 'use-wallet'

export interface PresaleContext {
  presale?: typeof Presale
}

export const Context = createContext<PresaleContext>({
  presale: undefined,
})

declare global {
  interface Window {
    tokenAsauce: any
  }
}

const PresaleProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = bsc.useWallet()
  const [presale, setPresale] = useState<any>()

  // @ts-ignore
  window.presale = presale
  // @ts-ignore

  useEffect(() => {
    if (ethereum) {
      const chainId = 56
      const presaleLib = new Presale(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setPresale(presaleLib)
      window.tokenAsauce = presaleLib
    }
  }, [ethereum])

  return <Context.Provider value={{ presale }}>{children}</Context.Provider>
}

export default PresaleProvider
