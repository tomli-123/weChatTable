import WxValidate from '../../utils/WxValidate'
Page({
  data: {
    listData: [{
        "code": "01",
        "text": "text1",
        "type": "type1"
      },
      {
        "code": "02",
        "text": "text2",
        "type": "type2"
      },
      {
        "code": "03",
        "text": "text3",
        "type": "type3"
      },
      {
        "code": "04",
        "text": "text4",
        "type": "type4"
      },
      {
        "code": "05",
        "text": "text5",
        "type": "type5"
      },
      {
        "code": "06",
        "text": "text6",
        "type": "type6"
      }
    ],
    form: {
      value1: 1,
      value2: 2,
      value3: 3,
      value4: 4,
      value5: 5,
      value6: 6,
    },
  },
  onLoad: function () {
    console.log('onLoad');
    this.initValidate() //验证规则函数

  },
  inputValue(e) {
    console.log(e.detail.value)
  },
  // 校验
  //验证函数
  initValidate() {
    const rules = {
      value1: {
        required: true,
        minlength: 2
      },
      value2: {
        required: true,
        tel: true
      }
    }
    const messages = {
      value1: {
        required: '请填写姓名',
        minlength: '请输入正确的名称'
      },
      value2: {
        required: '请填写手机号',
        tel: '请填写正确的手机号'
      }
    }
    this.WxValidate = new WxValidate(rules, messages)
  },
  //调用验证函数
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带的数据为：', e.detail.value);
    const params = e.detail.value;
    //校验表单
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0];
      this.showModal(error);
      return false;
    };
    this.showModal({
      msg: '提交成功',
    })
  }
})