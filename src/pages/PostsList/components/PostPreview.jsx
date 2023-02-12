import { LikeOutlined } from '@ant-design/icons'
import { Button, List, Space, Typography } from 'antd'
import React from 'react'

const { Paragraph } = Typography

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const PostPreview = ({ post }) => {
  return (
    <List.Item
      actions={[
        <IconText
          icon={LikeOutlined}
          text={post.likesCount}
          key="list-vertical-like-o"
        />,
        <Button key="button-vertical">More...</Button>,
      ]}
    >
      <List.Item.Meta
        title={post.title}
        description={
          <Paragraph
            ellipsis={{
              rows: 2,
              expandable: true,
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
