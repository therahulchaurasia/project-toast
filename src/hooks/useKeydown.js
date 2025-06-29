import { useEffect } from 'react'

function useKeyDown(key, callback) {
  console.log('do we render this on every toast')
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === key) {
        callback()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [key, callback])
}
export default useKeyDown
