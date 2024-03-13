<script setup lang="ts">
import { withDefaults } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'

withDefaults(defineProps<{ mdRaw: string }>(), {
  mdRaw: `该博客没有内容`
})

let rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  breaks: true,
  extensions: {
    renderers: {
      ["code"]: function(code: any) {
        return `<pre class='code'><code class='language ${code.lang}'>${hljs.highlight(code.text, {language: code.lang}).value}</code></pre>`
      }
    },
    childTokens: {
      
    }
  }
})


</script>

<template>
  <div class="blog">
    <div class="code-block" v-html="marked(mdRaw)"></div>
  </div>
</template>

<style lang="scss" scoped>
.blog {
  background-color: var(--g-blog-bg-color);
  border-radius: 10px;
  padding: 10px 15px;
}
.blog + .blog {
  margin-top: 20px;
}
</style>
