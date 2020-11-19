import PageIndex from '../components/PageIndex'

export default function Home(props) {
  return (
    <div>
      <PageIndex></PageIndex>
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
