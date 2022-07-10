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
        <section className="container-fluid">
            <div className="row justify-content-center mx-2 my-5">
                <form className=' col-12 col-sm-8 col-md-7 col-lg-6 border border-2 border-light rounded-4 p-4 shadow-lg contact-form' id="contact-form" onSubmit={handleSubmit}>
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
                        <textarea className="form-control" name="message" rows="3" defaultValue={message} onBlur={handleChange}  />
                    </div>

                    {errorMessage && (
                        <div className='text-danger fw-bold'>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <div className='d-flex justify-content-end'>
                      <button className='btn btn-warning btn-lg me-3 mt-2 fw-bold' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}



export default ContactForm;