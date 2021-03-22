import { useContext } from 'react'
import { Context } from '../contexts/TokenAProvider'

const useTokenA = () => {
  const { tokenA } = useContext(Context)
  return tokenA
}

export default useTokenA
