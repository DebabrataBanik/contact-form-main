import { forwardRef } from "react";

function Textarea({ id, label, error, ...props }, ref) {
  return (
    <>
      {label && (
        <label htmlFor={id}>
          {label} <span>*</span>
        </label>
      )}
      <textarea ref={ref} id={id} className={error ? 'error' : ''} {...props}></textarea>
      {error && <span className="error-msg">{error.message}</span>}
    </>

  );
}

export default forwardRef(Textarea)