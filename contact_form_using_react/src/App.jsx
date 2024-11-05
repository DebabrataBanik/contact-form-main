import { useState } from "react"
import Confirmation from "./components/Confirmation"
import Input from "./components/Input"
import Textarea from "./components/Textarea"
import { useForm } from 'react-hook-form'

function App() {

  const [isValid, setIsValid] = useState(false)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const selectedQuery = watch('queryType')

  const onSubmit = () => {
    setIsValid(true)
    reset()
  }

  const formReset = () => {
    setIsValid(false)
  }

  const checkboxLabel = (
    <>
      I consent to being contacted by the team <span>*</span>
    </>
  )

  return (
    <>

      {isValid && <Confirmation />}

      <main className="wrapper">

        <form className="form__container"
          onClick={() => formReset()}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Contact Us</h1>
          <div className="name__input">

            <div className="first-name">

              <Input
                type="text"
                label="First Name"
                id="first-name"
                aria-required="true"
                {
                ...register('first-name', {
                  required: 'This field is required',
                  validate: value => {
                    return value.trim().length > 0 || 'This field cannot be just spaces';
                  }
                })
                }
                error={errors['first-name']}
              />
            </div>

            <div className="last-name">

              <Input
                type="text"
                label="Last Name"
                id="last-name"
                aria-required="true"
                {
                ...register('last-name', {
                  required: 'This field is required',
                  validate: value => {
                    return value.trim().length > 0 || 'This field cannot be just spaces';
                  }
                })
                }
                error={errors['last-name']}
              />
            </div>

          </div>

          <div className="email__input">


            <Input
              type="text"
              label="Email Address"
              id="email"
              aria-required="true"
              {
              ...register('email', {
                required: 'This field is required',
                validate: value => {
                  const isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
                  return isValid || 'Enter a valid email address';
                }
              })
              }
              error={errors.email}
            />
          </div>

          <p>Query Type <span>*</span></p>
          <div className="radio__container">
            <div className={`general ${selectedQuery === 'general' ? 'active' : ''}`}>
              <Input
                type="radio"
                label="General Enquiry"
                id="general"
                name="queryType"
                value="general"
                labelPosi="right"

                {
                ...register('queryType', { required: 'Please select a query type' })
                }
              />
            </div>

            <div className={`support ${selectedQuery === 'support' ? 'active' : ''}`}>

              <Input
                type="radio"
                label="Support Request"
                id="support"
                name="queryType"
                value="support"
                labelPosi="right"

                {
                ...register('queryType', { required: 'Select a query type' })
                }
              />
            </div>

          </div>
          <span className="error-msg">{errors.queryType && errors.queryType.message}</span>

          <div className="message__container">
            <div className="message__container">
              <Textarea
                id="message"
                label="Message"
                {...register('message', {
                  required: 'This field is required',
                  validate: value => {
                    return value.trim().length > 0 || 'This field cannot be just spaces';
                  }
                })}
                error={errors.message}
              />
            </div>

          </div>

          <div className="checkbox__container">
            <Input
              type="checkbox"
              label={checkboxLabel}
              id="checkbox"
              value="consent"
              labelPosi="right"
              aria-required="true"
              {
              ...register('checkbox', { required: 'Please consent to being contacted' })
              }
            />
          </div>
          <span className="error-msg">{errors.checkbox && errors.checkbox.message}</span>

          <button className="btn" type='submit' aria-label="submit form to being contacted">Submit</button>

        </form>

      </main>
    </>
  )
}

export default App