

"use client"
import Counter from "./Counter"
import Search from "./Search"



export default function Page() {
    return <div>
      <p>Search bar <Search /></p>
      <p>Number Counters <Counter /> <Counter /></p>
      <p>
        <a href="https://github.com/RyGuy2000/NEXTJS"> My GitHub Repository</a>
        </p>
    </div>
    
  }