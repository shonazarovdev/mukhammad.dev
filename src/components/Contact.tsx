import React, { FC, useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { toast, ToastContainer } from "react-toastify";
import clsx from "clsx";
import { motion } from "framer-motion";
import axios from "axios";
import { regexEmail } from "../helpers/helpers";
import { CHAT_ID, URL_API } from "../helpers/http";
import * as A from "../helpers/animations";

interface FormState {
    name?: string;
    email?: string;
    message?: string;
}

export const Contact: FC = () => {
    const [formState, setFormState] = useState<FormState>({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormState>({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const notifyMessage = "Success!";

    useEffect(() => {
        // Custom validation logic on formState change
        const validationErrors: FormState = {};

        if (formState.name && formState.name.length > 50) {
            validationErrors.name = "Name must be less than 50 characters";
        }

        if (formState.email && !regexEmail(formState.email)) {
            validationErrors.email = "Invalid email address";
        }

        if (formState.message && !formState.message.trim()) {
            validationErrors.message = "Message is required";
        }

        setErrors(validationErrors);
    }, [formState.name, formState.email, formState.message]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name } = e.target;
        const validationErrors: FormState = {};

        if (!formState[name as keyof FormState]) {
            validationErrors[name as keyof FormState] = `${name} is required`;
        }

        setErrors({ ...errors, ...validationErrors });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formState;

        // Form submission logic
        const send = `<b>👤 Имя пользователя:</b> ${name}\n<b>📬 Электронная почта:</b> <code>${email}</code>\n<b>📩 Сообщение:</b> ${message}`;
        setLoading(true);
        try {
            await axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: "html",
                text: send,
            });
            toast.success(notifyMessage, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setFormState({ name: "", email: "", message: "" });
        } catch (error: any) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        setLoading(false);
    };

    const handleReset = () => {
        setFormState({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
    };

    // Check if form has any errors
    const hasErrors = !!Object.values(errors).find((error) => !!error);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            id="contact"
            className="section contact"
        >
            <div className="contact__wrapper contact__container">
                <div className="contact__body">
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <div className="section-header">
                        <motion.h2
                            custom={1}
                            variants={A.section_title}
                            className="section-title"
                        >
                            Contact
                        </motion.h2>
                        <motion.p
                            custom={2}
                            variants={A.section_title}
                            className="section-subtitle"
                        >
                            Feel free to Contact me by submitting the form below
                            and I will get back to you as soon as possible
                        </motion.p>
                    </div>
                    <motion.form
                        custom={3}
                        variants={A.section_title}
                        className="contact-form form"
                        onSubmit={handleSubmit}
                    >
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
                                    "form-group__input",
                                    errors.name && "error"
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
                                className="form-group__label"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                name="email"
                                placeholder="Enter Your Email"
                                id="email"
                                className={clsx(
                                    "form-group__input",
                                    errors.email && "error"
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
                                className="form-group__label"
                            >
                                Message
                            </label>
                            <textarea
                                autoComplete="off"
                                id="message"
                                name="message"
                                placeholder="Enter Your Message"
                                className={clsx(
                                    "form-group__input",
                                    errors.message && "error"
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
                                onClick={handleReset}
                                title="Reset"
                            >
                                Reset
                            </button>
                            {!hasErrors &&
                            formState.name?.length !== 0 &&
                            formState.email?.length !== 0 &&
                            formState.message?.length !== 0 &&
                            !loading ? (
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    title="Submit disabled"
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    disabled={true}
                                    className="btn btn-ghost disabled contact-form-button"
                                    title="Submit"
                                >
                                    {loading && (
                                        <VscLoading className="loading-icon" />
                                    )}
                                    Submit
                                </button>
                            )}
                        </div>
                    </motion.form>
                </div>
            </div>
        </motion.section>
    );
};
