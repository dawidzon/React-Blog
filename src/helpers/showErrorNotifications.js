import { message, notification } from 'antd'

export const showErrorNotifications = (message) =>
  notification.error({ message })
