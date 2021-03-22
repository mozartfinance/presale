import {useCallback} from 'react'
import useTokenA from './useTokenA'
import {useWallet} from 'use-wallet'
import {enter, getXTokenAStakingContract} from '../tokenA/utils'

const useEnter = () => {
  const {account} = useWallet()
  const tokenA = useTokenA()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXTokenAStakingContract(tokenA),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, tokenA],
  )

  return {onEnter: handle}
}

export default useEnter
