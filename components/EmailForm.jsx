import {useForm, ValidationError} from '@formspree/react';
import styles from './component_styles/EmailForm.module.css';

function ContactForm() {
    const [state, handleSubmit] = useForm('xrgdbwly');

    if (state.succeeded) {
        alert('Message successfully sent!');
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('message').value = ''
    }

    return (
        <section className={styles.container}>
            <header>
                <h2 className={styles.title}>Email <span className={styles.title_focus}>Me</span></h2>
            </header>
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name*"
                    className={styles.name}
                    required
                />
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    className={styles.email}
                    required
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
                    placeholder="Message*"
                    className={styles.message}
                    required
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
