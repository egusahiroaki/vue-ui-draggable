const VueUIDraggable = {
  install (Vue, options) {
    let x
    let y
    let isMoving = false
    Vue.mixin({
      mounted (el) {
      }
    })
    Vue.directive('draggable', {
      bind: (el) => {
        el.style.cursor = 'move'
        el.style.position = 'absolute'
        el.style.zIndex = 1000

        el.addEventListener('mousedown', () => { mousedown(el) }, false)
      }
    })

    Vue.directive('droppable', {
      bind: (el) => {
        el.style.cursor = 'move'
        el.style.position = 'absolute'
        el.style.zIndex = 1000

        el.addEventListener('mousedown', () => { mousedown(el) }, false)
      }
    })

    const mousedown = (el) => {
      isMoving = true
      el.style.zIndex = 10000
      el.style.color = 'white'

      x = event.pageX - el.offsetLeft
      y = event.pageY - el.offsetTop

      el.addEventListener('mousemove', () => { mousemove(el) }, false)
      el.addEventListener('mouseover', () => { mouseover(el) }, false)
      el.addEventListener('mouseup', () => { mouseup(el) }, false)
      el.addEventListener('mouseleave', () => { mouseup(el) }, false)
    }
    const mouseover = (el) => {
      event.preventDefault()
    }

    const mousemove = (el) => {
      event.preventDefault()
      if (isMoving) {
        el.style.top = `${event.pageY - y}px`
        el.style.left = `${event.pageX - x}px`
      }
    }

    const mouseup = (el) => {
      el.style.zIndex = null
      el.style.color = null
      isMoving = false
    }
  }
}

export default VueUIDraggable
