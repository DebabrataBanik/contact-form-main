function App() {
  return (
    <>
      <div className="confirmation">
        <section className="title">
          <h2>Message Sent!</h2>
          <img src="assets/images/icon-success-check.svg" alt="success icon" />
        </section>
        <p>Thanks htmlFor completing the form. We will be in touch soon!</p>
      </div>

      <main className="wrapper">

        <form className="form__container">
          <h1>Contact Us</h1>
          <div className="name__input">

            <div className="first-name">
              <label htmlFor="first-name">First Name <span>*</span></label>
              <input type="text" name="first name" id="first-name" aria-required="true" />
              <span className="error-msg"></span>
            </div>

            <div className="last-name">
              <label htmlFor="last-name">Last Name <span>*</span></label>
              <input type="text" name="last name" id="last-name" aria-required="true" />
              <span className="error-msg"></span>
            </div>

          </div>

          <div className="email__input">
            <label htmlFor="email">Email Address <span>*</span></label>
            <input type="text" name="email" id="email" aria-required="true" />
            <span className="error-msg"></span>
          </div>

          <p>Query Type <span>*</span></p>
          <div className="radio__container">
            <div className="general">
              <input type="radio" id="general" value="general" name="queryType" />
              <label htmlFor="general">General Enquiry</label>
            </div>

            <div className="support">
              <input type="radio" id="support" value="support" name="queryType" />
              <label htmlFor="support">Support Request</label>
            </div>

          </div>
          <span className="error-msg"></span>

          <div className="message__container">
            <label htmlFor="message">Message <span>*</span></label>
            <textarea name="message" id="message" aria-required="true"></textarea>
            <span className="error-msg"></span>
          </div>

          <div className="checkbox__container">
            <input type="checkbox" name="consent" id="checkbox" aria-required="true" />
            <label htmlFor="checkbox">I consent to being contacted by the team <span>*</span></label>
          </div>
          <span className="error-msg"></span>

          <button className="btn" type='submit' aria-label="submit form to being contacted">Submit</button>

        </form>

      </main>
    </>
  )
}

export default App