import { More } from '@icon-park/react'
import { Avatar, Dropdown, Image, Menu, Table, Tooltip } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getProjectList } from '@/api/project'

export default function ProjectList() {
  const [tableList, setTableList] = useState([])
  const [tableLoading, setTableLoading] = useState(false)
  const [pagination] = useState({
    pageSize: 5,
  })

  useEffect(() => {
    async function getProjects() {
      try {
        setTableLoading(true)
        const { data } = await getProjectList({})
        setTableList(data)
      } finally {
        setTableLoading(false)
      }
    }
    getProjects()
  }, [])

  const dropdownMenu = () => (
    <Menu>
      <Menu.Item>查看</Menu.Item>
      <Menu.Item>编辑</Menu.Item>
      <Menu.Item>删除</Menu.Item>
    </Menu>
  )

  const pg = {
    0: { color: 'info', text: '规划中' },
    1: { color: 'primary', text: '实施中' },
    2: { color: 'warning', text: '交付测试' },
    3: { color: 'secondary', text: '已完成' },
  }

  const columns = [
    {
      title: '#',
      dataIndex: 'icon',
      render(icon) {
        return (
          <Image
            fallback="https://gitee.com/chinesee/images/raw/master/magic-ui/img_001.png"
            height={100}
            src={icon}
            width={100}
          />
        )
      },
    },
    {
      title: '项目名称',
      dataIndex: 'name',
      render(name) {
        return (
          <Link className="primary" to="/page1">
            {name}
          </Link>
        )
      },
    },
    {
      title: '周期',
      dataIndex: 'date',
    },
    {
      title: '进度',
      dataIndex: 'progress',
      render(progress) {
        return (
          <span
            className={`${pg[progress].color} rounded px-2 py-1`}
            style={{ background: `rgba(var(--${pg[progress].color}-light))` }}
          >
            {pg[progress].text}
          </span>
        )
      },
    },
    {
      title: '成员',
      dataIndex: 'team',
      render(team) {
        return (
          <Avatar.Group maxCount={3}>
            {team.map(({ id, name, avatar }) => (
              <Tooltip key={id} title={name}>
                <Avatar src={avatar} />
              </Tooltip>
            ))}
          </Avatar.Group>
        )
      },
    },
    {
      title: '操作',
      key: 'id',
      render() {
        return (
          <Dropdown overlay={dropdownMenu()} trigger={['click']}>
            <More className="cursor-pointer text-gray-600" size="24" />
          </Dropdown>
        )
      },
    },
  ]

  return (
    <>
      <Table
        columns={columns}
        dataSource={tableList}
        loading={tableLoading}
        pagination={pagination}
        rowKey="id"
      />
    </>
  )
}
