import { useEffect, useState } from 'react'
import { isClient } from '../utils/isClient'

export const useClient = () => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(isClient())
  }, [])

  return [client, setClient]
}
