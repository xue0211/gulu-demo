<template>
    <div>
        <div>
            <g-button @click="showToast2">中间弹出</g-button>
        </div>
        <p><strong>代码</strong></p>
        <pre><code>{{ content }}</code></pre>
    </div>
</template>
<script>
import Button from '../../../src/button';
import Toast from '../../../src/toast';
import plugin from '../../../src/plugin';
import Vue from 'vue';
Vue.use(plugin)
export default {
    components: {
        'g-button': Button,
        'g-toast': Toast
    },
    data() {
        return {
            content: `<style>
  .gulu-toast {
    z-index: 30;
   }
</style>
<div>
  <g-button @click="onClickButton">上方弹出</g-button>
</div>
  methods: {
    showToast2() {
            this.showToast('middle');
        },
    showToast(position) {
        this.$toast('你知道我在想你吗？', {
            position,
            enableHtml: false,
            closeButton: {
                text: '知道了',
                callback() {
                console.log('他说知道了')
                }
            },
        })
    }
}`
        }
    },
    methods: {
        showToast2() {
            this.showToast('middle');
        },
        showToast(position) {
            this.$toast(`你知道我在想你吗？ `, {
                position,
                enableHtml: false,
                closeButton: {
                    text: '知道了',
                    callback() {
                        console.log('他说知道了')
                    }
                },   
            })
        }
    }
}
</script>
<style>
.gulu-toast {
    z-index: 30;
}
</style>