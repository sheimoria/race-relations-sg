import Footer from 'components/Footer'
import Head from 'next/head'
import Header from 'components/Header'
import { google } from 'googleapis'
import { useRouter } from 'next/router'

const Category = ({ data }: { data: string[][] }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{toTitleCase(router.query.category as string)}</title>
      </Head>
      <Header />
      <main>
        {data.map((entry, index) => (
          <article
            key={index}
            onClick={() => router.push(entry[2])}
            className="flex flex-col gap-4 p-6 border border-gray-200 rounded-md cursor-pointer dark:border-gray-800"
          >
            <a className="font-medium text-gray-700 transition-colors hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
              {entry[0]}
            </a>
            <p>{entry[1]}</p>
          </article>
        ))}
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
    range: `${query.category}!C2:E`
  })

  const data = response.data.values

  return {
    props: {
      data
    }
  }
}

const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
