import Mock from 'mockjs'

Mock.mock(/\/notice\/list/, 'get', {
  code: 2000,
  data: [
    {
      id: 'n1',
      title: '乐享校园二手交易市场',
      content:
        'https://gitee.com/chinesee/images/raw/master/magic-ui/img_001.png',
      time: new Date().getTime() - 1000 * 10,
      type: 0,
    },
    {
      id: 'n2',
      title: '乐享校园二手交易市场',
      content:
        'https://gitee.com/chinesee/images/raw/master/magic-ui/img_001.png',
      time: new Date().getTime() - 1000 * 60 * 5,
      type: 0,
    },
    {
      id: 'n3',
      title: '乐享校园二手交易市场',
      content:
        'https://gitee.com/chinesee/images/raw/master/magic-ui/img_001.png',
      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 15,
      type: 0,
    },
    {
      id: 'n4',
      title: '乐享校园二手交易市场',
      content:
        'https://gitee.com/chinesee/images/raw/master/magic-ui/img_001.png',
      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 366,
      type: 0,
    },
    {
      id: 'n5',
      title: '乐享校园二手交易市场',
      content:
        'https://gitee.com/chinesee/images/raw/master/magic-ui/img_001.png',
      time: new Date().getTime() - 1000 * 60 * 60 * 24 * 700,
      type: 0,
    },
  ],
  pagination: { current: 1, pageSize: 9, total: 50 },
})

Mock.mock('/notice/count', 'get', {
  code: 2000,
  data: {
    reply: 0,
    notice: 12,
    message: 4,
  },
})
