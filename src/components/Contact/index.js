import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const {name, email, message } = formState

    const [errorMessage, setErrorMessage] = useState('');


    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
      };
    // console.log(formState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          setFormState({ [e.target.name]: e.target.value });
          console.log('Form', formState);
        }
      };

    return (
        <section className="container">
            <div className="row justify-content-center">
                <form className='border border-3 border-light rounded p-4 shadow-lg col-6' id="contact-form" onSubmit={handleSubmit}>
                <h2 className="mb-4">Contact me</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input className='form-control' type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email address:</label>
                        <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">Message:</label>
                        <textarea className="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange}  />
                    </div>

                    {errorMessage && (
                        <div className='text-danger fw-bold'>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className='btn btn-secondary' type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}



export default ContactForm;