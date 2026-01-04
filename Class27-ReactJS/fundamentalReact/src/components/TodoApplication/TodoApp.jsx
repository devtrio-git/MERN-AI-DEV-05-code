import React, { useEffect, useState } from 'react'
import styles from "./todoapp.module.css"
import TodoCard from './TodoCard';

const TodoApp = () => {
    const [todos, setTodos] = useState([
        // { id: "123123", text: "I have a meeting" },
        // { id: "123123123", text: "I have a class" }
    ]);
    console.log(todos, "<-- todos")
    const [input, setInput] = useState("");
    const [editId, setEditId] = useState(null);

    useEffect(()=>{
        const storedTodos = localStorage.getItem("todos");
        if(storedTodos){
            setTodos(JSON.parse(storedTodos))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])

    function addTodo() {
        if (!input?.trim()) {
            alert("You need to enter todo")
            return;
        }
        let newTodo = { id: Date.now(), text: input }

        setTodos([...todos, newTodo])
        setInput("")
    }

    function updateTodo(){
        if (!input?.trim()) {
            alert("You need to enter todo")
            return;
        }
        let updatedTodos = todos?.map((todo)=>(
            todo?.id === editId ? {...todo, text: input} : todo
        ))
        setTodos(updatedTodos)

        setEditId(null)
        setInput("")
    }

    function deleteTodo(id) {
        console.log(id)
        let updatedTodo = todos?.filter((item)=> item?.id !== id)
        setTodos(updatedTodo);
    }

    function handleEdit(todo){
        console.log(todo)
        setInput(todo?.text)
        setEditId(todo?.id)
    }

    return (
        <div className={styles.container}>
            <h1 className='primary-color'>My Todo Application</h1>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Todo"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"

                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={editId ? updateTodo :  addTodo}
                >{editId ? "Update" :"Add"}</button>
            </div>

            <div className='mt-1'>
                {
                    todos?.length === 0 ?
                        <p>List is Empty</p>
                        : todos?.map((todo, index) => (
                            <TodoCard
                                key={todo?.id}
                                data={todo}
                                onDelete={deleteTodo}
                                onEdit={handleEdit}
                            />
                        ))
                }

            </div>

        </div>
    )
}

export default TodoApp
