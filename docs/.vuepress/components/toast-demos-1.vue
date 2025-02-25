<template>
    <div>
      <g-button disabled @click="$toast('点击弹出提示')">上方弹出</g-button>
      <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
      <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
      <p><strong>代码</strong></p>
      <pre><code>{{content}}</code></pre>
    </div>
  </template>
  <script>
  import Button from '../../../src/button';
  import Toast from '../../../src/toast';
  import Plugin from '../../../src/plugin';
  import Vue from 'vue';
  Vue.use(Plugin)
  export default {
    components: {
      'g-button': Button
    },
    data(){
      return{
        content: `<g-button disabled @click="$toast('点击弹出提示')">上方弹出</g-button>
  <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
  <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>`.replace(/\t+| +/g, '').trim()
      }
    }
  }
  </script>
  <style>
  .gulu-toast {
    z-index: 30;
  }
  </style>
  
  