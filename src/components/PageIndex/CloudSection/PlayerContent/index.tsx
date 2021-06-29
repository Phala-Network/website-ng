import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'
import * as styles from './index.module.scss'

gsap.registerPlugin(ScrollTrigger)

type Props = {}

const PlayerContent: React.FC<Props> = () => {
  const section = useRef<HTMLDivElement>(null)
  const leftHandClass = `.${styles.leftHand}`
  const rightHandClass = `.${styles.rightHand}`
  const playerButtonClass = `.${styles.playerButton}`
  const browserClass = `.${styles.browser}`
  const blocksClass = `.${styles.blocks}`

  useEffect(() => {
    if (!section.current) return

    const sectionDom = section.current
    const leftHandDom = sectionDom.querySelector(leftHandClass)
    const rightHandDom = sectionDom.querySelector(rightHandClass)
    const playerButtonDom = sectionDom.querySelector(playerButtonClass)
    const browserDom = sectionDom.querySelector(browserClass)
    const blocksDom = sectionDom.querySelector(blocksClass)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionDom,
        start: '30% 70%',
        end: '70% 30%',
        scrub: true
      }
    })

    timeline.to(blocksDom, { opacity: 1 }, 0)
    timeline.to(blocksDom, { opacity: 0.5 }, 0.6)

    timeline.to(browserDom, { opacity: 0 }, 0)
    timeline.to(browserDom, { opacity: 1 }, 0.6)
    timeline.to(browserDom, { opacity: 0 }, 1)

    timeline.to(playerButtonDom, { opacity: 1, scale: 1.8 }, 0)
    timeline.to(playerButtonDom, { opacity: 0.5, scale: 1 }, 1)

    timeline.to(leftHandDom, { x: 100, opacity: 1, scale: 1.4 }, 0)
    timeline.to(leftHandDom, { x: 0, opacity: 0.6, scale: 1 }, 1)

    timeline.to(rightHandDom, { x: -100, opacity: 1, scale: 1.4 }, 0)
    timeline.to(rightHandDom, { x: 0, opacity: 0.6, scale: 1 }, 1)

    return () => {
      timeline.kill()
      timeline.clear(true)
    }
  }, [])

  return (
    <section ref={section} className={styles.comparisonSection}>
      <div className={styles.leftHand}></div>
      <div className={styles.rightHand}></div>
      <div className={styles.blocks}></div>
      <div className={styles.browser}></div>
      <div className={styles.playerButton}></div>
    </section>
  )
}

export default PlayerContent
