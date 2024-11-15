import check from '../assets/images/icon-success-check.svg'
import { useState, useEffect } from 'react';

function Confirmation({
  isValid
}) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (isValid) {
      setIsDisplayed(true);
    } else {
      setIsDisplayed(false);
    }
  }, [isValid]);

  return (
    <div className={`confirmation ${isDisplayed ? 'display' : ''}`}>
      <section className="title">
        <h2>Message Sent!</h2>
        <img src={check} alt="success icon" />
      </section>
      <p>Thanks for completing the form. We will be in touch soon!</p>
    </div>
  )
}

export default Confirmation