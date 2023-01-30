import { PostsList } from './pages/PostsList.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [state, setState] = useState(0)
  return <PostsList />
}

export default App
