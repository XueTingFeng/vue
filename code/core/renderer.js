function createElement(tag){
    return document.createElement(tag)
}

function patchProps(el, key, prevValue, nextValue){
    if(nextValue === null){
        el.removeAttrIbute(key)
    } else {
        el.setAttribute(key, nextValue)
    }
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
    const el = (vnode.el = createElement(tag))
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

export function diff(n1,n2){
    const newProps = n2.props
    const oldProps = n1.props
    const el = n2.el = n1.el

    //tag
    if(n1.tag !== n2.tag){
        n1.el.replaceWith(createElement(n2.tag))
    } else {
        //props
        if(newProps){
            for(const key in newProps){
                if(newProps[key] !== oldProps[key]){
                    patchProps(el, key, oldProps[key], newProps[key])
                }
            }
        }

        if(oldProps){
            for(const key in oldProps){
                if(!(key in newProps)){
                    patchProps(el, key, oldProps[key], null)
                }
            }
        }
    }
}