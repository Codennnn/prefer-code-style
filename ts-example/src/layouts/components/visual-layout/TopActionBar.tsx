import './TopActionBar.scss'

import { Back, MoveInOne, Next, Page, Save } from '@icon-park/react'

export default function TopActionBar() {
  const actions = [
    {
      title: '布局',
      icon: MoveInOne,
    },
    {
      title: '预览',
      icon: Page,
    },
    {
      title: '上一步',
      icon: Back,
    },
    {
      title: '下一步',
      icon: Next,
    },
    {
      title: '保存',
      icon: Save,
    },
  ]

  return (
    <header className="top-action-bar">
      <div className="actions">
        {actions.map(({ title, icon: Icon }) => {
          return (
            <div key={title} className="action-item">
              <Icon size="20" />
              <div>{title}</div>
            </div>
          )
        })}
      </div>
    </header>
  )
}
