import { effectWatch } from "./index.js"

export function createApp(rootComponent){
    return {
        mount(rootContainer){
            const setupResult = rootComponent.setup()

            effectWatch(() => {
                rootContainer.textContent = ``
                const subTree = rootComponent.render(setupResult)
                console.log(subTree)
                // rootContainer.append(element)
            })
        }
    }
}