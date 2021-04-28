export default {
  pages: [
    'pages/index/index',
    'pages/discovery/discovery',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#626567",
    selectedColor: "#2A8CE5",
    backgroundColor: "#FBFBFB",
    borderStyle: "white",
    list: [
    {
      pagePath: "pages/index/index",
      text: "主页",
      iconPath: "./asset/images/index.png",
      selectedIconPath: "./asset/images/index_focus.png"
    },
    {
      pagePath: "pages/discovery/discovery",
      text: "发现",
      iconPath: "./asset/images/discovery.png",
      selectedIconPath: "./asset/images/discovery_focus.png"
    }
  ]
  }
}