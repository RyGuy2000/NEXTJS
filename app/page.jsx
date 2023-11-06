"use client"
import Counter from "./Counter"
import Search from "./Search"

export default function Page() {
    return <div>
      <h1>NextJS Page</h1>
      <p>Number Counters </p><Counter step ={1} /><Counter step = {2} />
      <p>
        <a href="https://github.com/RyGuy2000/NEXTJS"> My GitHub Repository</a>
        </p>
        <p>Search bar</p><Search />
    </div>
    
  }