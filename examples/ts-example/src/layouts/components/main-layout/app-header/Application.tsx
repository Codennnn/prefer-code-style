import { ApplicationOne } from '@icon-park/react'
import { Popover } from 'antd'
import PropTypes from 'prop-types'

export default function ApplicationIcon({ className, style }) {
  const apps = [
    {
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/app_icon_1.png',
      name: 'Skote',
      link: 'https://gitee.com/chinesee',
    },
    {
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/app_icon_2.png',
      name: 'Frest',
      link: 'https://gitee.com/chinesee',
    },
    {
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/app_icon_4.png',
      name: 'Share',
      link: 'https://gitee.com/chinesee',
    },
    {
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/app_icon_3.png',
      name: 'Admin',
      link: 'https://gitee.com/chinesee',
    },
  ]
  const app = () => (
    <div className="flex w-64 flex-wrap">
      {apps.map(({ icon, name, link }) => (
        <a
          key={name}
          className="w-1/3 "
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex flex-col items-center px-4 py-2">
            <img
              alt={name}
              className="mb-2 h-8 w-8 object-contain"
              src={icon}
            />
            <div>{name}</div>
          </div>
        </a>
      ))}
    </div>
  )

  return (
    <Popover className={className} content={app} style={style}>
      <ApplicationOne className="cursor-pointer" size={23} />
    </Popover>
  )
}

ApplicationIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
}
ApplicationIcon.defaultProps = {
  className: '',
  style: {},
}
