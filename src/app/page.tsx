import Image from "next/image";
import TodoPage from "./view/TodoPage/page"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TodoPage/>
    </main>
  );
}
