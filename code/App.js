import { reactive, h } from "./core/index.js"

export default {
    // template -> render
    render(context){
        //ui
            // const element = document.createElement('div')
            // const text = document.createTextNode('nihao')
            // const text1 = document.createTextNode(context.obj.count)
            // element.append(text)
            // element.append(text1)
            // return element

            return h("div", {} , [
                h("p", {}, "nihao"),
                h("p", {}, context.obj.count)
            ])

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