import { LikeOutlined } from '@ant-design/icons'
import { List, Space, Button } from 'antd'
import React from 'react'

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const PostPreview = ({ post }) => {
  console.log(typeof post.body)

  function countToThreeDots(text) {
    let counter = 0
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '.') {
        counter++
        if (counter === 3) {
          return i + 1
        }
      }
    }
  }

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
        description={post.body.slice(0, countToThreeDots(post.body))}
      />
    </List.Item>
  )
}
export default PostPreview
