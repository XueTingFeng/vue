import { track, trigger } from "./effect"
import { reactiveFlags } from "./reactive"

const get = createGetter()
const set = createSetter()

const readonlyGet = createGetter(true)

function createGetter(isReadonly = false){
    return function get(target,key){
        // {foo: 1}
        const res = Reflect.get(target, key)

        if(key === reactiveFlags.IS_REACTIVE){
            return !isReadonly
        }else if(key === reactiveFlags.IS_READONLY){
            return isReadonly
        }

        // 依赖收集
        if(!isReadonly){
            track(target,key)
        }
        
        return res
    }
}

function createSetter(){
    return function set(target, key, value){
        const res = Reflect.set(target, key, value)

        // 触发依赖
        trigger(target, key)

        return res
    }
}

export const mutableHander = {
    get,
    set
}

export const readonlyHandder = {
    get: readonlyGet,
    set(target, key, value){
        console.warn(`key: ${key} set failed, because target is readonly`, target)
        return true
    }
}