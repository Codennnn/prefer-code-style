import { Button, DatePicker, Form, Input, Select } from 'antd'
import dayjs from 'dayjs'

const { Item } = Form
const { Option } = Select

export default function BuyForm() {
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    const formatDate = dayjs(values.date).format('YYYY-MM-DD')
    // LOG:
    console.log({ ...values, date: formatDate })
  }

  return (
    <>
      <div className="flex items-end justify-between my-4">
        <div className="text-lg font-bold">现有货物</div>
        <div>
          <span className="mr-1 text-xl font-bold primary">8,766</span>
          <span className="text-sm font-normal">件</span>
        </div>
      </div>
      <Form
        form={form}
        initialValues={{ payment: 'card_pay', date_setting: 'delivery_date' }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Item label="支付方式" name="payment">
          <Select>
            <Option value="wechat_pay">微信支付</Option>
            <Option value="ali_pay">支付宝支付</Option>
            <Option value="card_pay">信用卡支付</Option>
          </Select>
        </Item>
        <Item label="日期设置">
          <Input.Group compact>
            <Item noStyle name="date_setting">
              <Select style={{ width: '50%' }}>
                <Option value="delivery_date">到货日期</Option>
                <Option value="payment_date">付款日期</Option>
                <Option value="settlement_date">结算日期</Option>
              </Select>
            </Item>
            <Item noStyle name="date">
              <DatePicker style={{ width: '50%' }} />
            </Item>
          </Input.Group>
        </Item>
        <Item>
          <Input addonAfter="元" addonBefore="合计金额" />
        </Item>
        <Item className="mb-0 text-center">
          <Button htmlType="submit" type="primary">
            确认购买
          </Button>
        </Item>
      </Form>
    </>
  )
}
