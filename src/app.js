import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout'
import Sider from './sider';
import Content from './content';
import Header from './header';
import Footer from './footer';
import Toast from "./toast";
import plugin from './plugin';
import Tabs from "./tabs";
import TabsHead from './tabs-head';
import TabsBody from './tabs-body';
import TabsItem from './tabs-item';
import TabsPane from './tabs-pane';
import Popover from './popover';
import Collapse from './collapse';
import CollapseItem from './collapse-item';


Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item',CollapseItem)



new Vue({
    el: '#app',
    data:{
       selectedTab: ['2','1']
    },
    created() {

    },
    methods: {
        showToast1(){
           this.showToast('top');
        },
        showToast2(){
            this.showToast('middle');
        },
        showToast3(){
            this.showToast('bottom');
        },
       showToast(position){
           this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的情商需要充值！ `,{
               position,
               enableHtml: false,
               closeButton:{
                   text: '已充值',
                   callback(){
                       console.log('他说已经充值情商了')
                   }
               },
               autoClose: 3,
           })
       }
    }
})

