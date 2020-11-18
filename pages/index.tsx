import Head from 'next/head'
import Button from '../components/Button'
import Newsletter from '../components/Newsletter'

export default function Home(props) {
  const { locale } = props

  return (
    <div>
      <Head>
        <title>Phala Network</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Newsletter></Newsletter>

      <main className={'main'}>Phala Network {locale}</main>

      <Button hasArrowIcon style={{ width: 370 }}>
        {'CHECK OUR GITHUB'}
      </Button>
      <br />
      <Button hasArrowIcon>Link to xxxx</Button>
      <br />
      <Button color='primary' hasArrowIcon>
        Link to xxxx
      </Button>

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
