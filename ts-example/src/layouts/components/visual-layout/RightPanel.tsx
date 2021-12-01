import './RightPanel.scss'

import { Tabs } from 'antd'

function SettingStyle() {
  return <div className="content">123</div>
}

export default function RightPanel() {
  const tabs = [
    { id: '1', title: '样式', renderComponent: () => SettingStyle() },
    // { id: '2', title: '设置', innerComponent: <div>321</div> },
  ]

  return (
    <aside className="right-panel">
      <Tabs defaultActiveKey="1" type="card">
        {tabs.map((tab) => (
          <Tabs.TabPane key={tab.id} tab={tab.title}>
            {tab.renderComponent()}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </aside>
  )
}
