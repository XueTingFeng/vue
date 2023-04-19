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

            // return h("div", { id: 'foo', class: 'test' } , [
            //     h("p", {}, "nihao"),
            //     h("p", {}, String(context.obj.count))
            // ])

            //1. test diff tag
            //return h(context.obj.tag, {}, "1")
            //2. test diff props
            return h("div",context.obj.props, "")

    },

    setup(){
        const obj = reactive({
            count: 0,
            tag: "div",
            props: {
                a: "a"
            }
        })

        window.obj = obj

        return {
            obj
        }
    }
}