import { List } from 'antd'
import { Loading } from 'components'
import { useEffect, useState } from 'react'
import postService from 'services/post'

import { PostPreview } from './components'

const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('elo')
    setLoading(true)
    postService
      .fetchPosts()
      .then((data) => {
        console.log('then')
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
