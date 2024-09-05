"use client"
import React, { FC, useEffect, useRef, useState } from 'react'
import { getAllData, getDoingList, getDoneList, getTodoList, TaskData, TodoData } from '../TodoAPI'
import GroupDateList from './GroupDateList'

export interface GroupedData {
  [data: string]: TaskData[];
}

interface Props{
  status: string
}

const TodoList: FC<Props> = ({status}) => {
  const [todos, setTodos] = useState<TaskData[]>([])
  const [countScroll, setCountScroll] = useState<number>(0)
  const [loading, setLoading] = useState(false);


  const fetchTodos = async (status : string) => {
    let listData : TaskData[] = [];
    setLoading(true);
    switch (status) {
      case "todo":
        listData = await getTodoList()
        break;
      case "doing":
        listData = await getDoingList()
        break;
      case "done":
        listData = await getDoneList()
        break
      default:
        listData = []
        break;
    }
    setTodos(listData)
    setCountScroll(countScroll + 1);
    setLoading(false);
  }

  const fetchMoreTodos = async () => {
    let newTodos : TaskData[] = []
    setLoading(true);
    switch (status) {
      case "todo":
        newTodos = await getTodoList(countScroll)
        break;
      case "doing":
        newTodos = await getDoingList(countScroll)
        break;
      case "done":
        newTodos = await getDoneList(countScroll)
        break
      default:
        newTodos = []
        break;
    }
    // const newTodos : TaskData[] = await getTodoList(countScroll)
    setTodos([...todos, ...newTodos]);
    setCountScroll(countScroll + 1);
    setLoading(false);
  };
  
  useEffect(() => {
    fetchTodos(status);
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
