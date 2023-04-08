import React, { FC, useEffect, useState } from 'react';
import { regexEmail } from '@/helpers/helpers';
import clsx from 'clsx';

interface FormState {
    name?: string;
    email?: string;
    message?: string;
}

export const Contact: FC = () => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });
    useEffect(() => {
        // Custom validation logic on formState change
        const validationErrors: FormState = {};

        if (formState.name && formState.name.length > 50) {
            validationErrors.name = 'Name must be less than 50 characters';
        }

        if (
            formState.email &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)
        ) {
            validationErrors.email = 'Invalid email address';
        }

        if (formState.message && !formState.message.trim()) {
            validationErrors.message = 'Message is required';
        }

        setErrors(validationErrors);
    }, [formState.name, formState.email, formState.message]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name } = e.target;
        const validationErrors: FormState = {};

        if (!formState[name as keyof FormState]) {
            validationErrors[name as keyof FormState] = `${name} is required`;
        }

        setErrors({ ...errors, ...validationErrors });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Form submission logic
        console.log('Form submitted:', formState);
        setFormState({ name: '', email: '', message: '' });
    };

    const handleReset = () => {
        setFormState({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
    };

    // Check if form has any errors
    const hasErrors = !!Object.values(errors).find((error) => !!error);

    return (
        <section id="contact" className="section contact">
            <div className="contact__wrapper contact__container">
                <div className="contact__body">
                    <div className="section-header">
                        <h2 className="section-title">Contact</h2>
                        <p className="section-subtitle">
                            Feel free to Contact me by submitting the form below
                            and I will get back to you as soon as possible
                        </p>
                    </div>
                    <form className="contact-form form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-group__label">
                                Name
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                name="name"
                                placeholder="Enter Your Name"
                                className={clsx(
                                    'form-group__input',
                                    errors.name && 'error',
                                )}
                                id="name"
                                value={formState.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <span className="form-group__error">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="email"
                                className="form-group__label">
                                Email
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                name="email"
                                placeholder="Enter Your Email"
                                id="email"
                                className={clsx(
                                    'form-group__input',
                                    errors.email && 'error',
                                )}
                                value={formState.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <span className="form-group__error">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="message"
                                className="form-group__label">
                                Message
                            </label>
                            <textarea
                                autoComplete="off"
                                id="message"
                                name="message"
                                placeholder="Enter Your Message"
                                className={clsx(
                                    'form-group__input',
                                    errors.message && 'error',
                                )}
                                value={formState.message}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.message && (
                                <span className="form-group__error">
                                    {errors.message}
                                </span>
                            )}
                        </div>
                        <div className="form-button__wrapper">
                            <button
                                type="reset"
                                className="btn btn-ghost"
                                onClick={handleReset}>
                                Reset
                            </button>
                            {!hasErrors &&
                            formState.name?.length !== 0 &&
                            formState.email?.length !== 0 &&
                            formState.message?.length !== 0 ? (
                                <button
                                    type="submit"
                                    className="btn btn-primary">
                                    Submit
                                </button>
                            ) : (
                                <button
                                    disabled={true}
                                    className="btn btn-ghost disabled">
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
