import './App.css'

import { MainLayout } from 'components'
import { Navigate, Route, Routes } from 'react-router-dom'

import { NotFound, PostDetails, PostsList } from './pages'

const App = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="posts">
        <Route index element={<PostsList />} />
        <Route path=":postId" element={<PostDetails />} />
      </Route>
    </Route>
    <Route path="not-found" element={<NotFound />} />
    <Route path="*" element={<Navigate to="posts" replace />} />
  </Routes>
)

export default App
