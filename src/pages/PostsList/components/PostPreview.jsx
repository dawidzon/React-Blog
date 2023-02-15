import { LikeOutlined } from '@ant-design/icons'
import { Button, List, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

import IconText from './IconText'

const { Paragraph } = Typography

const PostPreview = ({ post }) => {
  const navigate = useNavigate()

  const handleNavigate = (postId) => navigate(`/posts/${postId}`)

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
