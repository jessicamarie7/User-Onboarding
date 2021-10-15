import './App.css';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import FormSchema from './FormSchema';
import Form from './Form';

const initialAlly = []
const initialDisabled = true
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: false
}

function App() {
  const [ally, setAlly] = useState(initialAlly)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [form, setForm] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialFormErrors)

  const inputChange = (name, value) => {
    axios.post('https://reqres.in/api/users', recruit)
    .then(res => {
      setForm(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

  const onSubmit = event => {
    event.preentDefault()
    const recruit = { name: form.name.trim(), email: form.email.trim(), password: form.password, terms: form.terms }
    postRecruit(recruit)
  }

  useEffect(() => {
    FormSchema.isValid(form).then(valid => setDisabled(!valid))
  }, [form]);


  return (
    <div className='jessicas'>
      <Form />
    </div>
  );
}

export default App;
