import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import { useLocale } from '../../../hooks/useLocale'
import Card from '../../Card'
import I18nRender from '../../I18nRender'
import React from 'react'
import * as styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const Distribution: React.FC<Props> = (props) => {
  const locale = useLocale()
  const content = {
    en: (
      <div className={styles.title}>
        70% of PHA is distributed to TEE miners
      </div>
    ),
    zh: <div className={styles.title}>70%的PHA分给了矿工</div>
  }

  return (
    <Card type='vertical' cardContentClassName={styles.cardContent} {...props}>
      <I18nRender {...content}></I18nRender>
      <div className={styles.pieImage}>
        <img src={`/images/PagePHA/pie-${locale}.svg`} alt='pie' />
      </div>
    </Card>
  )
}

export default Distribution
