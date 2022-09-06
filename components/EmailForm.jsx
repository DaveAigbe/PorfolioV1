import {useForm, ValidationError} from '@formspree/react';
import styles from './component_styles/EmailForm.module.css';

function ContactForm() {
    const [state, handleSubmit] = useForm('xrgdbwly');

    if (state.succeeded) {
        alert('message successfully sent');
    }

    return (
        <section className={styles.container}>
            <header className={styles.title}>
                <h1>Email <span className={styles.title_focus}>Me</span></h1>
            </header>
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
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
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Send
                </button>
            </form>
        </section>

    );
}

function App() {
    return (
        <ContactForm/>
    );
}

export default App;
