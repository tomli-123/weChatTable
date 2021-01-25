// import WxValidate from '../../utils/WxValidate';
Component({
  lifetimes: {
    attached: function () {
      try {
       // 需要在初始化的时候做的操作
       console.log('初始化');
       const temp = [52,53,54];
       const obj = { "list":[] };
       const that = this;
       temp.forEach(item => {
         obj.list.push({ id:item })
       });
       wx.request({
        url: 'https://sim-ita-frm.gtjaqh.net/do/2856.2', //仅为示例，并非真实的接口地址
        method:'post',
        data: obj,
        success(res) {
          console.log(res.data.data);
          that.setData({
            value: res.data.data
          });
        }
      });
      } catch (e) {
      }
      // console.log('lifetimes执行了qqq')
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  data: {
    value: [  ],
    form: {
      value1: 1,
      value2: 2
    }
  },
  // 校验


  methods:{
      //报错 
  // showModal(error) {
  //   wx.showToast({
  //     title: error.msg,
  //      icon:"none",
  //     duration: 500
  //   })
  // },
  //验证函数
    // initValidate() {
    //   const rules = {
    //     value1: {
    //       required: true
    //     },
    //     value2: {
    //       required: true
    //     }
    //   }
    //   const messages = {
    //     value1: {
    //       required: '必填项'
    //       // minlength: '小于两行'
    //     },
    //     value2: {
    //       required: '必填项'
    //       // minlength: '小于两行'
    //     }
    //   }
    //   this.WxValidate = new WxValidate(rules, messages);
    // },
     //调用验证函数
  // formSubmit: function (e) {
  //   this.setData();
  //   console.log('form发生了submit事件，携带的数据为：', e.detail.value);
  //   const params = e.detail.value;
  //   //校验表单
  //   if (!this.WxValidate.checkForm(params)) {
  //     const error = this.WxValidate.errorList[0];
  //     console.log(this.WxValidate.errorList)
  //     this.showModal(error);
  //     return false;
  //   }
  // }
  },
 
 
})
// Page({
//   data: {
//     listData: [{
//         "code": "01",
//         "text": "text1",
//         "type": "type1"
//       },
//       {
//         "code": "02",
//         "text": "text2",
//         "type": "type2"
//       },
//       {
//         "code": "03",
//         "text": "text3",
//         "type": "type3"
//       },
//       {
//         "code": "04",
//         "text": "text4",
//         "type": "type4"
//       },
//       {
//         "code": "05",
//         "text": "text5",
//         "type": "type5"
//       },
//       {
//         "code": "06",
//         "text": "text6",
//         "type": "type6"
//       }
//     ],
//     form: {
//       value1: 1,
//       value2: 2,
//       value3: 3,
//       value4: 4,
//       value5: 5,
//       value6: 6,
//     }
//   },
//   onLoad: function () {
//     console.log('onLoad');
//     // this.initValidate(); //验证规则函数
//   },
//   inputValue(e) {
//     // this.initValidate(); //验证规则函数
//   },
//   // 校验

//   //报错 
//   showModal(error) {
//     wx.showModal({
//       content: error.msg,
//       showCancel: false,
//     })
//   },
//   //验证函数
//   initValidate() {
//     const rules = {
//       value1: {
//         required: true,
//         minlength: 2
//       },
//       value2: {
//         required: true,
//         tel: true
//       }
//     }
//     const messages = {
//       value1: {
//         required: '请填写姓名',
//         minlength: '请输入正确的名称'
//       },
//       value2: {
//         required: '请填写手机号',
//         tel: '请填写正确的手机号'
//       }
//     }
//     this.WxValidate = new WxValidate(rules, messages);
//   },
//   //调用验证函数
//   formSubmit: function (e) {
//     console.log('form发生了submit事件，携带的数据为：', e.detail.value);
//     const params = e.detail.value;
//     //校验表单
//     if (!this.WxValidate.checkForm(params)) {
//       const error = this.WxValidate.errorList[0];
//       this.showModal(error);
//       return false;
//     }
//     this.showModal({
//       msg: '提交成功',
//     })
//   }
// })