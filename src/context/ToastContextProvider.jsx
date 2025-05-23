import React, { createContext, useState } from 'react'

export const ToastContext = createContext()

function ToastContextProvider({ children }) {
  const [toastDataStore, setToastDataStore] = useState([])
  return (
    <ToastContext.Provider value={{ toastDataStore, setToastDataStore }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastContextProvider
