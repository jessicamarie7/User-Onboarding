import React from "react"

export default function Form(props) {
    const {values, submit, setForm, disabled, errors} = props;

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setFormErrors({...errors, [name]: ''}))
        .catch(err => setFormErrors({...errors, [name]: err.errors[0]}))
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const {value, name, type, checked} = event.target;
        const valueUsed = type === 'checkbox' ? checked : value
        setForm({...Form, [name]: valueUsed})
    }

    return (
        <div className='form-container'>
            <div>{errors.name}</div><div>{errors.email}</div><div>{errors.password}</div><div>{errors.terms}</div>
            <form onSubmit={onSubmit}>
                <h2>Sign up here</h2>
                <label>Name
                    <input value={form.name} name='name' type='text' onChange={onChange} />
                </label>
                <label>Email 
                    <input value={form.email} name='email' type='text' onChange={onChange} />
                </label>
                <label>Password 
                    <input value={form.password} name='password' type='password' onChange={onChange} />
                </label>
                <label>Terms of service
                    <input checked={form.terms} name='terms' type='checkbox' onChange={onChange} />
                </label>
                <button disabled={disabled}>Sign up now!</button>
                <div className='inductees'>
                    <h3>Inductees</h3>
                    <div className='the-list'>
                        <h5>The crew</h5>
                    </div>
                </div>
            </form>
        </div>
    )
}