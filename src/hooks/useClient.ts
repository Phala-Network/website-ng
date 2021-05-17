import { isClient } from '../utils/isClient'
import { useEffect, useState } from 'react'

export const useClient = () => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(isClient())
  }, [])

  return [client, setClient]
}
