<template>
    <div><g-tabs :selected="selected">
        <g-tabs-head>
          <g-tabs-item name="1">1</g-tabs-item>
          <g-tabs-item name="2">2</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="1">content 1</g-tabs-pane>
          <g-tabs-pane name="2">content 2</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>
  </template>
  <script>
  import Tabs from "../../../src/tabs";
  import TabsHead from '../../../src/tabs-head';
  import TabsBody from '../../../src/tabs-body';
  import TabsItem from '../../../src/tabs-item';
  import TabsPane from '../../../src/tabs-pane';
  
  export default {
    components: {
      'g-tabs': Tabs,
      'g-tabs-head': TabsHead,
      'g-tabs-body': TabsBody,
      'g-tabs-item': TabsItem,
      'g-tabs-pane': TabsPane,
    },
    data(){
      return {
        selected: '1',
        content: 
`data:{
  selected: '1'
  }
  
<g-tabs :selected="selected">
  <g-tabs-head>
    <g-tabs-item name="1">1</g-tabs-item>
    <g-tabs-item name="2">2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="2">content 2</g-tabs-pane>
    </g-tabs-body>
</g-tabs>`.trim(),
      }
    }
  }
  </script>