"use client"
import React, { useEffect } from 'react'
import TodoList from "@/components/TodoPage/TodoList"

function page() {
  return (
    <div>
      <TodoList status='doing'/>
    </div>
  )
}

export default page
