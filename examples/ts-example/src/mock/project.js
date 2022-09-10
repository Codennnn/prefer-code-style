import Mock from 'mockjs'

Mock.mock(/\/project\/list/, 'get', {
  code: 2000,
  data: [
    {
      id: 'l1',
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/img_001.png',
      name: '乐享校园二手交易市场',
      date: '2020-9-1',
      progress: 0,
      team: [
        {
          id: '1',
          name: '观视频工作室',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_006.jpg',
        },
        {
          id: '2',
          name: '妖怪些',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_007.jpg',
        },
        {
          id: '3',
          name: '风花雪月风流客',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_008.jpg',
        },
      ],
    },
    {
      id: 'l2',
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/img_002.png',
      name: 'Magic Skote 后台系统模板',
      date: '2020-9-1',
      progress: 1,
      team: [
        {
          id: '1',
          name: '古娜拉喜羊羊',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_009.jpg',
        },
        {
          id: '2',
          name: '武汉nec',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_010.jpg',
        },
      ],
    },
    {
      id: 'l3',
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/img_003.png',
      name: 'Magic Frest 后台系统模板',
      date: '2020-9-1',
      progress: 2,
      team: [
        {
          id: '1',
          name: '大长腿才是我的菜',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_011.jpg',
        },
        {
          id: '2',
          name: '外师造化中得心源',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_012.jpg',
        },
        {
          id: '3',
          name: '外师造化中得心源',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_013.jpg',
        },
        {
          id: '4',
          name: '山枝quinn-akane',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_014.jpg',
        },
      ],
    },
    {
      id: 'l4',
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/img_004.png',
      name: 'Bilibili 视频网站',
      date: '2020-9-1',
      progress: 3,
      team: [
        {
          id: '1',
          name: '修炼中的程序员',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_006.jpg',
        },
        {
          id: '2',
          name: '最喜欢MisakaMikoto',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_007.jpg',
        },
        {
          id: '3',
          name: '豆豆的力气',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_008.jpg',
        },
        {
          id: '4',
          name: '无颜之-',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_009.jpg',
        },
        {
          id: '5',
          name: '路边捡妹妹',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_010.jpg',
        },
      ],
    },
    {
      id: 'l5',
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/img_005.png',
      name: 'Vue.js 官方教程',
      date: '2020-9-1',
      progress: 2,
      team: [
        {
          id: '1',
          name: '奈绪っ',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_011.jpg',
        },
        {
          id: '2',
          name: '在下不堇',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_012.jpg',
        },
      ],
    },
    {
      id: 'l6',
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/img_001.png',
      name: '码云图床',
      date: '2020-9-1',
      progress: 0,
      team: [
        {
          id: '1',
          name: '修炼中的程序员',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_006.jpg',
        },
        {
          id: '2',
          name: '最喜欢MisakaMikoto',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_007.jpg',
        },
        {
          id: '3',
          name: '豆豆的力气',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_008.jpg',
        },
        {
          id: '4',
          name: '无颜之-',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_009.jpg',
        },
        {
          id: '5',
          name: '路边捡妹妹',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_010.jpg',
        },
      ],
    },
    {
      id: 'l7',
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/img_002.png',
      name: 'Visual Studio Code',
      date: '2020-9-1',
      progress: 1,
      team: [
        {
          id: '1',
          name: '古娜拉喜羊羊',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_009.jpg',
        },
        {
          id: '2',
          name: '武汉nec',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_010.jpg',
        },
      ],
    },
    {
      id: 'l8',
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/img_003.png',
      name: 'Clash for Windows',
      date: '2020-9-1',
      progress: 2,
      team: [
        {
          id: '1',
          name: '奈绪っ',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_011.jpg',
        },
        {
          id: '2',
          name: '在下不堇',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_012.jpg',
        },
      ],
    },
    {
      id: 'l9',
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/img_004.png',
      name: '腾讯视频客户端',
      date: '2020-9-1',
      progress: 3,
      team: [
        {
          id: '1',
          name: '观视频工作室',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_006.jpg',
        },
        {
          id: '2',
          name: '妖怪些',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_007.jpg',
        },
        {
          id: '3',
          name: '风花雪月风流客',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_008.jpg',
        },
      ],
    },
    {
      id: 'l10',
      icon: 'https://gitee.com/chinesee/images/raw/master/magic-ui/img_005.png',
      name: 'React Admin',
      date: '2020-9-1',
      progress: 2,
      team: [
        {
          id: '1',
          name: '大长腿才是我的菜',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_011.jpg',
        },
        {
          id: '2',
          name: '外师造化中得心源',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_012.jpg',
        },
        {
          id: '3',
          name: '外师造化中得心源',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_013.jpg',
        },
        {
          id: '4',
          name: '山枝quinn-akane',
          avatar:
            'https://gitee.com/chinesee/images/raw/master/magic-ui/img_014.jpg',
        },
      ],
    },
  ],
  pagination: { current: 1, pageSize: 9, total: 50 },
})

Mock.mock('/project', 'post', {
  code: 2000,
})
