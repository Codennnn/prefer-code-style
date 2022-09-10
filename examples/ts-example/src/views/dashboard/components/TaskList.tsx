import { DeleteOne, Edit } from '@icon-park/react'
import { Checkbox, Empty, Tabs } from 'antd'
import PropTypes from 'prop-types'

const { TabPane } = Tabs

export default function TaskList({ data }) {
  return (
    <Tabs>
      <TabPane key="1" tab="进行中">
        <ul className="overflow-auto" style={{ maxHeight: '300px' }}>
          {data.map(({ id, title, content, checked = false }) => (
            <li
              key={id}
              className="flex items-center py-4"
              style={{ borderBottom: '1px solid #f1f1f1' }}
            >
              <div className="px-3">
                <Checkbox defaultChecked={checked} />
              </div>
              <div className="w-3/5 px-3">
                <div className="font-semibold truncate">{title}</div>
                <div className="truncate" style={{ maxWidth: '100%' }}>
                  {content}
                </div>
              </div>
              <div className="flex items-center px-3 ml-auto">
                <Edit className="mr-2 cursor-pointer success" size={18} />
                <DeleteOne className="cursor-pointer danger" size={18} />
              </div>
            </li>
          ))}
        </ul>
      </TabPane>
      <TabPane key="2" tab="待完成">
        <Empty />
      </TabPane>
    </Tabs>
  )
}

TaskList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
