
## 项目中使用了哪些插件

以下的插件都是帮助开发的彩蛋

| 插件名称                 | 插件说明                                          | 使用环境                                                  |
| ------------------------ | ------------------------------------------------- | --------------------------------------------------------- |
| auto-https               | 当前域名如果不是https的话自动切换到https          | `client_test` `mobile_test` `client_prod` `mobile_prod`   |
| auto-pano-class          | 在开发环境中注入                                  | `client_local` `mobile_local`                             |
| dev-relative-time        | 改变开发环境的相对时间                            | `client_local` `mobile_local` `client_test` `mobile_test` |
| inject-cookies           | 在开发环境中注入自动登录的彩蛋                    | `client_local` ` mobile_local`                            |
| inject-courseware        | 注入调试课件的彩蛋                                | `client_local` `mobile_local` `client_test` `mobile_test` |
| inject-flaotlayer-plugin | 注入一些特定的调试彩蛋和vconsole,以悬浮窗口的形式 | `client_test` `mobile_test`                               |
| inject-send-log          | 向代码中注入三方sdk的发送dubug信息的方法          | `client_test` `mobile_test`                               |



## 装载UMI插件

在每个项目的.umirc.js的plugins字段中使用

```javascript title=.umirc.js
import path from "path";
import { defineConfig } from "umi";

// ref: https://umijs.org/config/
export default defineConfig({
  // ...其余配置都省略
  plugins: [
    path.resolve(__dirname, "./plugins/auto-https.js"),
    path.resolve(__dirname, "./plugins/auto-pano-class.js"),
    path.resolve(__dirname, "./plugins/inject-cookies.js"),
    path.resolve(__dirname, "./plugins/inject-send-log.js"),
    path.resolve(__dirname, "./plugins/dev-relative-time.js"),
    path.resolve(__dirname, "./plugins/inject-courseware.js"),
    path.resolve(__dirname, "./plugins/inject-flaotlayer-plugin.js")
  ],
})

```



## 如开发UMI插件

UMI插件示例 [https://www.wenjiangs.com/doc/umijs-plugin-umi-ui/](https://www.wenjiangs.com/doc/umijs-plugin-umi-ui/)

```javascript
// 普通的 umi 插件写法，新增 api.onUISocket 和 api.addUIPlugin 接口
export default api => {
  // 处理 socket 通讯数据
  api.onUISocket(({ action, send, log }) => {
    // 通过 action 处理
    // 处理完后 send 数据到客户端
    send({ type, payload });
    // 过程中的日志通过 log 打到客户端
    log(`Adding block Foo/Bar...`);
  });
  // 添加编辑态的插件
  api.addUIPlugin(require.resolve('./dist/client.umd'));
};
```



## UMI插件SDK

[https://umijs.org/zh-CN/docs](https://umijs.org/zh-CN/docs);