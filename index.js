const ctxmenuHandler = (el, div, e) => {
    e.preventDefault()
    // 1. 判断div是否在el的内部
    if (e.target !== el) {
        div.style.display = 'none'
    } else {
        // 2. 计算点击点的位置
        div.style.left = e.clientX + 'px'
        div.style.top = e.clientY + 'px'
        div.style.display = 'block'
    }
}

const clickHandler = (div, v, e) => {
    e.preventDefault()
    e.stopPropagation()
    v.handler && v.handler(v.name)
    div.style.display = 'none'
}
export default {
    created (el, binding, vnode, prevVnode) {},
    beforeMount () {},
    mounted (el, binding) {
        const ul = document.createElement('ul')
        ul.className = 'ctxmenu-ul-container'
        const div = document.createElement('div')
        binding.value.forEach(v => {
            const li = document.createElement('li')
            li.className = 'ctxmenu-li-item'
            li.innerHTML = v.name
            ul.appendChild(li)
            li.addEventListener('click', clickHandler.bind(clickHandler, div, v))
        })
        div.className = 'ctxmenu-container'
        div.style.display = 'none'
        div.appendChild(ul)
        el.appendChild(div)
        window.addEventListener('contextmenu', ctxmenuHandler.bind(ctxmenuHandler, el, div))
    },
    beforeUpdate () {},
    updated () {},
    beforeUnmount () {
        // 卸载监听事件
        window.removeEventListener('contextmenu', ctxmenuHandler)
        window.removeEventListener('click', clickHandler)
    },
    unmounted () {}
}
