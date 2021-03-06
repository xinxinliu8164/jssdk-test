!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).lx = t());
})(this, function () {
  "use strict";
  var e = function (e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  };
  function t(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  var r = function (r) {
    for (var n = 1; arguments.length > n; n++) {
      var o = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? t(Object(o), !0).forEach(function (t) {
            e(r, t, o[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : t(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  };
  var n = function (e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); t > r; r++) n[r] = e[r];
    return n;
  };
  var o = function (e) {
    if (Array.isArray(e)) return n(e);
  };
  var i = function (e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
      return Array.from(e);
  };
  var a = function (e, t) {
    if (e) {
      if ("string" == typeof e) return n(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === r && e.constructor && (r = e.constructor.name),
        "Map" === r || "Set" === r
          ? Array.from(e)
          : "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? n(e, t)
          : void 0
      );
    }
  };
  var c = function () {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  };
  var s = function (e) {
      return o(e) || i(e) || a(e) || c();
    },
    u =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function l(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var d = "object" == typeof u && u && u.Object === Object && u,
    p = "object" == typeof self && self && self.Object === Object && self,
    f = d || p || Function("return this")(),
    y = f.Symbol,
    v = Object.prototype,
    h = v.hasOwnProperty,
    m = v.toString,
    b = y ? y.toStringTag : void 0;
  var g = function (e) {
      var t = h.call(e, b),
        r = e[b];
      try {
        e[b] = void 0;
        var n = !0;
      } catch (e) {}
      var o = m.call(e);
      return n && (t ? (e[b] = r) : delete e[b]), o;
    },
    w = Object.prototype.toString;
  var _ = function (e) {
      return w.call(e);
    },
    j = y ? y.toStringTag : void 0;
  var x = function (e) {
    return null == e
      ? void 0 === e
        ? "[object Undefined]"
        : "[object Null]"
      : j && j in Object(e)
      ? g(e)
      : _(e);
  };
  var S = function (e, t) {
      return function (r) {
        return e(t(r));
      };
    },
    O = S(Object.getPrototypeOf, Object);
  var A = function (e) {
      return null != e && "object" == typeof e;
    },
    k = Function.prototype.toString,
    L = Object.prototype.hasOwnProperty,
    E = k.call(Object);
  var N = function (e) {
      if (!A(e) || "[object Object]" != x(e)) return !1;
      var t = O(e);
      if (null === t) return !0;
      var r = L.call(t, "constructor") && t.constructor;
      return "function" == typeof r && r instanceof r && k.call(r) == E;
    },
    I = "UNREADY",
    B = "READY",
    P = "CALLBACK",
    T = "PROMISE",
    C = {
      config: 1e4,
      device: 2e4,
      media: 3e4,
      ui: 4e4,
      biz: 5e4,
      pay: 6e4,
      utils: 9e4,
    },
    q = "Android",
    M = "iOS",
    z = "Mac",
    F = "Windows",
    D = "Unknown",
    J = navigator.userAgent.toLowerCase(),
    U = /android/gi.test(J),
    V = !!J.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i),
    G = /iphone/gi.test(J),
    R = /ipad/gi.test(J),
    W = /macintosh/gi.test(J),
    H = /windows/gi.test(J),
    $ = /(lanxin|es360messenger)/gi.test(J),
    K = {
      isAndroid: U,
      isiOS: V,
      isiPhone: G,
      isiPad: R,
      isMac: W,
      isWindows: H,
      isLanxinApp: $,
      isLanxinMobile: $ && (U || V),
      isLanxinPc: $ && (W || H),
    },
    Y = [
      {
        name: "biz.chooseContacts",
        payload: {
          title: { type: String, default: "????????????" },
          multiple: { type: Boolean, default: !0 },
          type: { type: Array, default: ["friend", "staff"] },
          canChooseExternal: Boolean,
          max: Number,
          maxTip: String,
          existentStaffs: Array,
          existentSectors: Array,
          requiredStaffs: Array,
          requiredSectors: Array,
          selectGroupMembers: Boolean,
        },
        type: "call",
        version: {
          ios: ">6.0.2",
          android: ">6.0.0",
          windows: ">6.0.0",
          mac: ">6.5.0",
        },
      },
      {
        name: "biz.chooseDepartments",
        payload: {
          title: { type: String, default: "????????????" },
          multiple: { type: Boolean, default: !0 },
          max: Number,
          maxTip: String,
          existentSectors: Array,
          requiredSectors: Array,
        },
        type: "call",
        version: { ios: void 0, android: void 0, windows: void 0, mac: void 0 },
      },
      {
        name: "biz.chooseContactsAndPhoneContacts",
        payload: {
          title: { type: String, default: "????????????" },
          multiple: { type: Boolean, default: !0 },
          max: Number,
          maxTip: String,
          existentContacts: Array,
          existentPhoneContacts: Array,
        },
        type: "call",
        version: {
          ios: ">6.3.0",
          android: ">6.3.0",
          windows: void 0,
          mac: ">6.6.0",
        },
      },
      {
        name: "biz.openContactsCard",
        payload: { staffId: { type: String, required: !0 } },
        type: "call",
        version: {
          ios: ">6.0.2",
          android: ">6.0.0",
          windows: ">6.0.0",
          mac: ">6.6.0",
        },
      },
      {
        name: "biz.openGroupChat",
        payload: { groupId: { type: String, required: !0 } },
        type: "call",
        version: {
          ios: ">6.3.0",
          android: ">6.3.0",
          windows: ">6.3.0",
          mac: ">6.6.0",
        },
      },
      {
        name: "biz.chooseChat",
        payload: {},
        type: "call",
        version: {
          ios: ">6.5.0",
          android: ">6.5.0",
          windows: ">6.5.0",
          mac: ">6.5.0",
        },
      },
      {
        name: "biz.getAuthCode",
        payload: { appId: { type: String, required: !0 } },
        type: "call",
        version: {
          ios: ">6.6.0",
          android: ">6.6.0",
          windows: ">6.6.110",
          mac: ">6.6.0",
        },
      },
      { name: "biz.getVisitorToken", payload: {}, type: "call" },
      {
        name: "biz.chooseCloudFile",
        payload: {
          multiple: { type: Boolean, default: !0 },
          max: { type: Number, default: 9 },
          maxTip: { type: String, default: "??????????????????????????????????????????" },
          existent: Array,
          types: Array,
        },
        type: "call",
        version: {
          ios: ">6.6.85",
          android: ">6.6.86",
          windows: void 0,
          mac: ">6.6.202",
        },
      },
      {
        name: "biz.chooseLocalFile",
        payload: {
          multiple: { type: Boolean, default: !0 },
          max: { type: Number, default: 9 },
          maxTip: { type: String, default: "??????????????????????????????????????????" },
          maxSize: Number,
          types: Array,
        },
        type: "call",
        version: {
          ios: void 0,
          android:">7.0.70", //????????? ????????????
          windows: ">7.0.70",
          mac: ">7.0.70",
        },
      },
      {
        name: "biz.getSectorMembers",
        payload: { sectors: { type: Array, required: !0 } },
        type: "call",
        version: {
          ios: ">7.0.67",
          android: ">7.0.67",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "biz.createGroupChat",
        payload: {
          name: String,
          requiredStaffs: Array,
          requiredSectors: Array,
        },
        type: "call",
        version: {
          ios: ">=7.7.15",
          android: ">=7.7.15",
          windows: void 0,
          mac: void 0,
        },
      },
    ],
    Q = [
      {
        name: "media.chooseImage",
        payload: {
          count: { type: Number, default: 9 },
          sourceType: { type: Array, default: ["album", "camera"] },
          sizeType: { type: Array, default: ["original", "compressed"] },
        },
        type: "call",
        version: {
          ios: ">6.0.2",
          android: ">6.0.0",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "media.previewImage",
        payload: {
          current: { type: [Number, String] },
          urls: { type: Array, required: !0 },
          actions: { type: Array },
        },
        type: "call",
        version: {
          ios: ">7.0.61",
          android: ">7.0.61",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "media.compressImage",
        payload: { filePaths: { type: Array, required: !0 }, ratio: Number },
        type: "call",
        version: {
          ios: ">=7.12.15",
          android: ">=7.12.15",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "media.getImageInfo",
        payload: { src: { type: String, required: !0 } },
        type: "call",
        version: {
          ios: ">=7.12.15",
          android: ">=7.12.15",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "media.chooseVideo",
        payload: {
          sourceType: { type: Array, default: ["album", "camera"] },
          compressed: { type: Boolean, default: !0 },
          maxDuration: { type: Number, default: 300 },
        },
        type: "call",
        version: {
          ios: ">6.0.2",
          android: ">6.0.0",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "media.previewVideo",
        payload: {
          url: { type: String, required: !0 },
          startTime: Number,
          orientation: String,
        },
        type: "call",
        version: {
          ios: ">7.0.61",
          android: ">7.0.61",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "media.startRecord",
        payload: void 0,
        type: "call",
        version: {
          ios: ">6.6.85",
          android: ">6.6.88",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "media.stopRecord",
        payload: void 0,
        type: "call",
        version: {
          ios: ">6.6.85",
          android: ">6.6.88",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "media.onRecordEnd",
        payload: void 0,
        type: "listen",
        version: {
          ios: ">6.6.85",
          android: ">6.6.88",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "media.playVoice",
        payload: { localId: { type: String, required: !0 } },
        type: "call",
        version: {
          ios: ">6.6.85",
          android: ">6.6.88",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "media.pauseVoice",
        payload: { localId: { type: String, required: !0 } },
        type: "call",
        version: {
          ios: ">6.6.85",
          android: ">6.6.88",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "media.stopVoice",
        payload: { localId: { type: String, required: !0 } },
        type: "call",
        version: {
          ios: ">6.6.85",
          android: ">6.6.88",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "media.onVoicePlay",
        payload: void 0,
        type: "listen",
        version: {
          ios: ">6.6.85",
          android: ">6.6.88",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "media.onVoicePlayEnd",
        payload: void 0,
        type: "listen",
        version: {
          ios: ">6.6.85",
          android: ">6.6.88",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "media.onAudioInterruptionBegin",
        payload: void 0,
        type: "listen",
        version: {
          ios: ">6.6.45",
          android: ">6.6.45",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "media.onAudioInterruptionEnd",
        payload: void 0,
        type: "listen",
        version: {
          ios: ">6.6.45",
          android: ">6.6.45",
          windows: void 0,
          mac: void 0,
        },
      },
    ],
    X = [
      {
        name: "ui.setNavigationBarTitle",
        payload: { title: String },
        type: "call",
        version: {
          ios: ">6.5.8",
          android: ">6.5.8",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "ui.setNavigationBarMenu",
        payload: { items: Array },
        type: "call",
        triggerName: "internal.ui.onNavigationBarMenuClick",
        version: {
          ios: ">6.5.8",
          android: ">6.5.8",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "ui.setNavigationBarBgColor",
        payload: { color: String },
        type: "call",
        version: {
          ios: ">7.6.30",
          android: ">7.6.30",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "ui.closeWindow",
        payload: {},
        type: "call",
        version: {
          ios: ">6.5.8",
          android: ">6.5.8",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "ui.openView",
        payload: {
          mode: { type: String, default: "webview" },
          navigationBarBackgroundColor: { type: String, default: "#4E74BB" },
          navigationBarFrontStyle: { type: String, default: "white" },
          url: { type: String, required: !0 },
          useSplitScreen: { type: Boolean, default: !1 },
        },
        type: "call",
        version: {
          ios: ">6.6.45",
          android: ">6.6.45",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "ui.resetView",
        payload: {},
        type: "call",
        version: {
          ios: ">7.0.61",
          android: ">7.0.61",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "ui.rotateView",
        payload: {
          showStatusBar: { type: Boolean, default: !0 },
          clockwise: { type: Boolean, default: !0 },
        },
        type: "call",
        version: {
          ios: ">7.0.61",
          android: ">7.0.61",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "ui.webViewBounce",
        payload: { enable: { type: Boolean, required: !0 } },
        type: "call",
        version: {
          ios: ">7.0.61",
          android: ">7.0.61",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "ui.setExtendedView",
        payload: { fullscreen: Boolean },
        type: "call",
        version: {
          ios: ">7.0.61",
          android: ">7.0.61",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "ui.onViewPause",
        payload: void 0,
        type: "listen",
        version: {
          ios: ">7.0.61",
          android: ">7.0.61",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "ui.onViewResume",
        payload: void 0,
        type: "listen",
        version: {
          ios: ">7.0.61",
          android: ">7.0.61",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "ui.onHistoryBack",
        payload: void 0,
        type: "listen",
        version: {
          ios: ">6.6.45",
          android: ">6.6.45",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "ui.getThemeInfo",
        payload: {},
        type: "call",
        version: {
          ios: ">7.0.70",
          android: ">7.0.70",
          windows: void 0,
          mac: void 0,
        },
      },
    ],
    Z = [
      {
        name: "pay.requestPayment",
        payload: {
          appId: { type: String, required: !0 },
          orderId: { type: String, required: !0 },
          token: { type: String, required: !0 },
          package: { type: String, required: !0 },
        },
        type: "call",
        version: {
          ios: ">6.5.8",
          android: ">6.5.8",
          windows: void 0,
          mac: void 0,
        },
      },
    ],
    ee = [
      {
        name: "utils.share",
        payload: { title: String, content: String, url: String, image: String },
        type: "call",
        version: {
          ios: ">6.5.0",
          android: ">6.5.0",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "utils.uploadFile",
        payload: {
          url: String,
          localId: String,
          name: String,
          headers: Object,
          formData: [Object, FormData],
        },
        type: "call",
        version: {
          ios: ">6.0.2",
          android: ">6.0.0",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "utils.uploadFileToS3",
        payload: {
          localId: String,
          endpoint: String,
          accessKey: String,
          secretKey: String,
          sessionToken: String,
          region: String,
          bucket: String,
          object: String,
        },
        type: "call",
        version: {
          ios: ">6.6.45",
          android: ">6.6.45",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "utils.uploadFileToS3InChunks",
        payload: {
          localId: String,
          endpoint: String,
          accessKey: String,
          secretKey: String,
          sessionToken: String,
          region: String,
          bucket: String,
          object: String,
          chunkSize: Number,
          maxChunkSize: Number,
          maxChunkNumber: Number,
        },
        type: "call",
        version: {
          ios: ">=7.12.15",
          android: ">=7.12.15",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "utils.downloadFile",
        payload: { url: { type: String, required: !0 } },
        type: "call",
        version: {
          ios: ">6.6.45",
          android: ">6.6.45",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "utils.previewFile",
        payload: {
          url: { type: String, required: !0 },
          name: String,
          size: Number,
          type: String,
        },
        type: "call",
        version: {
          ios: ">6.6.45",
          android: ">6.6.45",
          windows: void 0,
          mac: void 0,
        },
      },
      {
        name: "utils.saveFile",
        payload: {
          url: { type: String, required: !0 },
          target: { type: Array, default: ["local", "cloud"] },
        },
        type: "call",
        version: {
          ios: ">6.6.45",
          android: ">6.6.45",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "utils.signFile",
        payload: {
          platform: { type: String, required: !0 },
          url: { type: String, required: !0 },
          mode: { type: String, required: !0 },
          permissions: { type: Array, required: !0 },
        },
        type: "call",
        version: { ios: void 0, android: void 0, windows: void 0, mac: void 0 },
      },
      {
        name: "utils.onUploadProgress",
        payload: void 0,
        type: "listen",
        version: {
          ios: ">6.6.45",
          android: ">6.6.45",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
      {
        name: "utils.onDownloadProgress",
        payload: void 0,
        type: "listen",
        version: {
          ios: ">6.6.45",
          android: ">6.6.45",
          windows: ">6.6.110",
          mac: ">6.6.202",
        },
      },
    ],
    te = [
      { name: "internal.biz.getVisitorToken", payload: {}, type: "call" },
      { name: "internal.biz.getCECAuthMessage", payload: {}, type: "call" },
    ],
    re = [].concat(
      s([
        {
          name: "device.getNetworkType",
          payload: void 0,
          type: "call",
          version: {
            ios: ">6.0.2",
            android: ">6.0.0",
            windows: void 0,
            mac: void 0,
          },
        },
        {
          name: "device.getNetworkInterface",
          payload: void 0,
          type: "call",
          version: {
            ios: ">6.0.2",
            android: ">6.0.0",
            windows: void 0,
            mac: void 0,
          },
        },
        {
          name: "device.getLocation",
          payload: { coordinateType: { type: String, default: "wgs84" } },
          type: "call",
          version: {
            ios: ">6.0.2",
            android: ">6.0.0",
            windows: void 0,
            mac: void 0,
          },
        },
        {
          name: "device.getSystemInfo",
          payload: void 0,
          type: "call",
          version: {
            ios: ">=7.11.30",
            android: ">=7.11.30",
            windows: void 0,
            mac: void 0,
          },
        },
        {
          name: "device.chooseLocation",
          payload: { coordinateType: { type: String, default: "wgs84" } },
          type: "call",
          version: {
            ios: ">6.6.45",
            android: ">6.6.45",
            windows: void 0,
            mac: void 0,
          },
        },
        {
          name: "device.displayLocation",
          payload: {
            coordinateType: { type: String, default: "wgs84" },
            latitude: Number,
            longitude: Number,
            name: String,
            address: String,
          },
          type: "call",
          version: {
            ios: ">6.6.45",
            android: ">6.6.45",
            windows: void 0,
            mac: void 0,
          },
        },
        {
          name: "device.scanCode",
          payload: { type: { type: Array, default: ["qrCode", "barCode"] } },
          type: "call",
          version: {
            ios: ">6.6.15",
            android: ">6.6.15",
            windows: void 0,
            mac: void 0,
          },
        },
      ]),
      s(Q),
      s(Y),
      s(X),
      s(Z),
      s(ee),
      s(te)
    );
  var ne = function (e, t) {
    var r;
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (
        Array.isArray(e) ||
        (r = a(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        r && (e = r);
        var n = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return e.length > n ? { done: !1, value: e[n++] } : { done: !0 };
          },
          e: function (e) {
            throw e;
          },
          f: o,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var i,
      c = !0,
      s = !1;
    return {
      s: function () {
        r = e[Symbol.iterator]();
      },
      n: function () {
        var e = r.next();
        return (c = e.done), e;
      },
      e: function (e) {
        (s = !0), (i = e);
      },
      f: function () {
        try {
          c || null == r.return || r.return();
        } finally {
          if (s) throw i;
        }
      },
    };
  };
  var oe = [],
    ie = {
      proxy: function (e, t) {
        return new Promise(function (r, n) {
          (function (e) {
            if (!Array.isArray(e))
              throw new TypeError("Middleware stack must be an array!");
            var t,
              r = ne(e);
            try {
              for (r.s(); !(t = r.n()).done; ) {
                if ("function" != typeof t.value)
                  throw new TypeError(
                    "Middleware must be composed of functions!"
                  );
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
            return function (t, r) {
              var n = -1;
              return (function o(i) {
                if (n >= i)
                  return Promise.reject(Error("next() called multiple times"));
                n = i;
                var a = e[i];
                i === e.length && (a = r);
                if (!a) return Promise.resolve();
                try {
                  return Promise.resolve(
                    a(t, function () {
                      return o(i + 1);
                    })
                  );
                } catch (e) {
                  return Promise.reject(e);
                }
              })(0);
            };
          })(oe)({ apiMeta: e, req: t }).then(function (t) {
            if ("call" === e.type) {
              var o = t.res,
                i = o.status;
              o.callbackType === T && (i && 0 === i.code ? r(o.data) : n(i));
            }
          });
        });
      },
      use: function (e) {
        oe.push(e);
      },
    },
    ae = l(function (e) {
      var t = (function (e) {
        var t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          i = n.asyncIterator || "@@asyncIterator",
          a = n.toStringTag || "@@toStringTag";
        function c(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function s(e, t, r, n) {
          var o = Object.create(
              (t && t.prototype instanceof d ? t : d).prototype
            ),
            i = new x(n || []);
          return (
            (o._invoke = (function (e, t, r) {
              var n = "suspendedStart";
              return function (o, i) {
                if ("executing" === n)
                  throw Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw i;
                  return O();
                }
                for (r.method = o, r.arg = i; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = w(a, r);
                    if (c) {
                      if (c === l) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var s = u(e, t, r);
                  if ("normal" === s.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: r.done };
                  }
                  "throw" === s.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = s.arg));
                }
              };
            })(e, r, i)),
            o
          );
        }
        function u(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = s;
        var l = {};
        function d() {}
        function p() {}
        function f() {}
        var y = {};
        y[o] = function () {
          return this;
        };
        var v = Object.getPrototypeOf,
          h = v && v(v(S([])));
        h && h !== t && r.call(h, o) && (y = h);
        var m = (f.prototype = d.prototype = Object.create(y));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function g(e, t) {
          var n;
          this._invoke = function (o, i) {
            function a() {
              return new t(function (n, a) {
                !(function n(o, i, a, c) {
                  var s = u(e[o], e, i);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      d = l.value;
                    return d && "object" == typeof d && r.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            n("next", e, a, c);
                          },
                          function (e) {
                            n("throw", e, a, c);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (l.value = e), a(l);
                          },
                          function (e) {
                            return n("throw", e, a, c);
                          }
                        );
                  }
                  c(s.arg);
                })(o, i, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function w(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                w(e, t),
                "throw" === t.method)
              )
                return l;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var n = u(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              l);
        }
        function _(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function x(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(_, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                i = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = m.constructor = f),
          (f.constructor = p),
          (p.displayName = c(f, a, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), c(e, a, "GeneratorFunction")),
              (e.prototype = Object.create(m)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(g.prototype),
          (g.prototype[i] = function () {
            return this;
          }),
          (e.AsyncIterator = g),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new g(s(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          b(m),
          c(m, a, "Generator"),
          (m[o] = function () {
            return this;
          }),
          (m.toString = function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = S),
          (x.prototype = {
            constructor: x,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (this.prev >= i.tryLoc) {
                  var c = r.call(i, "catchLoc"),
                    s = r.call(i, "finallyLoc");
                  if (c && s) {
                    if (i.catchLoc > this.prev) return n(i.catchLoc, !0);
                    if (i.finallyLoc > this.prev) return n(i.finallyLoc);
                  } else if (c) {
                    if (i.catchLoc > this.prev) return n(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw Error("try statement without catch or finally");
                    if (i.finallyLoc > this.prev) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  this.prev >= o.tryLoc &&
                  r.call(o, "finallyLoc") &&
                  o.finallyLoc > this.prev
                ) {
                  var i = o;
                  break;
                }
              }
              !i ||
                ("break" !== e && "continue" !== e) ||
                i.tryLoc > t ||
                t > i.finallyLoc ||
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                l
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), j(r), l;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    j(r);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = t;
      } catch (e) {
        Function("r", "regeneratorRuntime = r")(t);
      }
    });
  function ce(e, t, r, n, o, i, a) {
    try {
      var c = e[i](a),
        s = c.value;
    } catch (e) {
      return void r(e);
    }
    c.done ? t(s) : Promise.resolve(s).then(n, o);
  }
  var se = function (e) {
    return function () {
      var t = this,
        r = arguments;
      return new Promise(function (n, o) {
        var i = e.apply(t, r);
        function a(e) {
          ce(i, n, o, a, c, "next", e);
        }
        function c(e) {
          ce(i, n, o, a, c, "throw", e);
        }
        a(void 0);
      });
    };
  };
  var ue = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  };
  function le(e, t) {
    for (var r = 0; t.length > r; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  var de = function (e, t, r) {
    return t && le(e.prototype, t), r && le(e, r), e;
  };
  var pe = function (e) {
    return void 0 === e;
  };
  var fe = {
    call: function (e) {
      var t = e.api,
        r = e.meta,
        n = e.payload;
      return new Promise(function (e) {
        window.LanxinJsBridge.callHandler(t, { meta: r, payload: n }, e);
      });
    },
    listen: function (e) {
      return window.LanxinJsBridge.registerHandler(e.api, e.callback);
    },
  };
  function ye() {
    if (!window.LanxinJsBridge) {
      var e;
      window.LanxinJsBridge = {
        registerHandler: a,
        callHandler: function (e, t, r) {
          2 === arguments.length &&
            "function" == typeof t &&
            ((r = t), (t = null));
          s({ handlerName: e, data: t }, r);
        },
        disableJavscriptAlertBoxSafetyTimeout: c,
        _fetchQueue: function () {
          var e = JSON.stringify(t);
          return (t = []), e;
        },
        _checkHandler: function (e) {
          e = JSON.parse(e);
          var t = e.handlerName;
          return JSON.stringify({
            callbackId: e.callbackId,
            handlerName: t,
            result: !!r[t],
          });
        },
        _reset: function () {
          (r = {}), a("_disableJavascriptAlertBoxSafetyTimeout", c);
        },
        _handleMessageFromObjC: function (e) {
          !(function (e) {
            i ? setTimeout(t) : t();
            function t() {
              var t,
                o = JSON.parse(e);
              if (o.responseId) {
                if (!(t = n[o.responseId])) return;
                t(o.responseData), delete n[o.responseId];
              } else {
                if (o.callbackId) {
                  var i = o.callbackId;
                  t = function (e) {
                    s({
                      handlerName: o.handlerName,
                      responseId: i,
                      responseData: e,
                    });
                  };
                }
                var a = r[o.handlerName];
                a
                  ? a(o.data, t)
                  : console.log(
                      "LanxinJsBridge: WARNING: no handler for message from ObjC:",
                      o
                    );
              }
            }
          })(e);
        },
      };
      var t = [],
        r = {},
        n = {},
        o = 1,
        i = !0;
      ((e = document.createElement("iframe")).style.display = "none"),
        (e.src = "".concat("lx", "://").concat("__wvjb_queue_message__")),
        document.documentElement.appendChild(e),
        a("_disableJavascriptAlertBoxSafetyTimeout", c);
    }
    function a(e, t) {
      r[e] = t;
    }
    function c() {
      i = !1;
    }
    function s(r, i) {
      if (i) {
        o++;
        var a = "cb_".concat(o, "_").concat(new Date().getTime());
        (n[a] = i), (r.callbackId = a);
      }
      t.push(r),
        (e.src = "".concat("lx", "://").concat("__wvjb_queue_message__"));
    }
  }
  var ve,
    he = {
      call: function (e) {
        var t = e.api,
          r = e.meta,
          n = e.payload;
        return new Promise(function (e) {
          window.LanxinJsBridge.callHandler(t, { meta: r, payload: n }, e);
        });
      },
      listen: function (e) {
        return window.LanxinJsBridge.registerHandler(e.api, e.callback);
      },
    },
    me = { init: ye, call: he.call, listen: he.listen },
    be = { init: ye, call: he.call, listen: he.listen },
    ge = { init: ye, call: he.call, listen: he.listen },
    we = M,
    _e = z,
    je = F,
    xe =
      (e((ve = {}), q, {
        init: function () {
          if (!window.LanxinJsBridge) {
            var e;
            window.LanxinJsBridge = {
              registerHandler: a,
              callHandler: function (e, t, r) {
                2 === arguments.length &&
                  "function" == typeof t &&
                  ((r = t), (t = null));
                s({ handlerName: e, data: t }, r);
              },
              disableJavscriptAlertBoxSafetyTimeout: c,
              _fetchQueue: function () {
                var r = JSON.stringify(t);
                (t = []),
                  e.contentWindow.location.replace(
                    "".concat("lx", "://return/_fetchQueue/").concat(r)
                  );
              },
              _checkHandler: function (t) {
                t = JSON.parse(t);
                var n = t.handlerName,
                  o = {
                    callbackId: t.callbackId,
                    handlerName: n,
                    result: !!r[n],
                  };
                e.contentWindow.location.replace(
                  ""
                    .concat("lx", "://return/_checkHandler/")
                    .concat(JSON.stringify(o))
                );
              },
              _reset: function () {
                (r = {}), a("_disableJavascriptAlertBoxSafetyTimeout", c);
              },
              _handleMessageFromNative: function (e) {
                !(function (e) {
                  i ? setTimeout(t) : t();
                  function t() {
                    var t,
                      o = JSON.parse(e);
                    if (o.responseId) {
                      if (!(t = n[o.responseId])) return;
                      t(o.responseData), delete n[o.responseId];
                    } else {
                      if (o.callbackId) {
                        var i = o.callbackId;
                        t = function (e) {
                          s({
                            handlerName: o.handlerName,
                            responseId: i,
                            responseData: e,
                          });
                        };
                      }
                      var a = r[o.handlerName];
                      a
                        ? a(o.data, t)
                        : console.log(
                            "LanxinJsBridge: WARNING: no handler for message from ObjC:",
                            o
                          );
                    }
                  }
                })(e);
              },
            };
            var t = [],
              r = {},
              n = {},
              o = 1,
              i = !0;
            ((e = document.createElement("iframe")).style.display = "none"),
              (e.src = ""),
              document.documentElement.appendChild(e),
              a("_disableJavascriptAlertBoxSafetyTimeout", c);
          }
          function a(e, t) {
            r[e] = t;
          }
          function c() {
            i = !1;
          }
          function s(r, i) {
            if (i) {
              o++;
              var a = "cb_".concat(o, "_").concat(new Date().getTime());
              (n[a] = i), (r.callbackId = a);
            }
            t.push(r),
              e.contentWindow.location.replace(
                "".concat("lx", "://").concat("__wvjb_queue_message__")
              );
          }
        },
        call: fe.call,
        listen: fe.listen,
      }),
      e(ve, we, me),
      e(ve, _e, be),
      e(ve, je, ge),
      ve),
    Se = (function () {
      function e() {
        ue(this, e);
      }
      var t;
      return (
        de(e, null, [
          {
            key: "create",
            value:
              ((t = se(
                ae.mark(function e() {
                  var t;
                  return ae.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = xe[V ? M : U ? q : W ? z : H ? F : D]),
                            K.isLanxinApp)
                          ) {
                            e.next = 4;
                            break;
                          }
                          throw Error("Application is not in Lanxin App.");
                        case 4:
                          if (!pe(t)) {
                            e.next = 6;
                            break;
                          }
                          throw Error("Can not find appropriate Bridge.");
                        case 6:
                          return (e.next = 8), t.init();
                        case 8:
                          return e.abrupt("return", t);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return t.apply(this, arguments);
              }),
          },
        ]),
        e
      );
    })(),
    Oe = null;
  function Ae(e) {
    Oe = e;
  }
  function ke(e, t) {
    return Le.apply(this, arguments);
  }
  function Le() {
    return (Le = se(
      ae.mark(function e(t, r) {
        return ae.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (null !== Oe) {
                  e.next = 4;
                  break;
                }
                return (e.next = 3), Se.create();
              case 3:
                Oe = e.sent;
              case 4:
                return (t.bridge = Oe), (e.next = 7), r();
              case 7:
                return e.abrupt("return", t);
              case 8:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  var Ee = function (e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t);
  };
  var Ne = function (e) {
    if (!Ee(e)) return !1;
    var t = x(e);
    return (
      "[object Function]" == t ||
      "[object GeneratorFunction]" == t ||
      "[object AsyncFunction]" == t ||
      "[object Proxy]" == t
    );
  };
  function Ie(e, t) {
    return Be.apply(this, arguments);
  }
  function Be() {
    return (Be = se(
      ae.mark(function e(t, n) {
        var o, i, a, c, s, u, l, d, p, f;
        return ae.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((i = t.req), "call" !== (o = t.apiMeta).type)) {
                  e.next = 16;
                  break;
                }
                return (
                  (c = (a = i || {}).success),
                  (s = a.fail),
                  (u = a.complete),
                  (t.req = {}),
                  (t.req.api = o.name),
                  (t.req.payload = r({}, i)),
                  (e.next = 8),
                  n()
                );
              case 8:
                (d = (l = t.res).status),
                  (p = l.data),
                  (f = T),
                  !pe(u) && Ne(u) && (u(p, d), (f = P)),
                  d && 0 === d.code
                    ? !pe(c) && Ne(c) && (c(p), (f = P))
                    : !pe(s) && Ne(s) && (s(d), (f = P)),
                  (t.res.callbackType = f),
                  (e.next = 18);
                break;
              case 16:
                return (e.next = 18), n();
              case 18:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function Pe(e, t) {
    return Te.apply(this, arguments);
  }
  function Te() {
    return (Te = se(
      ae.mark(function e(t, r) {
        var n, o, i;
        return ae.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (o = t.req),
                  (i = null),
                  "listen" === (n = t.apiMeta).type &&
                    ((i = o),
                    (t.req = {}),
                    (t.req.api = n.name),
                    (t.req.callback = i)),
                  (e.next = 5),
                  r()
                );
              case 5:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  var Ce = l(function (e) {
      function t(r) {
        return (
          (e.exports = t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          t(r)
        );
      }
      e.exports = t;
    }),
    qe = Object.prototype;
  var Me = function (e) {
      var t = e && e.constructor;
      return e === (("function" == typeof t && t.prototype) || qe);
    },
    ze = S(Object.keys, Object),
    Fe = Object.prototype.hasOwnProperty;
  var De,
    Je = function (e) {
      if (!Me(e)) return ze(e);
      var t = [];
      for (var r in Object(e)) Fe.call(e, r) && "constructor" != r && t.push(r);
      return t;
    },
    Ue = f["__core-js_shared__"],
    Ve = (De = /[^.]+$/.exec((Ue && Ue.keys && Ue.keys.IE_PROTO) || ""))
      ? "Symbol(src)_1." + De
      : "";
  var Ge = function (e) {
      return !!Ve && Ve in e;
    },
    Re = Function.prototype.toString;
  var We = function (e) {
      if (null != e) {
        try {
          return Re.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    },
    He = /^\[object .+?Constructor\]$/,
    $e = RegExp(
      "^" +
        Function.prototype.toString
          .call(Object.prototype.hasOwnProperty)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  var Ke = function (e) {
    return !(!Ee(e) || Ge(e)) && (Ne(e) ? $e : He).test(We(e));
  };
  var Ye = function (e, t) {
    return null == e ? void 0 : e[t];
  };
  var Qe = function (e, t) {
      var r = Ye(e, t);
      return Ke(r) ? r : void 0;
    },
    Xe = Qe(f, "DataView"),
    Ze = Qe(f, "Map"),
    et = Qe(f, "Promise"),
    tt = Qe(f, "Set"),
    rt = Qe(f, "WeakMap"),
    nt = We(Xe),
    ot = We(Ze),
    it = We(et),
    at = We(tt),
    ct = We(rt),
    st = x;
  ((Xe && "[object DataView]" != st(new Xe(new ArrayBuffer(1)))) ||
    (Ze && "[object Map]" != st(new Ze())) ||
    (et && "[object Promise]" != st(et.resolve())) ||
    (tt && "[object Set]" != st(new tt())) ||
    (rt && "[object WeakMap]" != st(new rt()))) &&
    (st = function (e) {
      var t = x(e),
        r = "[object Object]" == t ? e.constructor : void 0,
        n = r ? We(r) : "";
      if (n)
        switch (n) {
          case nt:
            return "[object DataView]";
          case ot:
            return "[object Map]";
          case it:
            return "[object Promise]";
          case at:
            return "[object Set]";
          case ct:
            return "[object WeakMap]";
        }
      return t;
    });
  var ut = st;
  var lt = function (e) {
      return A(e) && "[object Arguments]" == x(e);
    },
    dt = Object.prototype,
    pt = dt.hasOwnProperty,
    ft = dt.propertyIsEnumerable,
    yt = lt(
      (function () {
        return arguments;
      })()
    )
      ? lt
      : function (e) {
          return A(e) && pt.call(e, "callee") && !ft.call(e, "callee");
        },
    vt = Array.isArray;
  var ht = function (e) {
    return (
      "number" == typeof e && e > -1 && e % 1 == 0 && 9007199254740991 >= e
    );
  };
  var mt = function (e) {
    return null != e && ht(e.length) && !Ne(e);
  };
  var bt = function () {
      return !1;
    },
    gt = l(function (e, t) {
      var r = t && !t.nodeType && t,
        n = r && e && !e.nodeType && e,
        o = n && n.exports === r ? f.Buffer : void 0;
      e.exports = (o ? o.isBuffer : void 0) || bt;
    }),
    wt = {};
  (wt["[object Float32Array]"] = wt["[object Float64Array]"] = wt[
    "[object Int8Array]"
  ] = wt["[object Int16Array]"] = wt["[object Int32Array]"] = wt[
    "[object Uint8Array]"
  ] = wt["[object Uint8ClampedArray]"] = wt["[object Uint16Array]"] = wt[
    "[object Uint32Array]"
  ] = !0),
    (wt["[object Arguments]"] = wt["[object Array]"] = wt[
      "[object ArrayBuffer]"
    ] = wt["[object Boolean]"] = wt["[object DataView]"] = wt[
      "[object Date]"
    ] = wt["[object Error]"] = wt["[object Function]"] = wt[
      "[object Map]"
    ] = wt["[object Number]"] = wt["[object Object]"] = wt[
      "[object RegExp]"
    ] = wt["[object Set]"] = wt["[object String]"] = wt[
      "[object WeakMap]"
    ] = !1);
  var _t = function (e) {
    return A(e) && ht(e.length) && !!wt[x(e)];
  };
  var jt = function (e) {
      return function (t) {
        return e(t);
      };
    },
    xt = l(function (e, t) {
      var r = t && !t.nodeType && t,
        n = r && e && !e.nodeType && e,
        o = n && n.exports === r && d.process,
        i = (function () {
          try {
            var e = n && n.require && n.require("util").types;
            return e || (o && o.binding && o.binding("util"));
          } catch (e) {}
        })();
      e.exports = i;
    }),
    St = xt && xt.isTypedArray,
    Ot = St ? jt(St) : _t,
    At = Object.prototype.hasOwnProperty;
  var kt = function (e) {
    if (null == e) return !0;
    if (
      mt(e) &&
      (vt(e) ||
        "string" == typeof e ||
        "function" == typeof e.splice ||
        gt(e) ||
        Ot(e) ||
        yt(e))
    )
      return !e.length;
    var t = ut(e);
    if ("[object Map]" == t || "[object Set]" == t) return !e.size;
    if (Me(e)) return !Je(e).length;
    for (var r in e) if (At.call(e, r)) return !1;
    return !0;
  };
  function Lt(e) {
    var t = { type: [], required: !1, validator: void 0, default: void 0 };
    return (
      (vt(e) || Ne(e)) && (t.type = [].concat(e)),
      N(e) && (Object.assign(t, e), (t.type = [].concat(t.type))),
      t
    );
  }
  var Et = /^(String|Number|Boolean|Function|Symbol)$/;
  function Nt(e, t) {
    var r,
      n,
      o = !1,
      i = (n = (r = t) && ("" + r).match(/^\s*function (\w+)/)) ? n[1] : "";
    if (Et.test(i)) {
      var a = Ce(e);
      (o = a === i.toLowerCase()) || "object" !== a || (o = e instanceof t);
    } else o = "Object" === i ? N(e) : "Array" === i ? vt(e) : e instanceof t;
    return { valid: o, expectedType: i };
  }
  function It(e) {
    return Object.prototype.toString.call(e).slice(8, -1);
  }
  function Bt(e, t) {
    return Pt.apply(this, arguments);
  }
  function Pt() {
    return (Pt = se(
      ae.mark(function e(t, r) {
        var n, o, i, a, c, s, u, l, d, p, f;
        return ae.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((i = (n = t.req).payload), !(o = t.apiMeta.payload))) {
                  e.next = 25;
                  break;
                }
                e.t0 = ae.keys(o);
              case 5:
                if ((e.t1 = e.t0()).done) {
                  e.next = 25;
                  break;
                }
                if (
                  ((c = i[(a = e.t1.value)]),
                  (s = Lt(o[a])),
                  pe(c) && !pe(s.default) && (c = i[a] = s.default),
                  !kt(c) || !s.required)
                ) {
                  e.next = 13;
                  break;
                }
                throw Error('Missing required payload: "'.concat(a, '".'));
              case 13:
                if (pe(c)) {
                  e.next = 23;
                  break;
                }
                if (!Ne(s.validator) || s.validator(c)) {
                  e.next = 16;
                  break;
                }
                throw Error(
                  'Invalid payload: validator check failed for payload: "'.concat(
                    a,
                    '".'
                  )
                );
              case 16:
                if (s.type.length <= 0) {
                  e.next = 23;
                  break;
                }
                for (u = s.type, l = !1, d = [], p = 0; u.length > p && !l; p++)
                  (f = Nt(c, u[p])),
                    d.push(f.expectedType || ""),
                    (l = f.valid);
                if (l) {
                  e.next = 23;
                  break;
                }
                throw Error(
                  ""
                    .concat(
                      'Invalid payload: type check failed for payload "'.concat(
                        a,
                        '".'
                      ) +
                        " Expected ".concat(d.join(", ")) +
                        ", got ".concat(It(c), ". \n")
                    )
                    .concat(JSON.stringify(n, null, 2))
                );
              case 23:
                e.next = 5;
                break;
              case 25:
                return (e.next = 27), r();
              case 27:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  var Tt = function (e, t) {
    return e === t || (e != e && t != t);
  };
  var Ct = function (e, t) {
      for (var r = e.length; r--; ) if (Tt(e[r][0], t)) return r;
      return -1;
    },
    qt = Array.prototype.splice;
  var Mt = function (e) {
    var t = this.__data__,
      r = Ct(t, e);
    return (
      r >= 0 &&
      (r == t.length - 1 ? t.pop() : qt.call(t, r, 1), --this.size, !0)
    );
  };
  var zt = function (e) {
    var t = this.__data__,
      r = Ct(t, e);
    return 0 > r ? void 0 : t[r][1];
  };
  var Ft = function (e) {
    return Ct(this.__data__, e) > -1;
  };
  var Dt = function (e, t) {
    var r = this.__data__,
      n = Ct(r, e);
    return 0 > n ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  };
  function Jt(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (Jt.prototype.clear = function () {
    (this.__data__ = []), (this.size = 0);
  }),
    (Jt.prototype.delete = Mt),
    (Jt.prototype.get = zt),
    (Jt.prototype.has = Ft),
    (Jt.prototype.set = Dt);
  var Ut = Jt;
  var Vt = function () {
    (this.__data__ = new Ut()), (this.size = 0);
  };
  var Gt = function (e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  };
  var Rt = function (e) {
    return this.__data__.get(e);
  };
  var Wt = function (e) {
      return this.__data__.has(e);
    },
    Ht = Qe(Object, "create");
  var $t = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    },
    Kt = Object.prototype.hasOwnProperty;
  var Yt = function (e) {
      var t = this.__data__;
      if (Ht) {
        var r = t[e];
        return "__lodash_hash_undefined__" === r ? void 0 : r;
      }
      return Kt.call(t, e) ? t[e] : void 0;
    },
    Qt = Object.prototype.hasOwnProperty;
  var Xt = function (e) {
    var t = this.__data__;
    return Ht ? void 0 !== t[e] : Qt.call(t, e);
  };
  var Zt = function (e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = Ht && void 0 === t ? "__lodash_hash_undefined__" : t),
      this
    );
  };
  function er(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (er.prototype.clear = function () {
    (this.__data__ = Ht ? Ht(null) : {}), (this.size = 0);
  }),
    (er.prototype.delete = $t),
    (er.prototype.get = Yt),
    (er.prototype.has = Xt),
    (er.prototype.set = Zt);
  var tr = er;
  var rr = function (e) {
    var t = typeof e;
    return "string" == t || "number" == t || "symbol" == t || "boolean" == t
      ? "__proto__" !== e
      : null === e;
  };
  var nr = function (e, t) {
    var r = e.__data__;
    return rr(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
  };
  var or = function (e) {
    var t = nr(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  };
  var ir = function (e) {
    return nr(this, e).get(e);
  };
  var ar = function (e) {
    return nr(this, e).has(e);
  };
  var cr = function (e, t) {
    var r = nr(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  };
  function sr(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (sr.prototype.clear = function () {
    (this.size = 0),
      (this.__data__ = {
        hash: new tr(),
        map: new (Ze || Ut)(),
        string: new tr(),
      });
  }),
    (sr.prototype.delete = or),
    (sr.prototype.get = ir),
    (sr.prototype.has = ar),
    (sr.prototype.set = cr);
  var ur = sr;
  var lr = function (e, t) {
    var r = this.__data__;
    if (r instanceof Ut) {
      var n = r.__data__;
      if (!Ze || 199 > n.length)
        return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new ur(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  };
  function dr(e) {
    var t = (this.__data__ = new Ut(e));
    this.size = t.size;
  }
  (dr.prototype.clear = Vt),
    (dr.prototype.delete = Gt),
    (dr.prototype.get = Rt),
    (dr.prototype.has = Wt),
    (dr.prototype.set = lr);
  var pr = dr;
  var fr = function (e, t) {
      for (
        var r = -1, n = null == e ? 0 : e.length;
        ++r < n && !1 !== t(e[r], r, e);

      );
      return e;
    },
    yr = (function () {
      try {
        var e = Qe(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch (e) {}
    })();
  var vr = function (e, t, r) {
      "__proto__" == t && yr
        ? yr(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    },
    hr = Object.prototype.hasOwnProperty;
  var mr = function (e, t, r) {
    var n = e[t];
    (hr.call(e, t) && Tt(n, r) && (void 0 !== r || t in e)) || vr(e, t, r);
  };
  var br = function (e, t, r, n) {
    var o = !r;
    r || (r = {});
    for (var i = -1, a = t.length; ++i < a; ) {
      var c = t[i],
        s = n ? n(r[c], e[c], c, r, e) : void 0;
      void 0 === s && (s = e[c]), o ? vr(r, c, s) : mr(r, c, s);
    }
    return r;
  };
  var gr = function (e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    },
    wr = /^(?:0|[1-9]\d*)$/;
  var _r = function (e, t) {
      var r = typeof e;
      return (
        !!(t = null == t ? 9007199254740991 : t) &&
        ("number" == r || ("symbol" != r && wr.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        t > e
      );
    },
    jr = Object.prototype.hasOwnProperty;
  var xr = function (e, t) {
    var r = vt(e),
      n = !r && yt(e),
      o = !r && !n && gt(e),
      i = !r && !n && !o && Ot(e),
      a = r || n || o || i,
      c = a ? gr(e.length, String) : [],
      s = c.length;
    for (var u in e)
      (!t && !jr.call(e, u)) ||
        (a &&
          ("length" == u ||
            (o && ("offset" == u || "parent" == u)) ||
            (i && ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
            _r(u, s))) ||
        c.push(u);
    return c;
  };
  var Sr = function (e) {
    return mt(e) ? xr(e) : Je(e);
  };
  var Or = function (e, t) {
    return e && br(t, Sr(t), e);
  };
  var Ar = function (e) {
      var t = [];
      if (null != e) for (var r in Object(e)) t.push(r);
      return t;
    },
    kr = Object.prototype.hasOwnProperty;
  var Lr = function (e) {
    if (!Ee(e)) return Ar(e);
    var t = Me(e),
      r = [];
    for (var n in e) ("constructor" != n || (!t && kr.call(e, n))) && r.push(n);
    return r;
  };
  var Er = function (e) {
    return mt(e) ? xr(e, !0) : Lr(e);
  };
  var Nr = function (e, t) {
      return e && br(t, Er(t), e);
    },
    Ir = l(function (e, t) {
      var r = t && !t.nodeType && t,
        n = r && e && !e.nodeType && e,
        o = n && n.exports === r ? f.Buffer : void 0,
        i = o ? o.allocUnsafe : void 0;
      e.exports = function (e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = i ? i(r) : new e.constructor(r);
        return e.copy(n), n;
      };
    });
  var Br = function (e, t) {
    var r = -1,
      n = e.length;
    for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
    return t;
  };
  var Pr = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, o = 0, i = []; ++r < n; ) {
      var a = e[r];
      t(a, r, e) && (i[o++] = a);
    }
    return i;
  };
  var Tr = function () {
      return [];
    },
    Cr = Object.prototype.propertyIsEnumerable,
    qr = Object.getOwnPropertySymbols,
    Mr = qr
      ? function (e) {
          return null == e
            ? []
            : Pr(qr((e = Object(e))), function (t) {
                return Cr.call(e, t);
              });
        }
      : Tr;
  var zr = function (e, t) {
    return br(e, Mr(e), t);
  };
  var Fr = function (e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    },
    Dr = Object.getOwnPropertySymbols
      ? function (e) {
          for (var t = []; e; ) Fr(t, Mr(e)), (e = O(e));
          return t;
        }
      : Tr;
  var Jr = function (e, t) {
    return br(e, Dr(e), t);
  };
  var Ur = function (e, t, r) {
    var n = t(e);
    return vt(e) ? n : Fr(n, r(e));
  };
  var Vr = function (e) {
    return Ur(e, Sr, Mr);
  };
  var Gr = function (e) {
      return Ur(e, Er, Dr);
    },
    Rr = Object.prototype.hasOwnProperty;
  var Wr = function (e) {
      var t = e.length,
        r = new e.constructor(t);
      return (
        t &&
          "string" == typeof e[0] &&
          Rr.call(e, "index") &&
          ((r.index = e.index), (r.input = e.input)),
        r
      );
    },
    Hr = f.Uint8Array;
  var $r = function (e) {
    var t = new e.constructor(e.byteLength);
    return new Hr(t).set(new Hr(e)), t;
  };
  var Kr = function (e, t) {
      var r = t ? $r(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.byteLength);
    },
    Yr = /\w*$/;
  var Qr = function (e) {
      var t = new e.constructor(e.source, Yr.exec(e));
      return (t.lastIndex = e.lastIndex), t;
    },
    Xr = y ? y.prototype : void 0,
    Zr = Xr ? Xr.valueOf : void 0;
  var en = function (e) {
    return Zr ? Object(Zr.call(e)) : {};
  };
  var tn = function (e, t) {
    var r = t ? $r(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  };
  var rn = function (e, t, r) {
      var n = e.constructor;
      switch (t) {
        case "[object ArrayBuffer]":
          return $r(e);
        case "[object Boolean]":
        case "[object Date]":
          return new n(+e);
        case "[object DataView]":
          return Kr(e, r);
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
          return tn(e, r);
        case "[object Map]":
          return new n();
        case "[object Number]":
        case "[object String]":
          return new n(e);
        case "[object RegExp]":
          return Qr(e);
        case "[object Set]":
          return new n();
        case "[object Symbol]":
          return en(e);
      }
    },
    nn = Object.create,
    on = (function () {
      function e() {}
      return function (t) {
        if (!Ee(t)) return {};
        if (nn) return nn(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })();
  var an = function (e) {
    return "function" != typeof e.constructor || Me(e) ? {} : on(O(e));
  };
  var cn = function (e) {
      return A(e) && "[object Map]" == ut(e);
    },
    sn = xt && xt.isMap,
    un = sn ? jt(sn) : cn;
  var ln = function (e) {
      return A(e) && "[object Set]" == ut(e);
    },
    dn = xt && xt.isSet,
    pn = dn ? jt(dn) : ln,
    fn = {};
  (fn["[object Arguments]"] = fn["[object Array]"] = fn[
    "[object ArrayBuffer]"
  ] = fn["[object DataView]"] = fn["[object Boolean]"] = fn[
    "[object Date]"
  ] = fn["[object Float32Array]"] = fn["[object Float64Array]"] = fn[
    "[object Int8Array]"
  ] = fn["[object Int16Array]"] = fn["[object Int32Array]"] = fn[
    "[object Map]"
  ] = fn["[object Number]"] = fn["[object Object]"] = fn[
    "[object RegExp]"
  ] = fn["[object Set]"] = fn["[object String]"] = fn["[object Symbol]"] = fn[
    "[object Uint8Array]"
  ] = fn["[object Uint8ClampedArray]"] = fn["[object Uint16Array]"] = fn[
    "[object Uint32Array]"
  ] = !0),
    (fn["[object Error]"] = fn["[object Function]"] = fn[
      "[object WeakMap]"
    ] = !1);
  var yn = function e(t, r, n, o, i, a) {
    var c,
      s = 1 & r,
      u = 2 & r,
      l = 4 & r;
    if ((n && (c = i ? n(t, o, i, a) : n(t)), void 0 !== c)) return c;
    if (!Ee(t)) return t;
    var d = vt(t);
    if (d) {
      if (((c = Wr(t)), !s)) return Br(t, c);
    } else {
      var p = ut(t),
        f = "[object Function]" == p || "[object GeneratorFunction]" == p;
      if (gt(t)) return Ir(t, s);
      if ("[object Object]" == p || "[object Arguments]" == p || (f && !i)) {
        if (((c = u || f ? {} : an(t)), !s))
          return u ? Jr(t, Nr(c, t)) : zr(t, Or(c, t));
      } else {
        if (!fn[p]) return i ? t : {};
        c = rn(t, p, s);
      }
    }
    a || (a = new pr());
    var y = a.get(t);
    if (y) return y;
    a.set(t, c),
      pn(t)
        ? t.forEach(function (o) {
            c.add(e(o, r, n, o, t, a));
          })
        : un(t) &&
          t.forEach(function (o, i) {
            c.set(i, e(o, r, n, i, t, a));
          });
    var v = d ? void 0 : (l ? (u ? Gr : Vr) : u ? Er : Sr)(t);
    return (
      fr(v || t, function (o, i) {
        v && (o = t[(i = o)]), mr(c, i, e(o, r, n, i, t, a));
      }),
      c
    );
  };
  var vn = function (e) {
    return yn(e, 5);
  };
  function hn(e, t) {
    return mn.apply(this, arguments);
  }
  function mn() {
    return (mn = se(
      ae.mark(function e(t, r) {
        var n, o, i, a;
        return ae.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ("call" !== (n = t.apiMeta).type) {
                  e.next = 11;
                  break;
                }
                return (e.next = 4), r();
              case 4:
                (t.res = vn(t.res)),
                  (i = (o = t.res).status.code),
                  (a = n.name.split(".").shift()),
                  i > 0 && !pe(C[a]) && (o.status.code = i + C[a]),
                  (e.next = 13);
                break;
              case 11:
                return (e.next = 13), r();
              case 13:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function bn(e, t) {
    return gn.apply(this, arguments);
  }
  function gn() {
    return (gn = se(
      ae.mark(function e(t, r) {
        var n, o;
        return ae.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ("call" !== t.apiMeta.type) {
                  e.next = 5;
                  break;
                }
                return (n = t.bridge), (o = t.req), (e.next = 4), n.call(o);
              case 4:
                t.res = e.sent;
              case 5:
                return (e.next = 7), r();
              case 7:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function wn(e, t) {
    return _n.apply(this, arguments);
  }
  function _n() {
    return (_n = se(
      ae.mark(function e(t, r) {
        var n, o, i, a, c;
        return ae.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (o = t.bridge),
                  (i = t.req),
                  ("listen" === (n = t.apiMeta).type ||
                    Ne(i.payload.trigger)) &&
                    ((a = i.api),
                    (c = i.callback),
                    "listen" !== n.type &&
                      Ne(i.payload.trigger) &&
                      ((a = n.triggerName), (c = i.payload.trigger)),
                    o.listen({
                      api: a,
                      callback: (function () {
                        var e = se(
                          ae.mark(function e(t, r) {
                            var n, o, i;
                            return ae.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((n = t.payload),
                                      (i = void 0 === (o = t.meta) ? {} : o),
                                      (e.t0 = c),
                                      !e.t0)
                                    ) {
                                      e.next = 6;
                                      break;
                                    }
                                    return (e.next = 5), c(n);
                                  case 5:
                                    e.t0 = e.sent;
                                  case 6:
                                    r({
                                      status: { code: 0, message: "OK" },
                                      meta: i,
                                      data: { result: e.t0 },
                                    });
                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t, r) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    })),
                  (e.next = 4),
                  r()
                );
              case 4:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function jn() {}
  function xn() {
    xn.init.call(this);
  }
  function Sn(e) {
    return void 0 === e._maxListeners
      ? xn.defaultMaxListeners
      : e._maxListeners;
  }
  function On(e, t, r) {
    if (t) e.call(r);
    else for (var n = e.length, o = Pn(e, n), i = 0; n > i; ++i) o[i].call(r);
  }
  function An(e, t, r, n) {
    if (t) e.call(r, n);
    else
      for (var o = e.length, i = Pn(e, o), a = 0; o > a; ++a) i[a].call(r, n);
  }
  function kn(e, t, r, n, o) {
    if (t) e.call(r, n, o);
    else
      for (var i = e.length, a = Pn(e, i), c = 0; i > c; ++c)
        a[c].call(r, n, o);
  }
  function Ln(e, t, r, n, o, i) {
    if (t) e.call(r, n, o, i);
    else
      for (var a = e.length, c = Pn(e, a), s = 0; a > s; ++s)
        c[s].call(r, n, o, i);
  }
  function En(e, t, r, n) {
    if (t) e.apply(r, n);
    else
      for (var o = e.length, i = Pn(e, o), a = 0; o > a; ++a) i[a].apply(r, n);
  }
  function Nn(e, t, r, n) {
    var o, i, a, c;
    if ("function" != typeof r)
      throw new TypeError('"listener" argument must be a function');
    if (
      ((i = e._events)
        ? (i.newListener &&
            (e.emit("newListener", t, r.listener ? r.listener : r),
            (i = e._events)),
          (a = i[t]))
        : ((i = e._events = new jn()), (e._eventsCount = 0)),
      a)
    ) {
      if (
        ("function" == typeof a
          ? (a = i[t] = n ? [r, a] : [a, r])
          : n
          ? a.unshift(r)
          : a.push(r),
        !a.warned && (o = Sn(e)) && o > 0 && a.length > o)
      ) {
        a.warned = !0;
        var s = Error(
          "Possible EventEmitter memory leak detected. " +
            a.length +
            " " +
            t +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (s.name = "MaxListenersExceededWarning"),
          (s.emitter = e),
          (s.type = t),
          (s.count = a.length),
          (c = s),
          "function" == typeof console.warn ? console.warn(c) : console.log(c);
      }
    } else (a = i[t] = r), ++e._eventsCount;
    return e;
  }
  function In(e, t, r) {
    var n = !1;
    function o() {
      e.removeListener(t, o), n || ((n = !0), r.apply(e, arguments));
    }
    return (o.listener = r), o;
  }
  function Bn(e) {
    var t = this._events;
    if (t) {
      var r = t[e];
      if ("function" == typeof r) return 1;
      if (r) return r.length;
    }
    return 0;
  }
  function Pn(e, t) {
    for (var r = Array(t); t--; ) r[t] = e[t];
    return r;
  }
  (jn.prototype = Object.create(null)),
    (xn.EventEmitter = xn),
    (xn.usingDomains = !1),
    (xn.prototype.domain = void 0),
    (xn.prototype._events = void 0),
    (xn.prototype._maxListeners = void 0),
    (xn.defaultMaxListeners = 10),
    (xn.init = function () {
      (this.domain = null),
        xn.usingDomains && (void 0).active && (void 0).Domain,
        (this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = new jn()), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (xn.prototype.setMaxListeners = function (e) {
      if ("number" != typeof e || 0 > e || isNaN(e))
        throw new TypeError('"n" argument must be a positive number');
      return (this._maxListeners = e), this;
    }),
    (xn.prototype.getMaxListeners = function () {
      return Sn(this);
    }),
    (xn.prototype.emit = function (e) {
      var t,
        r,
        n,
        o,
        i,
        a,
        c,
        s = "error" === e;
      if ((a = this._events)) s = s && null == a.error;
      else if (!s) return !1;
      if (((c = this.domain), s)) {
        if (((t = arguments[1]), !c)) {
          if (t instanceof Error) throw t;
          var u = Error('Uncaught, unspecified "error" event. (' + t + ")");
          throw ((u.context = t), u);
        }
        return (
          t || (t = Error('Uncaught, unspecified "error" event')),
          (t.domainEmitter = this),
          (t.domain = c),
          (t.domainThrown = !1),
          c.emit("error", t),
          !1
        );
      }
      if (!(r = a[e])) return !1;
      var l = "function" == typeof r;
      switch ((n = arguments.length)) {
        case 1:
          On(r, l, this);
          break;
        case 2:
          An(r, l, this, arguments[1]);
          break;
        case 3:
          kn(r, l, this, arguments[1], arguments[2]);
          break;
        case 4:
          Ln(r, l, this, arguments[1], arguments[2], arguments[3]);
          break;
        default:
          for (o = Array(n - 1), i = 1; n > i; i++) o[i - 1] = arguments[i];
          En(r, l, this, o);
      }
      return !0;
    }),
    (xn.prototype.on = xn.prototype.addListener = function (e, t) {
      return Nn(this, e, t, !1);
    }),
    (xn.prototype.prependListener = function (e, t) {
      return Nn(this, e, t, !0);
    }),
    (xn.prototype.once = function (e, t) {
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      return this.on(e, In(this, e, t)), this;
    }),
    (xn.prototype.prependOnceListener = function (e, t) {
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      return this.prependListener(e, In(this, e, t)), this;
    }),
    (xn.prototype.removeListener = function (e, t) {
      var r, n, o, i, a;
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      if (!(n = this._events)) return this;
      if (!(r = n[e])) return this;
      if (r === t || (r.listener && r.listener === t))
        0 == --this._eventsCount
          ? (this._events = new jn())
          : (delete n[e],
            n.removeListener &&
              this.emit("removeListener", e, r.listener || t));
      else if ("function" != typeof r) {
        for (o = -1, i = r.length; i-- > 0; )
          if (r[i] === t || (r[i].listener && r[i].listener === t)) {
            (a = r[i].listener), (o = i);
            break;
          }
        if (0 > o) return this;
        if (1 === r.length) {
          if (((r[0] = void 0), 0 == --this._eventsCount))
            return (this._events = new jn()), this;
          delete n[e];
        } else
          !(function (e, t) {
            for (var r = t, n = r + 1, o = e.length; o > n; r += 1, n += 1)
              e[r] = e[n];
            e.pop();
          })(r, o);
        n.removeListener && this.emit("removeListener", e, a || t);
      }
      return this;
    }),
    (xn.prototype.removeAllListeners = function (e) {
      var t, r;
      if (!(r = this._events)) return this;
      if (!r.removeListener)
        return (
          0 === arguments.length
            ? ((this._events = new jn()), (this._eventsCount = 0))
            : r[e] &&
              (0 == --this._eventsCount
                ? (this._events = new jn())
                : delete r[e]),
          this
        );
      if (0 === arguments.length) {
        for (var n, o = Object.keys(r), i = 0; o.length > i; ++i)
          "removeListener" !== (n = o[i]) && this.removeAllListeners(n);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = new jn()),
          (this._eventsCount = 0),
          this
        );
      }
      if ("function" == typeof (t = r[e])) this.removeListener(e, t);
      else if (t)
        do {
          this.removeListener(e, t[t.length - 1]);
        } while (t[0]);
      return this;
    }),
    (xn.prototype.listeners = function (e) {
      var t,
        r = this._events;
      return r && (t = r[e])
        ? "function" == typeof t
          ? [t.listener || t]
          : (function (e) {
              for (var t = Array(e.length), r = 0; t.length > r; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(t)
        : [];
    }),
    (xn.listenerCount = function (e, t) {
      return "function" == typeof e.listenerCount
        ? e.listenerCount(t)
        : Bn.call(e, t);
    }),
    (xn.prototype.listenerCount = Bn),
    (xn.prototype.eventNames = function () {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    });
  var Tn = [
      {
        name: "config",
        payload: {
          debug: { type: Boolean, default: !1 },
          appId: { type: String, required: !0 },
          timestamp: Number,
          nonceStr: String,
          signature: String,
        },
        type: "call",
      },
    ],
    Cn = { DEBUG: "DEBUG" },
    qn = new ((function () {
      function e() {
        ue(this, e);
      }
      return (
        de(e, [
          {
            key: "set",
            value: function (e, t) {
              Cn[e] ? (this.key = t) : console.error("Env has no key: ", e);
            },
          },
          {
            key: "get",
            value: function (e) {
              return this[e];
            },
          },
        ]),
        e
      );
    })())(),
    Mn = I,
    zn = new xn();
  var Fn = {
    config: function (e) {
      Mn === B && ((zn = new xn()), (Mn = I)),
        window.LanxinJsBridge &&
          window.LanxinJsBridge._reset &&
          window.LanxinJsBridge._reset();
      var t = null;
      return (
        Tn.forEach(function (e) {
          "config" === e.name && (t = e);
        }),
        qn.set("DEBUG", t.debug),
        (e.success = function () {
          (Mn = B),
            console.info("[Lanxin] JsApi Config Success..."),
            zn.listeners("ready").length > 0 && zn.emit("ready");
        }),
        (e.fail = function (e) {
          (Mn = I),
            console.error("[Lanxin] JsApi Config Error..."),
            zn.listeners("error").length > 0 && zn.emit("error", e);
        }),
        ie.proxy(t, e)
      );
    },
    ready: function (e) {
      Mn === B ? e() : zn.on("ready", e);
    },
    error: function (e) {
      zn.on("error", e);
    },
  };
  return (function () {
    if (N(window.lx)) throw Error("Can not init Js SDK twice.");
    ie.use(ke),
      ie.use(Pe),
      ie.use(Ie),
      ie.use(Bt),
      ie.use(hn),
      ie.use(wn),
      ie.use(bn);
    var e = (function (e) {
      var t = {};
      return (
        e.forEach(function (e) {
          e.name.split(".").reduce(function (t, r, n, o) {
            if (n === o.length - 1) {
              if (Ne(t[r]))
                throw Error('function "'.concat(r, '" alread existed.'));
              t[r] = ie.proxy.bind(null, e);
            } else N(t[r]) || (t[r] = {});
            return t[r];
          }, t);
        }),
        t
      );
    })(s(re));
    return r(
      r(r({ version: "0.1.24-beta.6" }, Fn), e),
      {},
      { mock: Ae, platform: K }
    );
  })();
});
