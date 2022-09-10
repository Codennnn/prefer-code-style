import { FinancingOne, MallBag, SettingTwo, Wallet } from '@icon-park/react'
import { Avatar, Badge, Button, Divider, Dropdown, Menu, Select } from 'antd'

import profileImg from '@/assets/profile_img.png'
import { useTypedSelector } from '@/redux'

import DonutChart from './charts/DonutChart'
import LineChart from './charts/LineChart'
import Row from './components/Row'
import StatisticsCard from './components/StatisticsCard'
import TaskList from './components/TaskList'
import TopSellingProduct from './components/TopSellingProduct'

export default function DashboardSaas() {
  const info = useTypedSelector(({ user }) => user.info)

  return (
    <>
      <Row className="items-center custom-card">
        <Avatar size={66} src={info.avatar} />
        <div className="ml-4 text-sm">
          <div>欢迎来到 Portal 数据仪表盘</div>
          <div className="mt-1 text-base font-bold">{info.nickname}</div>
          <div>前端开发工程师</div>
        </div>
        <div className="flex items-center justify-center flex-1">
          <div className="w-32 text-center">
            <div className="text-sm secondary">累计待办</div>
            <div className="mt-1 text-xl font-semibold">24</div>
          </div>
          <div className="w-32 text-center">
            <div className="text-sm secondary">进行中项目</div>
            <div className="mt-1 text-xl font-semibold">18</div>
          </div>
          <div className="w-32 text-center">
            <div className="text-sm secondary">联系人</div>
            <div className="mt-1 text-xl font-semibold">67</div>
          </div>
        </div>
        <div className="self-start ml-auto">
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
            <Button className="flex items-center" size="large" type="primary">
              <SettingTwo className="mr-2" size={18} />
              系统设置
            </Button>
          </Dropdown>
        </div>
      </Row>

      <Row className="flex-wrap">
        <div className="md:w-full md:mb-6 lg:w-1/4 lg:mb-0">
          <div
            className="relative rounded-md primary"
            style={{ background: 'rgba(var(--primary), .25)' }}
          >
            <div className="p-4 text-sm">
              <div className="text-base font-bold">美好的一天开始啦！</div>
              <div className="mt-2 mb-4">基于 React 开发的系统模板</div>
              <ul className="pl-5 list-disc">
                <li className="mb-1">最佳的开发实践</li>
                <li>丰富的插件</li>
              </ul>
            </div>
            <img
              alt="profile"
              className="absolute bottom-0 right-0 w-2/5"
              src={profileImg}
              style={{ maxWidth: '250px' }}
            />
          </div>
        </div>

        <StatisticsCard
          data={[
            {
              label: '订单数量',
              Icon: MallBag,
              value: 2200,
              percent: 0.4,
            },
            {
              label: '净收入',
              Icon: Wallet,
              value: 2200,
              percent: 0,
            },
            {
              label: '平均价格',
              Icon: FinancingOne,
              value: 2200,
              percent: -0.15,
            },
          ]}
        />
      </Row>

      <Row>
        <div className="w-2/3">
          <div className="custom-card">
            <div className="flex items-center mb-6">
              <h4 className="custom-card__title">月收入统计</h4>
              <Select
                className="ml-auto"
                defaultValue="year"
                style={{ width: 120 }}
              >
                <Select.Option value="year">年度</Select.Option>
                <Select.Option value="month">月度</Select.Option>
              </Select>
            </div>

            <div className="flex justify-between">
              <div className="w-1/3 whitespace-no-wrap">
                <div className="text-gray-600">本月营收</div>
                <div className="my-2 text-xl font-bold">￥37421.35</div>
                <div className="text-sm">
                  相较于上月
                  <span className="px-2 py-1 ml-2 rounded-lg success bg-success-light">
                    + 0.21%
                  </span>
                </div>
                <Button className="my-5" type="primary">
                  查看收入明细
                </Button>
                <div className="text-gray-600">上个月</div>
                <div className="my-2 text-xl font-bold">￥29564.25</div>
              </div>
              <div className="w-2/3" style={{ height: '320px' }}>
                <LineChart />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 pl-6">
          <div className="custom-card">
            <div className="mb-6">
              <h4 className="custom-card__title">销售分析</h4>
            </div>
            <div>
              <DonutChart />
            </div>
            <div>
              <ul className="flex items-center justify-around mt-6">
                <li className="text-center text-gray-600">
                  <Badge color="#556ee6" text={<span>Ethereum</span>} />
                  <div className="text-lg text-gray-700">￥2,132</div>
                </li>
                <li className="text-center text-gray-600">
                  <Badge color="#f1b44c" text={<span>Bitcoin</span>} />
                  <div className="text-lg text-gray-700">￥1,763</div>
                </li>
                <li className="text-center text-gray-600">
                  <Badge color="#50a5f1" text={<span>Litecoin</span>} />
                  <div className="text-lg text-gray-700">￥973</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <div className="w-1/3 pr-3">
          <div className="custom-card">
            <div className="mb-6">
              <h4 className="custom-card__title">畅销产品</h4>
            </div>
            <div className="text-center">
              <div>小米电视机</div>
              <div className="mt-1 mb-5 text-2xl font-bold">￥98220</div>
              <div className="text-sm">
                总销售额同比以往
                <span className="ml-1 success">上升 12%</span>
              </div>
            </div>
            <TopSellingProduct
              products={[
                {
                  name: '卫龙辣条',
                  desc: '现代化休闲食品品牌',
                  value: 40,
                  percent: 37,
                  color: 'primary',
                },
                {
                  name: '火鸟波特星',
                  desc: '外形很不一样的概念机箱',
                  value: 40,
                  percent: 72,
                  color: 'success',
                },
                {
                  name: '技嘉显卡 1650s',
                  desc: '采用GeForce® GTX 1650 SUPER™显示核心',
                  value: 40,
                  percent: 54,
                  color: 'danger',
                },
              ]}
            />
          </div>
        </div>

        <div className="w-1/3 px-3">
          <div className="custom-card">
            <h4 className="custom-card__title">任务</h4>
            <TaskList
              data={[
                {
                  id: 't1',
                  title: '微前端是一种利用',
                  content: '微件拆分来达到工程拆分治理的方案',
                  checked: true,
                },
                {
                  id: 't2',
                  title: '物理层面可复用的土壤',
                  content: '出现了跨业务线互相引用混乱',
                },
                {
                  id: 't3',
                  title: '路由级别的拆分',
                  content: '一个子工程对应一个子业务线',
                },
                {
                  id: 't4',
                  title: '微前端架构下的业务变化',
                  content: '子工程的入口文件地址和路由地址的映射信息',
                },
                {
                  id: 't5',
                  title: '路由的管理方案',
                  content: '动态路由方案是想要进行路由级别的拆分',
                },
              ]}
            />
            <Divider />
            <div className="text-center">
              <Button size="large" type="primary">
                添加新任务
              </Button>
            </div>
          </div>
        </div>

        <div className="w-1/3 pl-3">
          <div className="custom-card">
            <div className="mb-6">
              <h4 className="custom-card__title">畅销产品</h4>
            </div>
            <div className="text-center">
              <div>小米电视机</div>
              <div className="mt-1 mb-5 text-2xl font-bold">￥98220</div>
              <div className="text-sm">
                总销售额同比以往
                <span className="ml-1 success">上升 12%</span>
              </div>
            </div>
            <TopSellingProduct
              products={[
                {
                  name: '卫龙辣条',
                  desc: '现代化休闲食品品牌',
                  value: 40,
                  percent: 37,
                  color: 'primary',
                },
                {
                  name: '火鸟波特星',
                  desc: '外形很不一样的概念机箱',
                  value: 40,
                  percent: 72,
                  color: 'success',
                },
                {
                  name: '技嘉显卡 1650s',
                  desc: '采用GeForce® GTX 1650 SUPER™显示核心',
                  value: 40,
                  percent: 54,
                  color: 'danger',
                },
              ]}
            />
          </div>
        </div>
      </Row>
    </>
  )
}
