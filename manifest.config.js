import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'
import { getEnv } from './src/utils'

// 获取项目名称
const projectName = getProjectName()

export default defineManifestConfig({
  'name': 'unisave-lite',
  'appid': '',
  'description': '',
  'versionName': '1.0.1',
  'versionCode': '101',
  'transformPx': false,
  'uniStatistics': {
    enable: false,
  },
  /* 5+App特有相关 */
  'app-plus': {
    usingComponents: true,
    nvueStyleCompiler: 'uni-app',
    compilerVersion: 3,
    splashscreen: {
      alwaysShowBeforeRender: true,
      waiting: true,
      autoclose: true,
      delay: 0,
    },
    /* 模块配置 */
    modules: {},
    /* 应用发布信息 */
    distribute: {
      /* android打包配置 */
      android: {
        permissions: [
          '<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>',
          '<uses-permission android:name="android.permission.VIBRATE"/>',
          '<uses-permission android:name="android.permission.READ_LOGS"/>',
          '<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>',
          '<uses-feature android:name="android.hardware.camera.autofocus"/>',
          '<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.CAMERA"/>',
          '<uses-permission android:name="android.permission.GET_ACCOUNTS"/>',
          '<uses-permission android:name="android.permission.READ_PHONE_STATE"/>',
          '<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>',
          '<uses-permission android:name="android.permission.WAKE_LOCK"/>',
          '<uses-permission android:name="android.permission.FLASHLIGHT"/>',
          '<uses-feature android:name="android.hardware.camera"/>',
          '<uses-permission android:name="android.permission.WRITE_SETTINGS"/>',
        ],
      },
      /* ios打包配置 */
      ios: {},
      /* SDK配置 */
      sdkConfigs: {},
      /* 图标配置 */
      icons: {
        android: {},
        ios: {},
      },
    },
  },
  /* 快应用特有相关 */
  'quickapp': {},
  /* 小程序特有相关 */
  'mp-weixin': {
    appid: '',
    setting: {
      urlCheck: false,
    },
    usingComponents: true,
    projectname: projectName,
  },
  'mp-alipay': {
    usingComponents: true,
  },
  'mp-baidu': {
    usingComponents: true,
  },
  'mp-toutiao': {
    usingComponents: true,
  },
  'vueVersion': '3',
  'h5': {
    router: {
      mode: 'history',
    },
  },
})

/**
 * 自动生成项目名称
 */
function getProjectName(name) {
  // 项目名称前缀，可根据业务需求自行修改环境与前缀
  const prefix = {
    development: 'dev',
    production: 'prod',
    test: 'dev',
    undefined: 'dev',
  }
  // 项目名称
  const projectname = name ?? 'unisave-lite'
  return `【${prefix[getEnv()]}】${projectname}`
}
