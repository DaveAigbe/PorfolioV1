import {useForm, ValidationError} from '@formspree/react';
import styles from './component_styles/EmailForm.module.css';

function ContactForm() {
    const [state, handleSubmit] = useForm('xrgdbwly');

    // Swap out for lottie animation
    if (state.succeeded) {
        alert('message successfully sent');
    }

    return (
        <section className={styles.container}>
            <header>
                <h1 className={styles.title}>Email <span className={styles.title_focus}>Me</span></h1>
            </header>
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={styles.name}
                />
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={styles.email}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Message"
                    className={styles.message}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button className={styles.button} type="submit" disabled={state.submitting}>
                    Send
                </button>
            </form>
        </section>

    );
}


export default ContactForm;
