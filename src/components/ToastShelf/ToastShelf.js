import React, { useContext } from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'
import { ToastContext } from '../../context/ToastContextProvider'

function ToastShelf() {
	const {toastDataStore} = useContext(ToastContext)
  return (
    <ol className={styles.wrapper}>
      {toastDataStore.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast toastId={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
      {/* <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li> */}
    </ol>
  )
}

export default ToastShelf
