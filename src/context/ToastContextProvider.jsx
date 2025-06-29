import { createContext, useCallback, useState } from 'react'
import useKeyDown from '../hooks/useKeydown'

export const ToastContext = createContext()

function ToastContextProvider({ children }) {
  const [toastDataStore, setToastDataStore] = useState([])
  const handleEscape = useCallback(() => {
    setToastDataStore([])
  }, [setToastDataStore])
  useKeyDown('Escape', handleEscape)

  function createToast(message, toastVariant) {
    const toast = {
      id: crypto.randomUUID(),
      message: message,
      variant: toastVariant,
    }
    setToastDataStore((ps) => [...ps, toast])
  }

  function removeToast(toastId) {
    setToastDataStore((ps) => ps.filter((val) => val.id !== toastId))
  }
  return (
    <ToastContext.Provider
      value={{ toastDataStore, setToastDataStore, createToast, removeToast }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastContextProvider
