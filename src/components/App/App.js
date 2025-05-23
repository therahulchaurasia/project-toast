import React from 'react'

import ToastPlayground from '../ToastPlayground'
import Footer from '../Footer'
import ToastContextProvider from '../../context/ToastContextProvider'

function App() {
  return (
    <ToastContextProvider>
      <ToastPlayground />
      <Footer />
    </ToastContextProvider>
  )
}

export default App
