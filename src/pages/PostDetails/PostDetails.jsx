import { LikeOutlined } from '@ant-design/icons'
import { IconText, Loading } from 'components'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { postService } from 'services'

const PostDetails = () => {
  const { postId } = useParams()

  const {
    isLoading,
    data: post,
    error,
  } = useQuery(['post', postId], () => postService.fetchPost(postId))

  const navigate = useNavigate()
  const handleNotFoundPage = () => navigate('/not-found')

  if (error) {
    if (error?.message === 'Not found') {
      handleNotFoundPage()
    } else if (error?.message !== 'Not found') {
      return <h1>{error.message}</h1>
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
          <IconText icon={LikeOutlined} text={post.likesCount} />
        </>
      )}
    </>
  )
}
export default PostDetails
