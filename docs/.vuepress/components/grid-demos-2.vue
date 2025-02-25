<template>
    <div>
      <g-row class="demoRow" gutter="10">
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
      </g-row>
  
      <g-row class="demoRow" gutter="10">
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
      </g-row>
      <p><strong>代码</strong></p>
      <pre><code>{{content}}</code></pre>
    </div>
  </template>
  <script>
  import Row from '../../../src/row'
  import Col from '../../../src/col'
  
  export default {
    components: {
      'g-row': Row,
      'g-col': Col
    },
    data(){
      return{
        content:
  `* {
    box-sizing: border-box;
  }
  
  <g-row class="demoRow" gutter="10">
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
  </g-row>
  
  <g-row class="demoRow" gutter="10">
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
  </g-row>`.trim()
      }
    }
  }
  </script>
  <style>
  * {
    box-sizing: border-box;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
  </style>
  
  