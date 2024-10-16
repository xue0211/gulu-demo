import Toast from "./toast";


let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions){
            if(currentToast) {
                currentToast.close()
            }
           currentToast = createToast({
               message,
               Vue,
               propsData:toastOptions,
               onClose: () => {
                   currentToast = null
               }
           })
        }
    }
}















 /*helpers*/
function createToast({Vue, propsData, message, onClose}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}