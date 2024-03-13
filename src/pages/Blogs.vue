<script setup lang="ts">
// import { ref } from 'vue'
// import * as fs from 'fs'
import Blog from '@/components/Blog.vue'

const mdRaw = `
# TypeScript
\`\`\`ts
const str: string = "Hello TS";
console.log(str);
\`\`\`
`

const mdRaw1 = `
# Golang
\`\`\`go
package main

import "fmt"

func main() {
    var str string = "Hello Golang"
    fmt.Println(str)
}
\`\`\`
`

const mdRaw2 = `
# Rust
\`\`\`rust
fn main() {
    let str = "Hello Rust";
    print!("{}", str);
}
\`\`\`
`

const mdRaw3 = `
# 0if04
## rjeoajf
![xxx](https://baidu.com/favicon.ico)
`

// console.log(fs)
// const dirEntries = fs.readdirSync('@/markdown');
// for (const entry of dirEntries) {
//   const filePath = `@/markdown/${entry}`;
//   console.log(filePath)
// }

// const fileContent = ref()

// const loadFile = () => {
//   const reader = new FileReader()
//   reader.onload = (event) => {
//     fileContent.value = event.target.result
//   }
//   reader.readAsText(file)
// }
// loadFile()
</script>

<template>
  <div class="blogs">
    <h1>该页面装修中... 以下内容为测试内容</h1>
    <Blog :mdRaw="mdRaw" />
    <Blog :mdRaw="mdRaw1" />
    <Blog :mdRaw="mdRaw2" />
    <Blog :mdRaw="mdRaw3"/>
  </div>
</template>

<style lang="scss" scoped>
.blogs {
  h1 {
    margin-bottom: 20px;
  }
}
</style>
