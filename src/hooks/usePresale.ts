import { useContext } from 'react'
import { Context } from '../contexts/PresaleProvider'

const usePresale = () => {
  const  presale  = useContext(Context)
  return presale
}

export default usePresale
