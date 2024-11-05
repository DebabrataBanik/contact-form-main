import { forwardRef } from "react"

function Input({
  type,
  label,
  id,
  value,
  error,
  labelPosi = 'left',
  ...props
}, ref) {
  return (
    <>
      {label && labelPosi === 'left' &&
        <label htmlFor={id}>{label} <span>*</span></label>
      }
      <input ref={ref} type={type} id={id} value={value}
        className={`${error ? 'error' : ''}`}
        // className={error ? 'error' : ''}
        {...props} />
      {label && labelPosi === 'right' &&
        <label htmlFor={id}>{label}</label>
      }
      {error && <span className="error-msg">{error.message}</span>}
    </>
  )
}

export default forwardRef(Input)