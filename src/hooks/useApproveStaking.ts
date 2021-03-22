import {useCallback} from 'react'
import useTokenA from './useTokenA'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getTokenAContract,
  getXTokenAStakingContract
} from '../tokenA/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const tokenA = useTokenA()
  const lpContract = getTokenAContract(tokenA)
  const contract = getXTokenAStakingContract(tokenA)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
