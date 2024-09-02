"use client"
import React, { FC, useEffect, useRef, useState } from 'react'
import { getAllData, getTodoList, TaskData, TodoData } from '../TodoAPI'

const TodoList: FC = () => {
  const [todos, setTodos] = useState<TaskData[]>([])
  const [allData, setAllData] = useState<TodoData>({
    tasks : [],
    pageNumber : 1,
    totalPages : 0,
  })

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

  const fetchAllData = async () =>{
    const data : TodoData = await getAllData()
    setAllData(data);
  }
  
  useEffect(() => {
    fetchTodos()
    fetchAllData()
  }, [])

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

  return (
    <div className='h-screen'>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.title}</li>
        ))}
      </ul>
      {loading && <div>Loading...</div>}
    </div>
  )
}

export default TodoList
