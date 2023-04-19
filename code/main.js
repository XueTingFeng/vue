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

import { 
    Dep, 
    effectWatch,
    reactive 
} from './index.js'

let a = new Dep(10)
let b = 0

effectWatch(() => {
    //收集的依赖
    b = a.value + 10
    console.log(b)
})

//触发的依赖
a.value = 20


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

const context = reactive({
    count: 0
})

window.context = context

effectWatch(() => {
    
})

const App = {
    // template -> render
    render(context){
        //ui
        effectWatch(() => {
            document.querySelector('#app').textContent = ''
            const element = document.createElement('div')
            const text = document.createTextNode('nihao')
            const text1 = document.createTextNode(context.obj.count)
            element.append(text)
            element.append(text1)
            document.querySelector('#app').append(element)
        })
    },

    setup(){
        const obj = reactive({
            count: 0
        })

        window.obj = obj

        return {
            obj
        }
    }
}

App.render(App.setup())