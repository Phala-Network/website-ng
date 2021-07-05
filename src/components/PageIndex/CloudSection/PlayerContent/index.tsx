import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import { useIntl } from 'gatsby-plugin-intl'
import React, { useEffect, useRef, useState } from 'react'
import bgImage from './images/bg.jpg'
import * as styles from './index.module.scss'

gsap.registerPlugin(ScrollTrigger)

type Props = {}

const PlayerContent: React.FC<Props> = () => {
  const section = useRef<HTMLDivElement>(null)
  const [showPlayer, setShowPlayer] = useState(false)
  const { locale } = useIntl()
  const videoURL =
    locale === 'zh'
      ? 'https://player.bilibili.com/player.html?aid=461387150&bvid=BV1eL411p7Do&cid=364635988&page=1&high_quality=1'
      : 'https://www.youtube.com/embed/9AGWOqienOU'
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

      .to(leftHandClass, { x: 50, opacity: 1, y: 0, z: 0, scale: 1.5 }, 0)
      .to(leftHandClass, { x: 0, opacity: 0.6, y: 0, z: 0, scale: 1 }, 1)

      .to(rightHandClass, { x: -50, opacity: 1, y: 0, z: 0, scale: 1.5 }, 0)
      .to(rightHandClass, { x: 0, opacity: 0.6, y: 0, z: 0, scale: 1 }, 1)

    return () => {
      timeline.kill()
      timeline.clear(true)
    }
  }, [])

  const showVideoPlayer = () => {
    console.log('showVideoPlayer', showVideoPlayer)

    setShowPlayer(true)
  }

  return (
    <>
      <section ref={section} className={styles.comparisonSection}>
        <div className={styles.leftHand}></div>
        <div className={styles.rightHand}></div>
        <div className={styles.blocks}></div>
        <div className={styles.browser}></div>
        <div onClick={showVideoPlayer} className={styles.playerButton}></div>
      </section>
      <div onClick={showVideoPlayer} className={styles.mobile}>
        <img src={bgImage} alt="bg" />
      </div>

      {showPlayer && (
        <div className={styles.backdrop}>
          <iframe
            width={560 * 1.5}
            height={315 * 1.5}
            src={videoURL}
            title="What is Phala Network？"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}></iframe>
          <div
            className={styles.close}
            onClick={() => {
              setShowPlayer(false)
            }}></div>
        </div>
      )}
    </>
  )
}

export default PlayerContent
