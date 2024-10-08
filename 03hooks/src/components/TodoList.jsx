import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleTodo = () => {
        setTodos([...todos, todo])
        setTodo("")
    }


  return (
    <div>
        <input type="text" value={todo} onChange={handleChange} placeholder="Enter your Todo Item"/>
        <button onClick={handleTodo}>Submit</button>
        {
            todos.map((todo) => (
                <li>{todo}</li>
            ))
        }
    </div>
  )
}

export default TodoList