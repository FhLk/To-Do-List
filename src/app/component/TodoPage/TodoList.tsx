"use client"
import React, { FC, useEffect, useRef, useState } from 'react'
import { getAllData, getTodoList, TaskData, TodoData } from '../TodoAPI'
import GroupDateList from './GroupDateList'

export interface GroupedData {
  [data: string]: TaskData[];
}

const TodoList: FC = () => {
  const [todos, setTodos] = useState<TaskData[]>([])
  const [countScroll, setCountScroll] = useState<number>(0)
  const [loading, setLoading] = useState(false);


  const fetchTodos = async () => {
    setLoading(true);
    const listData: TaskData[] = await getTodoList()
    setTodos(listData)
    setCountScroll(countScroll + 1);
    setLoading(false);
  }

  const fetchMoreTodos = async () => {
    setLoading(true);
    const newTodos : TaskData[] = await getTodoList(countScroll)
    setTodos([...todos, ...newTodos]);
    setCountScroll(countScroll + 1);
    setLoading(false);
  };
  
  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(()=>{
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[todos])

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    fetchMoreTodos()
    console.log('Fetch more list items!');
  }

  const deleteTask = (id : string) =>{
    console.log(id);
    setTodos(todos.filter((item,index)=>{return item.id !== id}))
  }

  return (
    <div className='h-screen flex justify-center'>
      <GroupDateList tasks={todos} onDeleteTask={deleteTask}/>
      {loading && <div>Loading...</div>}
    </div>
  )
}

export default TodoList
