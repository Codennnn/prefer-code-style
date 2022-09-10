import { DownOutlined, UpOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconBox = styled.div`
  color: rgba(var(--primary), 1);
  background: rgba(var(--primary), 0.2);
`

export default function StatisticsCard({ data }) {
  return (
    <>
      {data.map(({ label, Icon, value, percent }) => (
        <div key={label} className="md:w-1/3 lg:w-1/4 lg:pl-6">
          <div className="flex flex-col justify-between h-full p-4 bg-white rounded">
            <div className="flex items-center">
              <IconBox className="flex items-center justify-center mr-3 rounded-full w-9 h-9">
                <Icon size={21} strokeWidth={3.5} />
              </IconBox>
              <span>{label}</span>
            </div>
            <div>
              <div className="flex items-center mb-1 text-xl font-semibold">
                ￥{value}
                {percent > 0 ? (
                  <UpOutlined className="ml-2 text-xs success" />
                ) : percent < 0 ? (
                  <DownOutlined className="ml-2 text-xs danger" />
                ) : null}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <div
                  className={classNames(
                    'mr-2 px-2 flex items-center justify-center rounded ',
                    {
                      success: percent > 0,
                      danger: percent < 0,
                      warning: percent === 0,
                    }
                  )}
                  style={{
                    background:
                      percent > 0
                        ? 'rgba(var(--success), .2)'
                        : percent < 0
                        ? 'rgba(var(--danger), .2)'
                        : 'rgba(var(--warning), .2)',
                    fontSize: '12px',
                  }}
                >
                  {percent > 0 ? '+' : percent < 0 ? '-' : ''}{' '}
                  {Math.abs(percent)}%
                </div>
                同比上期
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

StatisticsCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
