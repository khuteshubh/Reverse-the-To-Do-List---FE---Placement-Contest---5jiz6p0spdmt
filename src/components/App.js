import React, { useState } from 'react'
import '../styles/App.css';

var todof;
var todoS ;
function ToDo(todos,val) {

  const getVal1 = (e) => {
    console.log(e.target.value);
   todof= (e.target.value);
  }
  const getVal2 = (e) => {
    console.log(e.target.value);
    todoS = (e.target.value);
  }
  return (<tr>
    <td>
      <p>{todos[val].id}</p>
    </td>
    <td>
        {(todos[val].id == "todo1") ? <input type ="text" id ={todos[val].id}  onInput={getVal1} value = {todos[val].todo}/>:<input type ="text" id ={todos[val].id}  onInput={getVal2}  value = {todos[val].todo} />}
    </td>
    <td>
      <p>{todos[val].createdAt}</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);
  


  const reverse = () =>{
    setTodos([{id : "todo2",todo:todoS,createdAt:"18:00"},{id:"todo1",todo:todof,createdAt:"20:30"}]);
    



  };
  
 

  

  return (
    <div id="main">
      <button onClick={reverse} >Reverse</button>
      <table>
        <tbody>
          {ToDo((todos),0)}
          {ToDo((todos),1)}
          
          
        </tbody>
      </table>
    </div>
  )
}


export default App;
