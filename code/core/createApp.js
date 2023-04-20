import { effectWatch, mountElement, diff } from "./index.js"

export function createApp(rootComponent){
    return {
        mount(rootContainer){
            const setupResult = rootComponent.setup()
            let prevSubTree
            let isMounted = false

            effectWatch(() => {
                if(!isMounted){
                    isMounted = true
                    const subTree = rootComponent.render(setupResult)
                    prevSubTree = subTree
                    mountElement(subTree,rootContainer)
                } else {
                    const subTree = rootComponent.render(setupResult)

                    //diff
                    diff(prevSubTree,subTree)
                    prevSubTree = subTree
                }
                
                // rootContainer.textContent = ``
                // const subTree = rootComponent.render(setupResult)
                // console.log("old",prevSubTree)
                // console.log("new",subTree)
                // prevSubTree = subTree
                // // rootContainer.append(element)
                // mountElement(subTree,rootContainer)
            })
        }
    }
}