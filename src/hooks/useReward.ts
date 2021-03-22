import { useCallback } from 'react'
import useTokenA from './useTokenA'
import { useWallet } from 'use-wallet'
import { harvest, getMasterChefContract } from '../tokenA/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const tokenA = useTokenA()
  const masterChefContract = getMasterChefContract(tokenA)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, tokenA])

  return { onReward: handleReward }
}

export default useReward
