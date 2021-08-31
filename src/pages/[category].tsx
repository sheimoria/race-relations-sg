import Footer from 'components/Footer'
import Head from 'next/head'
import Header from 'components/Header'
import { google } from 'googleapis'
import { useRouter } from 'next/router'

const Category = ({ data }: { data: string }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{router.query.category}</title>
      </Head>
      <Header />
      <main>
        <p>{data}</p>
      </main>
      <Footer />
    </>
  )
}

export default Category

export const getServerSideProps = async ({
  query
}: {
  query: { category: string }
}) => {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
  })
  const sheets = google.sheets({ version: 'v4', auth })

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: `${query.category}!A2:E`
  })

  const data = response.data.values

  return {
    props: {
      data
    }
  }
}
