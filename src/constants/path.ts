const path = {
  home: '/',
  user: '/user',
  profile: '/user/profile',
  changepassword: '/user/password',
  historypurchase: '/user/purchase',
  login: '/login',
  logout: '/logout',
  register: '/register',
  productDetail: ':nameId',
  cart: '/cart'
} as const

export default path
