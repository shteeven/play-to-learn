const PROXY_PROXY = 'http://localhost:3000';

const PROXY_CONFIG = [{
  context: ['/api'],
  target: PROXY_PROXY,
  secure: false,
  changeOrigin: true
}];

module.exports = PROXY_CONFIG;
