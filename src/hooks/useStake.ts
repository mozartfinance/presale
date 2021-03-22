import { useCallback } from 'react'
import useTokenA from './useTokenA'
import { useWallet } from 'use-wallet'
import { stake, getMasterChefContract } from '../tokenA/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const tokenA = useTokenA()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(tokenA),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, tokenA],
  )

  return { onStake: handleStake }
}

export default useStake
