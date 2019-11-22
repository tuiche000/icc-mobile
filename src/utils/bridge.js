(function () {
  document.addEventListener('deviceready', function () {
    console.log('Device is Ready!');
    // ....your code
  }, false);

  /*判断客户端*/
  function judgeClient() {
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;   //判断是否是 android终端
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);     //判断是否是 iOS终端
    // console.log('是否是Android：' + isAndroid); //true,false
    // console.log('是否是iOS：' + isIOS);
    if (isAndroid) {
      return 'Android';
    } else if (isIOS) {
      return 'IOS';
    } else {
      return 'PC';
    }
  }

  let curClient = judgeClient()

  var id = 0,
    callbacks = {},
    registerFuncs = {};

  window.JSBridge = {
    // 调用 Native
    invoke: function (bridgeName = '', data = {}, callback = () => { }) {

      var thisId = id++; // 获取唯一 id
      callbacks[thisId] = callback; // 存储 Callback

      switch (curClient) {
        case 'IOS':
          // alert('IOS')
          window.webkit.messageHandlers.nativeBridge.postMessage({
            bridgeName: bridgeName,
            data: data || {},
            callbackId: thisId // 传到 Native 端
          });
          break;
        case 'Android':
          console.log(JSON.stringify({
            bridgeName: bridgeName,
            data: data || {},
            callbackId: thisId // 传到 Native 端
          }))
          return window.nativeBridge.postMessage(JSON.stringify({
            bridgeName: bridgeName,
            data: data || {},
            callbackId: thisId // 传到 Native 端
          }));
        // break;
        default:
          //pc
          break;
      }
    },
    // receiveMessage: function (str) {
    //   console.log(str)
    //   alert(str)
    // },

    receiveMessage: function (msg) {
      let msg3 = JSON.parse(msg)
      let { bridgeName, data, callbackId, responstId } = msg3
      // 具体逻辑
      // bridgeName 和 callbackId 不会同时存在
      if (typeof callbackId === 'number') {
        if (callbacks[callbackId]) { // 找到相应句柄
          callbacks[callbackId](data); // 执行调用
        }
      } else if (bridgeName) {
        if (registerFuncs[bridgeName]) { // 通过 bridgeName 找到句柄
          var ret = {},
            flag = false;
          registerFuncs[bridgeName].forEach(function (callback) {
            callback(data, function (r) {
              flag = true;
              ret = Object.assign(ret, r);
            });
          });
          if (flag) {
            window.nativeBridge.postMessage({ // 回调 Native
              responstId: responstId,
              ret: ret
            });
          }
        }
      }
    },
    register: function (bridgeName, callback) {
      if (!registerFuncs[bridgeName]) {
        registerFuncs[bridgeName] = [];
      }
      registerFuncs[bridgeName].push(callback); // 存储回调
    }
  };
})();
