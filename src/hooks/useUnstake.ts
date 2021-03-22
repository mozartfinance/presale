import { useCallback } from 'react'
import useTokenA from './useTokenA'
import { useWallet } from 'use-wallet'
import { unstake, getMasterChefContract } from '../tokenA/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const tokenA = useTokenA()
  const masterChefContract = getMasterChefContract(tokenA)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, tokenA],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
