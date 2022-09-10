import {
  Button,
  Collapse,
  DatePicker,
  Form,
  Input,
  message,
  Radio,
  Select,
} from 'antd'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { createProject } from '@/api/project'

export default function NewProject() {
  const [creating, setCreating] = useState(false)
  const history = useHistory()

  async function createNewProject(data) {
    try {
      setCreating(true)
      await createProject(data)
      message.success('已创建一个项目')
      history.push('/project-grid')
    } catch {
      setCreating(false)
    }
  }

  const onFinish = (values) => {
    console.log('Success:', values)
    createNewProject(values)
  }

  const wrapperCol = { md: 18, lg: 10 }

  return (
    <>
      <h2 className="mb-4 text-xl font-bold">创建新项目</h2>
      <Form
        className="p-6 bg-white rounded-lg"
        colon={false}
        initialValues={{ type: 'public' }}
        labelCol={{ span: 2 }}
        name="newProject"
        requiredMark={false}
        size="large"
        wrapperCol={wrapperCol}
        onFinish={onFinish}
      >
        <Form.Item
          label="工作空间"
          name="workplace"
          rules={[{ required: true, message: '请输入工作空间' }]}
        >
          <Select placeholder="请选择工作空间">
            {[
              { label: 'Magic', value: 'magic' },
              { label: 'LoveShare', value: 'love_share' },
            ].map(({ value, label }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="项目名称"
          name="name"
          rules={[{ required: true, message: '请输入项目名称' }]}
        >
          <Input placeholder="请输入项目名称" />
        </Form.Item>

        <Form.Item
          label="项目描述"
          name="description"
          rules={[{ required: true, message: '请填写项目描述' }]}
        >
          <Input.TextArea placeholder="请填写项目描述" rows={4} />
        </Form.Item>

        <Form.Item
          label="项目周期"
          name="date"
          rules={[{ required: true, message: '请确认项目周期' }]}
        >
          <DatePicker.RangePicker size="large" />
        </Form.Item>

        <Form.Item wrapperCol={{ ...wrapperCol, offset: 2 }}>
          <Button htmlType="submit" loading={creating} type="primary">
            新建项目
          </Button>
        </Form.Item>

        <Collapse ghost>
          <Collapse.Panel key="id" className="primary" header="高级设置">
            <Form.Item label="工作空间" name="aa">
              <Select placeholder="请选择工作空间">
                <Select.Option value="jack">Jack</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="访问权限" name="type" wrapperCol={wrapperCol}>
              <Radio.Group
                options={[
                  { label: '公开', value: 'public' },
                  { label: '私有', value: 'private' },
                ]}
              />
            </Form.Item>
          </Collapse.Panel>
        </Collapse>
      </Form>
    </>
  )
}
