import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import './signin.css';
import './index.css'

export const SignIn = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.username) {
                errors.username = 'UserName is required.';
            }

            if (!data.password) {
                errors.password = 'Password is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);

            formik.resetForm();
        }
    });

    const isFormFieldValid = (username) => !!(formik.touched[username] && formik.errors[username]);
    const getFormErrorMessage = (username) => {
        return isFormFieldValid(username) && <small className="p-error">{formik.errors[username]}</small>;
    };

    return (
        <div>
            <div>&nbsp;</div>
            <div className="login-form">
                <div className="p-d-flex p-jc-center">
                    <Card>
                        <div className="card">
                            <h5 className="p-text-center">Sign-In</h5>
                            <form onSubmit={formik.handleSubmit} className="p-fluid">
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <InputText id="username" name="username" value={formik.values.username} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('username') })} />
                                        <label htmlFor="username" className={classNames({ 'p-error': isFormFieldValid('username') })}>User Name</label>
                                    </span>
                                    {getFormErrorMessage('username')}
                                </div>
                                
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                                            className={classNames({ 'p-invalid': isFormFieldValid('password') })} feedback={false} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password</label>
                                    </span>
                                    {getFormErrorMessage('password')}
                                </div>
                                <Button type="submit" label="Submit" className="p-mt-2" />
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default SignIn;