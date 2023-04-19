// import { 
//     ref, 
//     effect 
// } from './node_modules/@vue/reactivity/dist/reactivity.esm-browser.js'

// let a = ref(10)
// let b = 0

// effect(() => {
//     //收集的依赖
//     b = a.value + 10
//     console.log(b)
// })

// //触发的依赖
// a.value = 20

// import { 
//     Dep, 
//     effectWatch,
//     reactive 
// } from './core/index.js'

// let a = new Dep(10)
// let b = 0

// effectWatch(() => {
//     //收集的依赖
//     b = a.value + 10
//     console.log(b)
// })

// //触发的依赖
// a.value = 20


//  reactive -> {}
// const user = reactive({
//     age: 10
// })

// let nextAge = 0

// effectWatch(() => {
//     nextAge = user.age + 1
//     console.log(nextAge)
// })

// user.age++

// const context = reactive({
//     count: 0
// })

// window.context = context

// effectWatch(() => {
    
// })



// App.render(App.setup())

import { createApp } from "./core/index.js";
import App from "./App.js";

createApp(App).mount(document.querySelector('#app'))
