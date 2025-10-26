
export default {
  api: {
    key: import.meta.env.VITE_API_KEY,
    baseUrl: import.meta.env.VITE_BASE_URL,
    timeout: 10000, // 非敏感配置可以直接写在这里
  },
  thirdParty: {
    // mapKey: import.meta.env.VITE_MAP_KEY // 其他第三方 API Key
  }
}