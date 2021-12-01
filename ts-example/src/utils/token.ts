import Cookies from 'js-cookie'

type CookiesSetFn = Parameters<typeof Cookies.set>
type Token = Extract<CookiesSetFn[1], string>
type Expires = NonNullable<CookiesSetFn[2]>['expires']

export function setToken(token: Token, expires?: Expires) {
  Cookies.set('token', token, { expires })
}

export function getToken() {
  return Cookies.get('token')
}

export function removeToken() {
  Cookies.remove('token')
}
