export class Dep{
    constructor(val){
        this._val = val
        this.effects = new Set()
    }

    get value(){
        this.depend()
        return this._val
    }

    set value(newVal){
        this._val = newVal
        this.notice()
    }

    //依赖收集
    depend(){
        if(curEffect){
            this.effects.add(curEffect)
        } 
    }

    //触发依赖 
    notice(){
        this.effects.forEach((effect) => {
            effect()
        })
    }
}

let curEffect = null
export function effectWatch(fn){
    curEffect = fn
    fn()
    curEffect = null
}

const targetMap = new Map()
export function reactive(raw){
    return new Proxy(raw,{
        get(target,key){

            const dep = getDep(target,key)

            dep.depend()

            return Reflect.get(target,key)
        },

        set(target,key,val){
            const res = Reflect.set(target,key,val)
            const dep = getDep(target,key)
            dep.notice()
            return res
        }
    })
}

function getDep(target,key){
    let depsMap = targetMap.get(target,key)
    if(!depsMap){
        depsMap = new Map()
        targetMap.set(target,depsMap)
    }
    let dep = depsMap.get(key)
    if(!dep){
        dep = new Dep()
        depsMap.set(key,dep)
    }
    return dep
}