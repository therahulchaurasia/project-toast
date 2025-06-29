import { useContext, useState } from 'react'

import Button from '../Button'

import { ToastContext } from '../../context/ToastContextProvider'
import ToastShelf from '../ToastShelf/ToastShelf'
import styles from './ToastPlayground.module.css'
const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const { createToast } = useContext(ToastContext)
  const [message, setMessage] = useState('')
  const [toastVariant, setToastVariant] = useState(VARIANT_OPTIONS[0])
  const handlePopToast = (e) => {
    e.preventDefault()
    if (!message || !toastVariant) {
      return alert('Please fill in the required values')
    }
    createToast(message, toastVariant)
    emptyValues()
  }

  const emptyValues = () => {
    setMessage('')
    setToastVariant(VARIANT_OPTIONS[0])
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      {/* {toastVisible && (
        <Toast
          message={message}
          variant={toastVariant}
          handleDismiss={handleDismiss}
        />
      )} */}
      <ToastShelf />
      <form onSubmit={handlePopToast}>
        <div className={styles.controlsWrapper}>
          <ToastInput message={message} setMessage={setMessage} />
          <RadioGroup
            toastVariant={toastVariant}
            setToastVariant={setToastVariant}
          />

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type='submit'>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

function RadioGroup({ toastVariant, setToastVariant }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {VARIANT_OPTIONS.map((opt, idx) => (
          <label htmlFor={`variant-${opt}`} key={idx}>
            <input
              id={`variant-${opt}`}
              type='radio'
              name='variant'
              checked={opt === toastVariant}
              value={`${opt}`}
              onChange={(e) => setToastVariant(e.target.value)}
            />
            {opt}
          </label>
        ))}

        {/* TODO Other Variant radio buttons here */}
      </div>
    </div>
  )
}

function ToastInput({ message, setMessage }) {
  return (
    <div className={styles.row}>
      <label
        htmlFor='message'
        className={styles.label}
        style={{ alignSelf: 'baseline' }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id='message'
          className={styles.messageInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  )
}

export default ToastPlayground
