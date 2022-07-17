import React, { useEffect, useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Button, Form} from 'react-bootstrap'

export default function Input({onGetData, btnText, editData}) {
    const [user, setUser] = useState({
        name: "",
        email: ""
      })
      
      const {name, email} = user
      
      useEffect(()=>{
        setUser({
          name: editData.name,
          email: editData.email
        })
      },[editData])
      

      const handleChange = (e)=>{
        if(e.target.name === 'name'){
          setUser({name: e.target.value,email})
        }
        if(e.target.name === 'email'){
          setUser({name,email: e.target.value})
        }
      }
    
      const handleSubmit = (e)=>{
        e.preventDefault()
        onGetData(user)
        setUser({
            name: "",
            email: ""
        })
      }
    
  return (
    <Container className='mt-3 text-center'>
        <h1 className='mb-4'>User Maanagment App</h1>
        <Form className='w-25 m-auto'  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Control name='name' type="text" placeholder="Enter name" onChange={handleChange} value={name} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleChange} value={email} required/>
            </Form.Group>
            
            <Button variant="success" type="submit">{btnText}</Button>
        </Form>
    </Container>
  )
}

Input.defaultProps = {
  editData: {
    name: "",
    email: "",
  },
};
