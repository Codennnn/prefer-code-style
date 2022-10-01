import { Divider, Progress } from 'antd'
import PropTypes from 'prop-types'

export default function TopSellingProduct({ products }) {
  return (
    <ul>
      {products.map(({ name, desc, percent, color }) => (
        <li key={name}>
          <Divider />
          <div className="flex items-center justify-end">
            <div className="mr-auto">
              <div className="mb-1 font-bold">{name}</div>
              <div className="text-sm text-gray-500">{desc}</div>
            </div>
            <div>
              <Progress
                percent={percent}
                showInfo={false}
                strokeColor={`rgba(var(--${color}), .8)`}
                strokeWidth={14}
                type="circle"
                width={45}
              />
            </div>
            <div className="whitespace-no-wrap ml-6">
              <div>销售</div>
              <div className="font-bold">{percent}%</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

TopSellingProduct.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}
