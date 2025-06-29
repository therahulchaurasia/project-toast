import React, { useContext } from 'react'
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'

import VisuallyHidden from '../VisuallyHidden'

import styles from './Toast.module.css'
import { ToastContext } from '../../context/ToastContextProvider'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ toastId, children, variant }) {
  const { removeToast } = useContext(ToastContext)
  const SelectedIcon = ICONS_BY_VARIANT[variant]
  const selectedStyles = styles[variant]
  return (
    <div className={`${styles.toast} ${selectedStyles}`}>
      <div className={styles.iconContainer}>
        <SelectedIcon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        aria-label='Dismiss Message'
        aria-live='off'
        onClick={() => {
          removeToast(toastId)
        }}
      >
        <X size={24} />
      
			
			  {/* <VisuallyHidden>Dismiss message</VisuallyHidden> */}
      </button>
    </div>
  )
}

export default Toast
