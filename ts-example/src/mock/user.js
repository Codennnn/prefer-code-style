import Mock from 'mockjs'

Mock.mock(/\/user\/info/, 'get', {
  code: 2000,
  data: {
    nickname: '令狐少侠',
    avatar:
      'https://portrait.gitee.com/uploads/avatars/user/1608/4826670_chinesee_1578975163.png!avatar200',
    email: 'czc12580520@gmail.com',
    permissions: ['admin'],
  },
})

Mock.mock(/\/user\/login/, 'post', {
  code: 2000,
  data: {
    token: 'token_123456',
  },
})
