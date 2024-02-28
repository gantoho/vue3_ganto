# Vite

> vue@3.2.39
>
> @vue/cli 5.0.6
>
> vue-router@4.1.5
>
> vite@3.1.3
>
> node@v14.18.1
>
> npm@6.14.15

> React@18.2.0

直接学习Vite@3最新版本

Vite是啥就不用多说了吧，直接开始学习吧。

# 搭建第一个 Vite 项目

使用 NPM:

```sh
npm create vite@latest
# 或者
npm init vite@latest
```

使用 Yarn:

```sh
yarn create vite
```

使用 PNPM:

```sh
pnpm create vite
```

安装过程

```sh
√ Project name: ... vite-project # 项目名称
√ Select a framework: » Vue # 框架
√ Select a variant: » JavaScript # 语言
```

正如官网所说，按照提示启动命令就行了。

```sh
cd vite-project
npm install
npm run dev
```

或

```sh
cd vite-project
yarn install
yarn dev
```



官网：https://cn.vitejs.dev/

# Vue + Vite项目速成

## vite.config.js

```js
/* vite.config.js */
import { fileURLToPath, URL } from 'node:url'
// import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  server: {
    open: true,
    host: '0.0.0.0'
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // '@': path.resolve(__dirname, './src')
    }
  }
})
```

open: true 启动项目时自动打开浏览器

host: '0.0.0.0' 启动项目时Network正常可以本地ip访问项目 不会出现：Network: use --host to expose（可以直接在package.json中这样配置`"dev": "vite --host"`）

`"dev": "vite --host --port 3002 --open"`这样配置是：本地IP访问项目、自定义端口号、项目启动自动浏览器打开



```sh
npm install --save -dev @types/node

pnpm install -D @types/node

# macos 
sudo npm install --save -dev @types/node
```



resolve: { alias: { @: 'fileURLToPath(new URL('./src', import.meta.url))' } } 路径别名

## 配置@

```sh
npm install --save -dev @types/node
```



vite.config.ts

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
```

或者

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      // "~@": __dirname,
      "@": resolve(__dirname, "./src")
    }
  }
})
```

或者

==推荐==

```ts
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  }
})
```



tsconfig.json

==推荐==

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"],
      "@": ["./"]
    },
    ...
  },
  ...
}

```

或者

tsconfig.json (不配置，也能用，暂不知道用途)

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
}
```





## src/router/index.js

先安装vue-router

```sh
npm install vue-router --save
```

```js
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/pages/Home/Home.vue'
import About from '@/pages/About/About.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

export default createRouter({
  routes: routes,
  history: createWebHashHistory()
})
```

这里是vue-router@4.1.5的最新语法，基本上和旧版本类似，只有一点差别。

## src/main.js

```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/index.js'

createApp(App).use(router).mount('#app')
```

因为Vite项目使用的是Vue3，有一些新的语法需要了解，脚手架也是较新的版本，多写写就好。

# Sass / Scss



如Vue、React中安装scss一样，执行以下指令。因为不是webpack，不需要装其他的loader

```sh
npm install sass --save-dev
#或者
npm i sass -D
#或者
yarn add sass -D
```



依次安装成功后，有可能会出现报错，请执行指令`yarn install` 或 `npm install`来解决。





# Less

安装less

```sh
npm install less
```



查看npm包的所有版本

```sh
npm view less versions
```





# Element-Plus

==**注意：Vite是Vue3，Vue3将不能使用element-ui，请安装新版本的element-plus**==

```sh
# NPM
npm install element-plus --save

# Yarn
yarn add element-plus

# pnpm
pnpm install element-plus
```

src/main.js

```js
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
```

安装ICON

```sh
# 选择一个你喜欢的包管理器

# NPM
$ npm install @element-plus/icons-vue
# Yarn
$ yarn add @element-plus/icons-vue
# pnpm
$ pnpm install @element-plus/icons-vue
```

使用ICON 全局引入

src/main.js

```js
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```



## 自动导入

https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5

首先你需要安装`unplugin-vue-components`和`unplugin-auto-import`这两款插件

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到你的`Vite`或`Webpack`的配置文件中

### Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

### Webpack

```js
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```



# 部署静态站点

## Vercel CLI

安装Vercel CLI脚手架

```sh
npm i -g vercel
```

使用vercel命令创建vite项目

```sh
vercel init vite
```

### [Vercel for Git](https://cn.vitejs.dev/guide/static-deploy.html#vercel-for-git)

1. 将你的代码推送到远程仓库（GitHub, GitLab, Bitbucket）
2. [导入你的 Vite 仓库](https://vercel.com/new) 到 Vercel
3. Vercel 会检测到你正在使用 Vite，并会为你的部署开启相应的正确配置。
4. 你的应用被部署好了！（示例：[vite-vue-template.vercel.app](https://vite-vue-template.vercel.app/)）

在你的项目被导入和部署后，所有对分支的后续推送都会生成 [预览部署](https://vercel.com/docs/concepts/deployments/environments#preview)，而所有对生产分支（通常是 ”main“）的更改都会生成一个 [生产构建](https://vercel.com/docs/concepts/deployments/environments#production)

查看 Vercel 的 [Git 集成](https://vercel.com/docs/concepts/git) 了解更多细节。



# Vite+React+TS

安装路由`react-router-dom`，在组件中引入时报错，提示需要执行一下`npm i --save-dev @types/react-router-dom`才可以正常。直接安装即可，请使用npm安装，yarn不支持该安装，请不要指定版本@5。



React+TS将采用.tsx后缀的文件，该文件是TS和JSX的结合，完全遵循JSX的语法规则，又融入了TS的语法。



# Proxy

配置Proxy代理

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8091',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})

```





# 不同运行环境加载不同的依赖

vite.base.config.js

```js
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  }
})
```

vite.prod.config.js

```js
import { defineConfig } from "vite";

export default defineConfig({
  
})
```

vite.dev.config.js

```js
import { defineConfig } from "vite";

export default defineConfig({
  
})
```

vite.config.js

```js
import { defineConfig } from "vite";
import viteBaseConfig from "./vite.base.config.js"
import viteDevConfig from "./vite.dev.config.js"
import viteProdConfig from "./vite.prod.config.js"

// 策略模式，不要写大量的if else
const envResolver = {
  "build": () => {
    console.log("生产环境");
    return {...viteBaseConfig, ...viteProdConfig};
  },
  "serve": () => {
    console.log("开发环境");
    return Object.assign({}, viteBaseConfig, viteDevConfig);
  }
}

export default defineConfig(({ command }) => { // command: "build"|"serve"
  return envResolver[command]();
})
```



# 开发接口和生产接口的配置

vite中使用的是dotenv这个第三方库进行实现的，这个库会自动读.env文件中的配置，并将对应的环境变量输入到process对象下（但是vite考虑到和其他配置的一些冲突问题，他不会直接注入到process对象下），process是node中的一个全局对象变量，这个变量process.env返回。

.env

```
BASE_URL = https://www.baidu.com/
```

vite.config.js

```js
import { defineConfig } from "vite";
import viteBaseConfig from "./vite.base.config.js"
import viteDevConfig from "./vite.dev.config.js"
import viteProdConfig from "./vite.prod.config.js"

// 策略模式，不要写大量的if else
const envResolver = {
  "build": () => {
    console.log("生产环境");
    return {...viteBaseConfig, ...viteProdConfig};
  },
  "serve": () => {
    console.log("开发环境");
    return Object.assign({}, viteBaseConfig, viteDevConfig);
  }
}

export default defineConfig(({ command, mode }) => { // command: "build"|"serve"
  const env = loadEnv(mode, process.cwd(), ""); // 第二个参数为.env的目录，cwd为启动程序当前目录，第三个参数为文件名默认不写为.env
  return envResolver[command]();
})
```



在执行yarn dev的时候，其实后面会有补全的参数，如`yarn dev --mode development`，这里的development就会找.env.development，这里可以自定义

执行yarn dev会找 .env.development

```
BASE_URL = https://www.baidu.com/
```

执行yarn build会找 .env.production

```
BASE_URL = https://192.168.0.1
```



request.js

```js
console.log(import.meta.env);
```

`import.meta.env`就是获取注入的`.env`中的配置项，但是`Vite`并不是将`.env`中的所有配置项都注入，只会注入`VITE_`开头的配置项，所以.env中的配置项需要加上`VITE_`

.env.development

```
VITE_BASE_URL = https://www.baidu.com/
```

.env.production

```
VITE_BASE_URL = https://192.168.0.1
```



request.js

```js
console.log(import.meta.env.VITE_BASE_URL);
```



如果不想要VITE_前缀，可以在vite.base.config.js中配置

```js
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  },
  envPrefix: "ENV_", // 配置vite注入客户端环境变量校验的env前缀
})
```



.env.development

```
ENV_BASE_URL = https://www.baidu.com/
```

.env.production

```
ENV_BASE_URL = https://192.168.0.1
```

.env.test

text需要在package.json中添加"test": "vite --mode test"

```
ENV_BASE_URL = https://192.168.1.1
```

request.js

```js
console.log(import.meta.env.ENV_BASE_URL);
```





# 配置css

vite.base.config.js

```js
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  },
  envPrefix: "ENV_", // 配置vite注入客户端环境变量校验的env前缀
  css: { // 对css的行为进行配置
    modules: { // 是对css模块化的默认行为进行覆盖
      
    }
  }
})
```





# Vite打包问题

## 打包空白页

```js
export default defineConfig({
  plugins: [react()],
  base: './',
})
```



==如果是 vite 构建的项目，在 package.json 中，添加 homepage 选项是错误的操作，必须在 vite.config.js 中添加以上配置。==



==Vite社区插件==

# vite-ssg

## 安装vite-ssg

在vite+vue项目中，安装`vite-ssg`

```shell
npm i -D vite-ssg
```



## 配置

package.json

```josn
{
  "scripts": {
    "dev": "vite",
-   "build": "vite build"
+   "build": "vite-ssg build"

    // OR if you want to use another vite config file
+   "build": "vite-ssg build -c another-vite.config.ts"
  }
}
```



main.ts

```ts
import { ViteSSG } from 'vite-ssg'
import type { RouteRecordRaw } from 'vue-router'
import App from './App.vue'
import "./style.css"

const routes: RouteRecordRaw[] = [
    {
        name: 'Index',
        path: '/',
        component: () => import('./components/HelloWorld.vue'),
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: () => import('./components/HelloWorld.vue'),
    },
    {
        name: 'NotFoundSSG',
        path: '/404',
        component: () => import('./components/HelloWorld.vue'),
    },
]

export const createApp = ViteSSG(
    App,
    { routes },
)

```



## Single Page SSG

main.ts

```ts
import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(App)
```





## 生产

打包，预览

```shell
yarn build

yarn preview
```



## @unhead/vue

这个库，可以定义每个路由页面的title、description

HelloWorld.vue

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

defineProps<{ msg: string }>()

const count = ref(0)

useHead({
  title: 'Website Title',
  meta: [
    {
      name: 'description',
      content: 'Website description',
    },
  ],
})
</script>

<template>
	<div>
        Hello World
    </div>
</template>
```











