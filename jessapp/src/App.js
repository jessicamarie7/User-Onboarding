import './App.css';
// import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import Form from './Form';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';




function App() {

  
  const schema = yup.object().shape({
      name: yup.string().required('name is required').min(5, 'name needs to be at least 5 chars'),
      email: yup.string().required('email is required').min(5, 'email needs to be at least 5 chars'),
      password: yup.string().required('password is required').min(5, 'password needs to be at least 5 chars'),
      terms: yup.boolean().oneOf([true], 'you need to agree to join us'),
  })
  
  
  // export default function Form() {
      const [form, setForm] = useState({
          name: '',
          email: '',
          password: '',
          terms: false
      })
      const [disabled, setDisabled] = useState(true)
      const [errors, setErrors] = useState({
          name: '',
          email: '',
          password: '',
          terms: false
      })
  
      const setFormErrors = (name, value) => {
          yup.reach(schema, name).validate(value)
          .then(() =>setErrors({...errors, [name]: ''}))
          .catch(err => setErrors({...errors, [name]: err.errors[0]}))
      }
  
      const onChange = event => {
          const {value, name, type, checked} = event.target;
          const valueUsed = type === 'checkbox' ? checked : value
          setForm({...form, [name]: valueUsed})
      }
  
      useEffect(() => {
          schema.isValid(form).then(valid => setDisabled(!valid))
      }, [form]);
  
      return (
          <BrowserRouter>
              <div>{errors.name}</div><div>{errors.email}</div><div>{errors.password}</div><div>{errors.terms}</div>
              <form className='form'>
                  <h2> Sign up here </h2>
                  <label>Name
                      <input value={form.name}
                          name='name'
                          type='text'
                          onChange={onChange}
                      />
                  </label>
                  <label>Email
                      <input value={form.email}
                          name='email'
                          type='text'
                          onChange={onChange}
                      />
                  </label>
                  <label>Password
                      <input value={form.password}
                          name='password'
                          type='password'
                          onChange={onChange}
                      />
                  </label>
                  <label>Terms of Service
                      <input checked={form.terms}
                          name='terms'
                          type='checkbox'
                          onChange={onChange}
                      />
                  </label>
                  <button disabled={disabled}>Join Us Or Die</button>
              </form>
          </BrowserRouter>
          
      )
  
  }


//   return (
//     <BrowserRouter>
//       <header className="App-header">
//         <h1> Welcome To The Team! </h1> 
//       </header>
//       <Form
//         values={formValues}

//     </BrowserRouter>
//   );
// }

export default App;
