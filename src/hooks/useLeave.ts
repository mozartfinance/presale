import {useCallback} from 'react'

import useTokenA from './useTokenA'
import {useWallet} from 'use-wallet'

import {leave, getXTokenAStakingContract} from '../tokenA/utils'

const useLeave = () => {
  const {account} = useWallet()
  const tokenA = useTokenA()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXTokenAStakingContract(tokenA),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, tokenA],
  )

  return {onLeave: handle}
}

export default useLeave
