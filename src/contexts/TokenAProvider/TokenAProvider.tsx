import React, { createContext, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import { TokenA } from '../../tokenA'

export interface TokenAContext {
  tokenA?: typeof TokenA
}

export const Context = createContext<TokenAContext>({
  tokenA: undefined,
})

declare global {
  interface Window {
    tokenAsauce: any
  }
}

const TokenAProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [tokenA, setTokenA] = useState<any>()

  // @ts-ignore
  window.tokenA = tokenA
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const tokenALib = new TokenA(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setTokenA(tokenALib)
      window.tokenAsauce = tokenALib
    }
  }, [ethereum])

  return <Context.Provider value={{ tokenA }}>{children}</Context.Provider>
}

export default TokenAProvider
