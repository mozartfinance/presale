import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'
import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { getEarned, getMasterChefContract } from '../tokenA/utils'
import useTokenA from './useTokenA'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const tokenA = useTokenA()
  const masterChefContract = getMasterChefContract(tokenA)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, tokenA])

  useEffect(() => {
    if (account && masterChefContract && tokenA) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, tokenA])

  return balance
}

export default useEarnings
