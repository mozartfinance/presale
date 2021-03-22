import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'
import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { getEarned, getMasterChefContract, getFarms } from '../tokenA/utils'
import useTokenA from './useTokenA'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const tokenA = useTokenA()
  const farms = getFarms(tokenA)
  const masterChefContract = getMasterChefContract(tokenA)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, tokenA])

  useEffect(() => {
    if (account && masterChefContract && tokenA) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, tokenA])

  return balances
}

export default useAllEarnings
