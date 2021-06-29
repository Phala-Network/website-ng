import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'
import * as styles from './index.module.scss'

gsap.registerPlugin(ScrollTrigger)

type Props = {}

const PlayerContent: React.FC<Props> = () => {
  const section = useRef<HTMLBodyElement>(null)
  const leftHandClass = `.${styles.leftHand}`
  const rightHandClass = `.${styles.rightHand}`

  useEffect(() => {
    if (!section.current) return

    const sectionDom = section.current
    const leftHandDom = sectionDom.querySelector(leftHandClass)
    const rightHandDom = sectionDom.querySelector(rightHandClass)

    const enterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionDom,
        start: '30% 70%',
        end: '70% 30%',
        scrub: true,
        markers: true
      }
    })

    enterTimeline.to(leftHandDom, { x: 200, opacity: 1, scale: 1.3 }, 0)
    enterTimeline.to(leftHandDom, { x: 0, opacity: 0.6, scale: 1 }, 1)

    enterTimeline.to(rightHandDom, { x: -200, opacity: 1, scale: 1.3 }, 0)
    enterTimeline.to(rightHandDom, { x: 0, opacity: 0.6, scale: 1 }, 1)

    return () => {
      enterTimeline.kill()
      enterTimeline.clear(true)
    }
  }, [])

  return (
    <section ref={section} className={styles.comparisonSection}>
      <div className={styles.leftHand}></div>
      <div className={styles.rightHand}></div>
    </section>
  )
}

export default PlayerContent
