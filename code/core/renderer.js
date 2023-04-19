function createElement(tag){
    return document.createElement(tag)
}

function patchProps(el, key, prevValue, nextValue){
    el.setAttribute(key, nextValue)
}

function insert(el, parent){
    parent.append(el)
}

function createTextNode(text){
    return document.createTextNode(text)
}

export function mountElement(vnode, container){
    const { tag, props, children } = vnode
    //tag
    const el = createElement(tag)
    //props
    for(const key in props){
        const val = props[key]
        patchProps(el, key, null, val)
    }
    //children
    if(typeof children === "string"){
        insert(createTextNode(children), el) 
    } else if(Array.isArray(children)){
        children.forEach( v => {
            mountElement(v,el)
        } )
    }
    //insert
    insert(el,container)
}