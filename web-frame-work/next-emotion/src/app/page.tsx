import styles from './page.module.css'
import { css } from '@emotion/react'

const style = css`
  color: #4f;
`
export default function Home() {
  return (
    <main css={style} className={styles.page}>
      Next.js
    </main>
  )
}
