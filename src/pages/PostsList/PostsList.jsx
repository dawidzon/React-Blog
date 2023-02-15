import { List } from 'antd'
import { useEffect, useState } from 'react'

import { Loading } from '../../components'
import { PostPreview } from './components'

const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState([false])

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <List
          bordered
          itemLayout="vertical"
          dataSource={posts}
          renderItem={(post) => <PostPreview key={post.id} post={post} />}
        />
      )}
    </>
  )
}

export default PostsList
