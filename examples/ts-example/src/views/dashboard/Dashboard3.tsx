import { ArrowRightOutlined } from '@ant-design/icons'
import { Edit, More, SettingOne } from '@icon-park/react'
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Dropdown,
  Menu,
  Radio,
  Rate,
  Tabs,
} from 'antd'

import { ReactComponent as AngularIcon } from '@/assets/icon_angular.svg'
import { ReactComponent as ReactIcon } from '@/assets/icon_react.svg'
import { ReactComponent as VueIcon } from '@/assets/icon_vue.svg'
import illustration from '@/assets/illustration_1.png'
import { useTypedSelector } from '@/redux'

import CircleChart from './charts/CircleChart'
import OverviewChart from './charts/OverviewChart'
import BuyForm from './components/BuyForm'
import ChartCards from './components/ChartCards'
import Row from './components/Row'
import TransactionList from './components/TransactionList'

export default function DashboardCrypto() {
  const info = useTypedSelector(({ user }) => user.info)

  return (
    <>
      <Row>
        <div className="w-1/3 pr-3">
          <div className="custom-card">
            <div className="mb-6 flex items-center justify-between">
              <Avatar size={40} src={info.avatar} />
              <div>
                <Dropdown
                  overlay={
                    <Menu className="text-center">
                      <Menu.Item key="0">这是一个操作</Menu.Item>
                      <Menu.Item key="1">这是另一个操作</Menu.Item>
                      <Menu.Item key="2">还是一个操作</Menu.Item>
                    </Menu>
                  }
                  trigger={['click']}
                >
                  <More className="cursor-pointer text-gray-600" size={24} />
                </Dropdown>
              </div>
            </div>

            <div className="mt-1 text-base font-bold">华山风清扬</div>
            <div className="my-1 text-sm text-gray-500">
              czc12580520@gmail.com
            </div>
            <div className="text-sm text-gray-500">ID: #JK042</div>

            <Divider />

            <div className="flex items-center">
              <div className="flex-1">
                <div>财富余额：</div>
                <div className="text-lg font-bold">￥6908.40</div>
              </div>
              <div className="flex-1">
                <div>本月消费：</div>
                <div className="text-lg font-bold">￥2265.10</div>
              </div>
            </div>

            <Divider />

            <div className="text-center">
              <Button>我的存款</Button>
              <Button className="ml-3" type="primary">
                本月账单
              </Button>
            </div>
          </div>
        </div>

        <div className="w-2/3 pl-3">
          <div className="custom-card mb-6 flex items-center justify-between">
            <div>
              <div className="primary text-lg font-bold">欢迎再次访问</div>
              <div className="mt-1 mb-3">Portal 数据仪表盘</div>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                {[
                  '朽骨在此相迎，山谷依然',
                  '在此，懵懂的眼睛，初临惊愕',
                  '在此，学会尝试是必修课',
                ].map((text) => (
                  <li key={text} className="li-marker">
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <img
              alt="插图"
              className="w-2/5"
              src={illustration}
              style={{ maxWidth: '250px' }}
            />
          </div>

          <div className="-mx-3 flex">
            <ChartCards
              data={[
                {
                  icon: VueIcon,
                  name: 'Vue',
                  seriesName: 'Vue',
                  seriesData: [14, 12, 2, 47, 42, 15, 47, 75, 65, 19, 14],
                  color: '#34c38f',
                  count: 8848,
                  value: '+ 254（14.2%）',
                },
                {
                  icon: ReactIcon,
                  name: 'React',
                  seriesName: 'React',
                  seriesData: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
                  color: '#50a5f1',
                  count: 4762,
                  value: '+ 128（24.9%）',
                },
                {
                  icon: AngularIcon,
                  name: 'Angular',
                  seriesName: 'Angular',
                  seriesData: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14],
                  color: '#f46a6a',
                  count: 2286,
                  value: '+ 45（2.1%）',
                },
              ]}
            />
          </div>
        </div>
      </Row>

      <Row>
        <div className="w-2/3 pr-3">
          <div className="custom-card">
            <h4 className="custom-card__title">钱包余额</h4>

            <div className="mt-8 flex">
              <div className="w-1/3">
                <div>可用余额</div>
                <div className="mt-2 text-xl font-bold">￥6134.39</div>
                <div className="success">+ 0.12 ( 0.02 % ) </div>
                <div className="mt-5 flex items-center justify-between text-gray-600">
                  <div className="flex-1">
                    <div>收入</div>
                    <div className="mt-1 text-gray-900">￥2632.46</div>
                  </div>
                  <div className="flex-1">
                    <div>支出</div>
                    <div className="mt-1 text-gray-900">￥924.38</div>
                  </div>
                </div>
                <Button
                  className="mt-8 flex items-center"
                  size="large"
                  type="primary"
                >
                  查看更多
                  <ArrowRightOutlined />
                </Button>
              </div>
              <div className="w-1/3" style={{ height: '260px' }}>
                <CircleChart />
              </div>
              <div className="w-1/3">
                <ul className="flex h-full flex-col justify-between py-6 pl-8">
                  <li className="text-gray-600">
                    <Badge
                      color="#556ee6"
                      text={<span className="text-lg">Ethereum</span>}
                    />
                    <div>4.5701 ETH = $ 1123.64</div>
                  </li>
                  <li className="text-gray-600">
                    <Badge
                      color="#f1b44c"
                      text={<span className="text-lg">Bitcoin</span>}
                    />
                    <div>0.4412 BTC = $ 4025.32</div>
                  </li>
                  <li className="text-gray-600">
                    <Badge
                      color="#50a5f1"
                      text={<span className="text-lg">Litecoin</span>}
                    />
                    <div>35.3811 LTC = $ 2263.09</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 pl-3">
          <div className="custom-card">
            <div className="flex items-center justify-between">
              <h4 className="custom-card__title">概况</h4>
              <Radio.Group value="year">
                <Radio.Button value="month">一月</Radio.Button>
                <Radio.Button value="halfYear">半年</Radio.Button>
                <Radio.Button value="year">一年</Radio.Button>
              </Radio.Group>
            </div>
            <div style={{ height: '280px' }}>
              <OverviewChart />
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <div className="w-1/3 pr-3">
          <div className="custom-card">
            <h4 className="custom-card__title">交易记录</h4>
            <Tabs type="card">
              <Tabs.TabPane key="1" tab="全部">
                <TransactionList
                  data={[
                    {
                      id: 't1',
                      type: 1,
                      title: 'Epic Games Store',
                      time: new Date().getTime(),
                      value: '0.016 BTC',
                      count: 123.4,
                    },
                    {
                      id: 't2',
                      type: 2,
                      title: 'Death Stranding',
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 15,
                      value: '0.56 ETH',
                      count: 43.4,
                    },
                    {
                      id: 't3',
                      type: 2,
                      title: 'Red Dead Redemption',
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 16,
                      value: '0.56 ETH',
                      count: 76.7,
                    },
                    {
                      id: 't4',
                      type: 1,
                      title: 'Grand Theft Auto V',
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 24,
                      value: '0.56 ETH',
                      count: 98.5,
                    },
                    {
                      id: 't5',
                      type: 2,
                      title: 'STAR WARS Jedi',
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 55,
                      value: '0.56 ETH',
                      count: 233.0,
                    },
                  ]}
                />
              </Tabs.TabPane>
              <Tabs.TabPane key="2" tab="购入">
                <TransactionList
                  data={[
                    {
                      id: 't1',
                      type: 2,
                      title: 'Mortal Shell',
                      time: new Date().getTime(),
                      value: '0.016 BTC',
                      count: 123.4,
                    },
                    {
                      id: 't2',
                      type: 2,
                      title: 'Cyberpunk 2077',
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 15,
                      value: '0.56 ETH',
                      count: 43.4,
                    },
                    {
                      id: 't3',
                      type: 1,
                      title: 'Castle Storm',
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 16,
                      value: '0.56 ETH',
                      count: 76.7,
                    },
                    {
                      id: 't4',
                      type: 2,
                      title: 'HTMAN 3',
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 24,
                      value: '0.56 ETH',
                      count: 98.5,
                    },
                    {
                      id: 't5',
                      type: 1,
                      title: 'Godfall',
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 55,
                      value: '0.56 ETH',
                      count: 233.0,
                    },
                  ]}
                />
              </Tabs.TabPane>
              <Tabs.TabPane key="3" tab="售出">
                <TransactionList
                  data={[
                    {
                      id: 't1',
                      type: 1,
                      title: 'Crysis Remastered',
                      time: new Date().getTime(),
                      value: '0.016 BTC',
                      count: 123.4,
                    },
                    {
                      id: 't2',
                      type: 1,
                      title: "Assassin's Creed",
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 15,
                      value: '0.56 ETH',
                      count: 43.4,
                    },
                    {
                      id: 't3',
                      type: 2,
                      title: 'Mafia II: Definitive Edition',
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 16,
                      value: '0.56 ETH',
                      count: 76.7,
                    },
                    {
                      id: 't4',
                      type: 2,
                      title: 'Sherlock Holmes: Chapter One',
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 24,
                      value: '0.56 ETH',
                      count: 98.5,
                    },
                    {
                      id: 't5',
                      type: 2,
                      title: 'The Outlast Trials',
                      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 55,
                      value: '0.56 ETH',
                      count: 233.0,
                    },
                  ]}
                />
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>

        <div className="w-1/3 px-3">
          <div className="custom-card" style={{ padding: '0' }}>
            <div className="h-48 overflow-hidden">
              <img
                alt="cover"
                className="w-full"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </div>
            <div className="p-4">
              <div className="flex">
                <Avatar
                  className="mr-4 cursor-pointer"
                  size="large"
                  src="https://portrait.gitee.com/uploads/avatars/user/1608/4826670_chinesee_1578975163.png!avatar200"
                />
                <div>
                  <div className="mt-1 mb-2 font-bold text-gray-700">
                    令狐少侠
                  </div>
                  <div className="text-sm text-gray-600">
                    水能载舟，亦可赛艇
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <div>个人信用等级：</div>
                <Rate allowHalf defaultValue={4} />
              </div>
            </div>
            <Divider className="m-0" />
            <div className="flex w-full items-center py-2">
              <div className="flex-1 text-center">
                <SettingOne
                  className="cursor-pointer"
                  size={22}
                  strokeWidth={3}
                />
              </div>
              <Divider type="vertical" />
              <div className="flex-1 text-center">
                <Edit className="cursor-pointer" size={22} strokeWidth={3} />
              </div>
              <Divider type="vertical" />
              <div className="flex-1 text-center">
                <More className="cursor-pointer" size={22} strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 pl-3">
          <div className="custom-card">
            <h4 className="custom-card__title">购买物资</h4>
            <BuyForm />
          </div>
        </div>
      </Row>
    </>
  )
}
