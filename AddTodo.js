import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const AddTodo = (props) => {
    const [title,setTitle] = useState("");
const [desc, setDesc] = useState("")
    const submit =(e)=>{
   e.preventDefault();
   if(!title || !desc){
       alert("Title or Description cannot be blank");
   }
   else{
   props.addTodo(title,desc);
   setTitle("")
   setDesc("")
    }
}
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
        <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control type="text" value={desc} placeholder=" Todo describe..." onChange={(e)=>{setDesc(e.target.value)}}  id="desc" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="success" type="submit"> 
          Add Todo
        </Button>
      </Form>
      </div>
    )
}
