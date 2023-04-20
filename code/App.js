import { reactive, h } from "./core/index.js"

window.h = h
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
            //return h("div",context.obj.props, "")
            //3. test diff childrem
            //return h("div", {} , context.obj.children)
            return h("div", {}, context.obj.children)

    },

    setup(){
        const obj = reactive({
            count: 0,
            tag: "div",
            props: {
                a: "a"
            },
            children: [
                h("p",{},"1"),
                h("p",{},"2"),
            ]
        })

        window.obj = obj

        return {
            obj
        }
    }
}