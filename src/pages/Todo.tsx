import React from 'react'
import Search from '../components/Search'
import { useState } from 'react'
const Todo = () => {
  const [keywords, setKeywords] = useState<null | string>(null);
  return (
    <div>
      Todo page
      {keywords}
      <Search onChange={(val) => {setKeywords(val)}}/>
    </div>
  )
}

export default Todo
