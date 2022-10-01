import { useEffect, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom'

import { getNoticeList } from '@/api/notice'
import { relativeTime } from '@/utils'

export default function Notice() {
  const [noticeList, setNoticeList] = useState([])

  useEffect(() => {
    void (async () => {
      const { data } = await getNoticeList({})
      setNoticeList(data)
    })()
  }, [])

  return (
    <div className="custom-card" style={{ padding: '0' }}>
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{ borderBottom: '1px solid #f1f1f1' }}
      >
        <div className="text-lg font-bold">消息通知</div>
      </div>

      <PerfectScrollbar
        options={{ suppressScrollX: true }}
        style={{ height: '300px' }}
      >
        <ul>
          {noticeList.map(({ id, title, content, time }) => (
            <li
              key={id}
              className="p-3"
              style={{ borderBottom: '1px solid #f2f2f2' }}
            >
              <div className="">
                <div className="text-base">{title}</div>
                <div className="break-all text-gray-500">{content}</div>
                <div>{relativeTime(time)}</div>
              </div>
            </li>
          ))}
        </ul>
      </PerfectScrollbar>

      <Link className="primary block w-full py-2 text-center" to="/">
        查看全部
      </Link>
    </div>
  )
}
