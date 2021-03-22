import React, { useCallback, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import useTokenA from '../../hooks/useTokenA'
import { getFarms } from '../../tokenA/utils'
import Context from './context'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const tokenA = useTokenA()
  const { account } = useWallet()

  const farms = getFarms(tokenA)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
