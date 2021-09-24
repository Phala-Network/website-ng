import axios from 'axios'
import { useEffect, useState } from 'react'

const useHobspot = ({ portalId, formId }, { email }) => {
  const [data, setData] = useState()
  const [url, setUrl] = useState(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`
  )
  const [form, setForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    setIsError(false)
    setIsLoading(true)
    try {
      const data = {
        fields: []
      }

      data.fields.push({ name: 'email', value: email })

      const result = await axios({
        method: 'post',
        url,
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setData(result)
      setForm(false)
    } catch (e) {
      console.error(e)
      setIsError(true)
      setForm(false)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    if (form) {
      fetchData()
    }
  }, [form])

  const handleSubmit = () => {
    setForm({
      email
    })

    console.log(email)

    fetchData()
  }

  return { data, isLoading, isError, handleSubmit }
}

export default useHobspot
