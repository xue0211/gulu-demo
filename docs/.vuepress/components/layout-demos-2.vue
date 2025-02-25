<template>
    <div>
      <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
        <g-header style="height: 50px; background:lightskyblue;">
          header
        </g-header>
        <g-layout>
          <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
            sider
          </g-sider>
          <g-content style="height: 100px; background:deepskyblue;">
            content
          </g-content>
        </g-layout>
        <g-footer style="height: 50px; background:lightskyblue;">
          footer
        </g-footer>
      </g-layout>
      <p><strong>代码</strong></p>
      <pre><code>{{content}}</code></pre>
    </div>
  </template>
  <script>
  import Sider from '../../../src/sider'
  import Footer from '../../../src/footer'
  import Layout from '../../../src/layout'
  import Content from '../../../src/content'
  export default {
    components: {
      'g-layout': Layout,
      'g-sider': Sider,
      'g-footer': Footer,
      'g-content': Content,
    },
    data(){
      return{
        content: `<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-layout>
      <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
        sider
      </g-sider>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
  </g-layout>`.trim()
      }
    }
  }
  </script>
  
  
  