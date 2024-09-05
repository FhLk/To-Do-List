"use client"
import Todo from "./todo/page"
import Login from "./login/page"

export default function Home() {
  return (
      <main className="h-screen">
          <Login/>
        {/* <Todo/> */}
      </main>
  );
}
