<template>
    <div>
      <g-collapse :selected.sync="selectedTab" single>
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
      </g-collapse>
      {{selectedTab}}
      <p><strong>代码</strong></p>
      <pre><code>{{content}}</code></pre>
    </div>
  </template>
  <script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'
  export default {
    components: {
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem
    },
    data(){
      return{
        content: `    <g-collapse :selected.sync="selectedTab" single>
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
      </g-collapse>
      {{selectedTab}}`,
        selectedTab: ['2','1']
      }
    }
  }
  </script>
  
  