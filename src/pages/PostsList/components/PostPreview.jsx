import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  LikeOutlined,
} from '@ant-design/icons'
import { Button, List, Modal, Typography } from 'antd'
import { IconText } from 'components'
import { showErrorNotifications, showSuccessNotification } from 'helpers'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { postService } from 'services'

const { Paragraph } = Typography

const PostPreview = ({ post }) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const handleNavigate = (postId) => navigate(`/posts/${postId}`)

  const { isLoading, mutate } = useMutation(
    () => postService.deletePost(post.id),
    {
      onSuccess: () => {
        showSuccessNotification()
        queryClient.invalidateQueries('posts')
      },
      onError: (error) => {
        showErrorNotifications(error.message)
      },
    }
  )

  const handleOK = () => {
    mutate()
  }

  const confirm = () => {
    Modal.confirm({
      title: 'Delete post',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure?',
      onOk: handleOK,
    })
  }

  return (
    <List.Item
      actions={[
        <IconText
          icon={LikeOutlined}
          text={post.likesCount}
          key="list-vertical-like-o"
        />,
        <Button onClick={() => handleNavigate(post.id)} key="button-vertical">
          More...
        </Button>,
        <Button
          onClick={confirm}
          danger
          key="button-delete"
          loading={isLoading}
          icon={<DeleteOutlined />}
        >
          Delete
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={post.title}
        description={
          <Paragraph
            ellipsis={{
              rows: 2,
            }}
          >
            {post.body}
          </Paragraph>
        }
      />
    </List.Item>
  )
}
export default PostPreview
