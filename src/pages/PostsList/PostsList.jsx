import { List } from 'antd'
import { Loading } from 'components'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { postService } from 'services'

import { PostPreview } from './components'

const PostsList = () => {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery('posts', postService.fetchPosts)

  const navigate = useNavigate()
  const handleNotFoundPage = () => navigate('/not-found')

  if (error) {
    if (error?.message === 'Not found') {
      handleNotFoundPage()
    } else {
      return <h1>{error.message}</h1>
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
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
