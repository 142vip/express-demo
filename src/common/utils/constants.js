/**
 * 常量
 */
export const accessTokenSecret = 'fairy sister so cute';
export const md5Secret = '--express-demo--';
export const cookieSecret = 'express_demo_19980115_19970118_520';
// 致敬姐姐
export const randomStrLetterKey = 'FLOURISH';
// 接口最大超时时间  默认10s
export const MaxResponseTimeOut = 10000;
export const userAgentList = [
  'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.12) Gecko/20070731 Ubuntu/dapper-security Firefox/1.5.0.12',
  'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Acoo Browser; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.20 (KHTML, like Gecko) Chrome/19.0.1036.7 Safari/535.20',
  'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER',
  'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0) ,Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9',
  'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)',
  'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)',
  'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E)',
  'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:2.0b13pre) Gecko/20110307 Firefox/4.0b13pre',
  'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52',
  'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.12) Gecko/20070731 Ubuntu/dapper-security Firefox/1.5.0.13',
  'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; LBBROWSER)',
  'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6',
  'Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6',
  'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)',
  'Opera/9.25 (Windows NT 5.1; U; en), Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9',
  'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
];
export const bilibiliRefererURI = 'https://space.bilibili.com/';
// swagger 路由白名单
export const swaggerRouterIgnore = [
  '/swagger*', // swagger相关
  '/favicon*',
  '/public'
];

export const githubCommitList = [
  {
    committer: {
      name: '公众号：Rong姐姐好可爱',
      email: 'fairy_vip@2925.com'
    },
    message: 'feat(picture): update '
  },
  {
    committer: {
      name: '今天还不去学习？',
      email: 'fairy_cdn@2925.com'
    },
    message: 'feat(picture): update'
  },
  {
    committer: {
      name: '不开心也要努力学习！',
      email: 'fairy_github@2925.com'
    },
    message: 'feat: update picture (https://github.com/142vip)'
  },
  {
    committer: {
      name: '曲线、曲面积分多刷题',
      email: 'fairy_vip@2925.com'
    },
    message: 'refactor(picture): update (https://github.com/142vip)'
  }
];

/**
 * 全局统一错误处理；
 * code值说明
 * 200:操作成功
 * 110：没有权限，未登录
 * 93:参数错误
 * 3306:数据库操作错误
 * 500：服务器内部错误
 * 8848:登录服出现错误
 * 8813:B站请求链接出错
 * 保证所有的接口status状态返回为200
 */
export const responseMessage = {
  200: '操作成功',
  93: '请求参数错误，无法实现当前操作',
  110: '当前登录会话有效，用户没有无该操作权限',
  404: '当前请求不存在，',
  400: '未授权',
  401: '未登录获取权限',
  402: '客户端无秘钥',
  3306: '服务器内部错误，数据库操作失败，联系站长处理',
  8813: '外链失效，B站接口链接无法响应，联系站长处理',
  8848: '登录服接口异常，联系站长处理'
};

// 接口响应header设置
export const responseHeader = {
  'x-author-github': 'https://github.com/142vip',
  'x-author-wechat': 'FairyRong0115',
  'x-author-email': 'fairy_demo@2925.com'
};
export const loggerProjectName = 'express-demo';

export const loggerColor = {
  bold: ['\x1B[1m', '\x1B[22m'],
  italic: ['\x1B[3m', '\x1B[23m'],
  underline: ['\x1B[4m', '\x1B[24m'],
  inverse: ['\x1B[7m', '\x1B[27m'],
  strikethrough: ['\x1B[9m', '\x1B[29m'],
  white: ['\x1B[37m', '\x1B[39m'],
  grey: ['\x1B[90m', '\x1B[39m'],
  black: ['\x1B[30m', '\x1B[39m'],
  blue: ['\x1B[34m', '\x1B[39m'],
  cyan: ['\x1B[36m', '\x1B[39m'],
  green: ['\x1B[32m', '\x1B[39m'],
  magenta: ['\x1B[35m', '\x1B[39m'],
  red: ['\x1B[31m', '\x1B[39m'],
  yellow: ['\x1B[33m', '\x1B[39m'],
  whiteBG: ['\x1B[47m', '\x1B[49m'],
  greyBG: ['\x1B[49;5;8m', '\x1B[49m'],
  blackBG: ['\x1B[40m', '\x1B[49m'],
  blueBG: ['\x1B[44m', '\x1B[49m'],
  cyanBG: ['\x1B[46m', '\x1B[49m'],
  greenBG: ['\x1B[42m', '\x1B[49m'],
  magentaBG: ['\x1B[45m', '\x1B[49m'],
  redBG: ['\x1B[41m', '\x1B[49m'],
  yellowBG: ['\x1B[43m', '\x1B[49m']
};
