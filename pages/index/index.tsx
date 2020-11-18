import Head from 'next/head'
import Button from '../../components/Button'

export default function Home(props) {
  const { locale } = props

  return (
    <div className={'container'}>
      <Head>
        <title>Phala Network</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={'main'}>Phala Network {locale}</main>

      <Button style={{ width: 370 }}>{'CHECK OUR GITHUB'}</Button>

      <footer className={'footer'}></footer>
    </div>
  )
}

export const getServerSideProps = ({ locale }) => {
  return {
    props: {
      locale,
    },
  }
}
