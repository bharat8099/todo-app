import React from 'react'
import {TodoItems} from '../components/TodoItems';
const newStyle={
    display: "grid",
    gridTemplateColumns:" auto auto auto",
    border:"2px solid gray",
    borderRadius:"5px",
    height: "34vh"


}
const h1style={
    textAlign:"center"
}

export const Todos = (props) => {
    return (
        <>
       <h1 style={h1style}> Todos list</h1>

      <div className="container" style={newStyle}>
       {props.todos.length===0? "NO Todos Pelase Add one":
       props.todos.map((todo)=>{
   return <TodoItems todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
 
     
       })
    }
      </div>
</>
    )
}
