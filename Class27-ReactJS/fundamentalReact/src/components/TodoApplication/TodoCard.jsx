import React from 'react'
import styles from "./todoapp.module.css"
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
const TodoCard = ({data, onDelete, onEdit}) => {
    return (
        <div className={styles.todoCard}>
            <span>{data?.text}</span>

            <div>
                <button className='btn btn-primary' onClick={()=>onEdit(data)}><BiEdit style={{ fontSize: "25px" }} /></button>
                <button className='btn btn-danger' onClick={()=> onDelete(data?.id)}><AiOutlineDelete style={{ fontSize: "25px" }} /></button>
            </div>
        </div>
    )
}

export default TodoCard
