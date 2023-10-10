"use client"

import { useState } from 'react'

const Searchbar = () => {
const [setsearchPrompt, setSetsearchPrompt] = useState('');

const handleSubmit = (event: FormEvent<HTMLFo) => {}

  return (
<form 
      className="flex flex-wrap gap-4 mt-12" 
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        value={searchPrompt}
        onChange={(e) => setSetsearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />

      <button 
        type="submit" className="searchbar-btn">
      Search
      </button>
    </form>
    )
}

export default Searchbar