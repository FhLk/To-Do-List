"use client"
import React, { FC, useEffect, useState } from 'react'
import { getList, TodoData } from './TodoAPI'



const TodoList : FC = () => {
    const [todoList , setTodoList] = useState<TodoData[]>([])
    getList();
    
    useEffect(()=>{
    },[])
  return (
    <div>
      
    </div>
  )
}

export default TodoList
