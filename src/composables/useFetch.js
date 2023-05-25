import { ref } from 'vue'

export default function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetchData = async () => {
    loading.value = true
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(`Error: ${response.statusText}`)
      }
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, fetchData }
}
