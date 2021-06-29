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

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionDom,
        start: '30% bottom',
        end: '70% top',
        scrub: true
      }
    })

    timeline
      .to(blocksClass, { opacity: 1 }, 0)
      .to(blocksClass, { opacity: 0.5 }, 0.6)

      .to(browserClass, { opacity: 0 }, 0)
      .to(browserClass, { opacity: 1 }, 0.4)
      .to(browserClass, { opacity: 0 }, 1)

      .to(playerButtonClass, { opacity: 1, scale: 1.8 }, 0)
      .to(playerButtonClass, { opacity: 0.5, scale: 1 }, 1)

      .to(leftHandClass, { x: 100, opacity: 1, y: 0, z: 0, scale: 1.6 }, 0)
      .to(leftHandClass, { x: 0, opacity: 0.6, y: 0, z: 0, scale: 1 }, 1)

      .to(rightHandClass, { x: -100, opacity: 1, y: 0, z: 0, scale: 1.6 }, 0)
      .to(rightHandClass, { x: 0, opacity: 0.6, y: 0, z: 0, scale: 1 }, 1)

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

export default React.memo(PlayerContent)
