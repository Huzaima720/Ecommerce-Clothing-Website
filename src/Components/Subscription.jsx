import React, { useState } from "react";
import styles from "./styles/Subscription.module.css";

export default function Subscription() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Thank you for subscribing with email: ${email}`);
  };

  return (
    <section className={styles.subscription}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>Lorem Ipsum</h1>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={styles.subscriptionForm}>
          <div>
            <h2 className={styles.subscribeTitle}>Stay in the loop</h2>
            <div className={styles.subscribeDescription}>
              <p>Subscribe to receive the latest news and updates about TDA.</p>
              <p>We promise not to spam you! </p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email address"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
