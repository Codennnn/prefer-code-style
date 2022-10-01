import { ArrowCircleDown, ArrowCircleUp } from '@icon-park/react'
import { Empty } from 'antd'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import styled from 'styled-components'

const Title = styled.div`
  height: 25px;
  & > .title-text {
    &:hover {
      z-index: 10;
      width: auto;
      background: white;
      box-shadow: 0 0 6px 2px #dedede;
    }
  }
`

export default function TaskList({ data }) {
  return (
    <PerfectScrollbar style={{ maxHeight: '300px' }}>
      <ul>
        {data.length > 0 ? (
          data.map(({ id, type, title, time, value, count }) => (
            <li
              key={id}
              className="flex items-center py-4"
              style={{ borderBottom: '1px solid #f1f1f1' }}
            >
              <div className="px-3">
                {type === 1 ? (
                  <ArrowCircleUp className="danger" size={20} />
                ) : (
                  <ArrowCircleDown className="primary" size={20} />
                )}
              </div>
              <div className="w-2/5 px-3">
                <Title>
                  <div className="title-text">{title}</div>
                </Title>
                <div
                  className="text-xs text-gray-600"
                  style={{ maxWidth: '100%' }}
                >
                  {dayjs(time).format('YYYY-MM-DD')}
                </div>
              </div>
              <div className="ml-auto flex items-center px-3">{value}</div>
              <div className="flex items-center px-3">￥{count}</div>
            </li>
          ))
        ) : (
          <Empty />
        )}
      </ul>
    </PerfectScrollbar>
  )
}

TaskList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
