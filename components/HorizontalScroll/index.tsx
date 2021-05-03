import * as React from "react"
import cn from "classnames"

import styles from "./index.module.scss"

interface IHorizontalScroll {
  className?: string
}

const HorizontalScroll: React.FC<IHorizontalScroll> = (props) => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const $container = containerRef.current!
    let scrollX = $container.scrollLeft
    let runningRaf = false

    const rafScrollX = () => {
      runningRaf = true
      $container.scrollLeft += (scrollX - $container.scrollLeft) * 0.1

      if (Math.abs($container.scrollLeft - scrollX) < 1) {
        runningRaf = false
        return
      }

      if (
        $container.scrollLeft >=
        $container.scrollWidth - $container.clientWidth
      ) {
        runningRaf = false
        // scrollX = $container.scrollWidth - $container.clientWidth
        return
      }
      window.requestAnimationFrame(rafScrollX)
    }

    const handleWheel = (event: WheelEvent) => {
      const delta = event.deltaY || event.deltaX

      if ($container.scrollLeft <= 0 && delta < 0) {
        return
      }

      if (
        $container.scrollLeft >=
          $container.scrollWidth - $container.clientWidth &&
          delta > 0
      ) {
        return
      }

      scrollX += delta

      if (!runningRaf) {
        rafScrollX()
      }

      event.preventDefault()
    }

    $container.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      $container.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return (
    <div className={cn(props.className, styles.container)} ref={containerRef}>
      {props.children}
    </div>
  )
}

export default HorizontalScroll