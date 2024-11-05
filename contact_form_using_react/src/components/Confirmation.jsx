import check from '../assets/images/icon-success-check.svg'

function Confirmation() {
  return (
    <div className="confirmation">
      <section className="title">
        <h2>Message Sent!</h2>
        <img src={check} alt="success icon" />
      </section>
      <p>Thanks for completing the form. We will be in touch soon!</p>
    </div>
  )
}

export default Confirmation