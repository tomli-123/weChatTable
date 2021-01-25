Page({
  data: {
    // listData: [{
    //     "code": "01",
    //     "text": "text1",
    //     "type": "type1"
    //   },
    //   {
    //     "code": "02",
    //     "text": "text2",
    //     "type": "type2"
    //   },
    //   {
    //     "code": "03",
    //     "text": "text3",
    //     "type": "type3"
    //   },
    //   {
    //     "code": "04",
    //     "text": "text4",
    //     "type": "type4"
    //   },
    //   {
    //     "code": "05",
    //     "text": "text5",
    //     "type": "type5"
    //   },
    //   {
    //     "code": "06",
    //     "text": "text6",
    //     "type": "type6"
    //   }
    // ],
    currentTab: 0,
    items: [{
        "text": "项目1"
      },
      {
        "text": "项目2"
      },
      {
        "text": "项目3"
      },
      {
        "text": "项目4"
      },
      {
        "text": "项目5"
      },
      {
        "text": "项目6"
      },
      {
        "text": "项目7"
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad');
    const query = wx.createSelectorQuery();
  },
  inputValue(e) {
    console.log(e.detail.value)
  },
  swichNav: function (e) {
    let that = this;
    console.log('123');
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})