import { reactive } from "./core/reactivity.js"

export default {
    // template -> render
    render(context){
        //ui
            const element = document.createElement('div')
            const text = document.createTextNode('nihao')
            const text1 = document.createTextNode(context.obj.count)
            element.append(text)
            element.append(text1)
            return element
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