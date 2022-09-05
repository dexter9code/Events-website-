import classes from "./newsletter-registration.module.css";
import { useRef, useContext } from "react";
import NotificationContext from "../../context/notificationContext";

function NewsletterRegistration() {
  const notficationCtx = useContext(NotificationContext);

  const emailRef = useRef();

  async function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    const email = emailRef.current.value;

    notficationCtx.showNotification({
      title: "Signing up...",
      message: `Registering for newsletter`,
      status: `pending`,
    });

    // optional: validate input
    if (!email.includes("@")) return console.log("Error");

    // send valid data to API
    const reqBody = { email };
    try {
      const res = await fetch(`/api/newsLetter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const data = await res.json();
      notficationCtx.showNotification({
        title: "Success !",
        message: `Successfully registered`,
        status: `success`,
      });
      console.log(data);
    } catch (error) {
      notficationCtx.showNotification({
        title: "Failed",
        message: `Something is not right`,
        status: `error`,
      });
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
