import { mutableHander, readonlyHandder } from './baseHanders'
import { track, trigger } from './effect'

export function reactive(raw){
    return new Proxy(raw, mutableHander)
}

export function readonly(raw){
    return new Proxy(raw, readonlyHandder)
}