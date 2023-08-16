// import Button from "../Button/button"
import "./todo.css";
import Myalert from "../Alert/Myalert";
import { useState } from "react";

const Todo = () => {
  let [todo, setTodo] = useState([]);
  let [value, setValue] = useState("");
  
  const addTodo = ()=>{
    if(value !== ""){
      setTodo([{value,edit: false},...todo ]);
      console.log(todo)
   
      setValue("");
    }
    else{
      <Myalert/>
    }
  }

  const deleteTodo = async(index) => {
    // const updatedTodos = todo.filter((_,i)=> index !== i )
    // setTodo([updatedTodos])
    setTodo((items) => {
      return items.filter((value, i) => {
        return i !== index;
      });
    });
   
  };

  const deleteALl = ()=>{
    setTodo([])   
  }
  // console.log(todo);

  


console.log(todo);




  return (
    <>
      <h1 className="text-center text-info">Todo App</h1>

      <div className="d-flex container-fluid justify-content-center align-items-center ">
       
        <div className="text-info mx-5 mt-5 justify-content-center allign-items-center todo position-relative">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          className="mx-0 mt-1 text-black inputText p-1  border-info"
        />

        <button
          type="button"
          class="btn btn-info mx-3"
          onClick= {addTodo}
        >
          Add Todo
        </button> <button type="button" class="btn btn-danger" onClick={deleteALl}>Delete All</button>

        <ul>
          {todo.map((v, i) => (
            <li className="mt-5" key={i}>   
              
               {v.edit ? <input    className="mx-0 mt-1 text-black inputText p-1  border-info" type="text" onChange={(e)=> {
                todo[i].value = e.target.value;
              } } defaultValue={value}/> : v.value}

              {v.edit ? <button className="btn btn-success mx-3" onClick={()=>{
                let arrr = [...todo]
                todo[i].edit = false
                setTodo(arrr)
              }}>Update</button> : <button  className="btn btn-success" onClick={()=>{
                todo[i].edit = true;
                let arr = [...todo]
                setTodo(arr)
              }}>edit</button>}
              <button  className="crossBtn" onClick={() => deleteTodo(i)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
};
export default Todo;
