import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { getStaked, getMasterChefContract } from '../tokenA/utils'
import useTokenA from './useTokenA'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const tokenA = useTokenA()
  const masterChefContract = getMasterChefContract(tokenA)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, tokenA])

  useEffect(() => {
    if (account && tokenA) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, tokenA])

  return balance
}

export default useStakedBalance
