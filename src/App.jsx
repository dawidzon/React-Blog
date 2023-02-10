import './App.css'

import { useState } from 'react'

import { PostsList } from './pages'

const App = () => {
  const [state, setState] = useState(0)

  return <PostsList />
}

export default App
