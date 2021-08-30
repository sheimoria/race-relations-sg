import Footer from 'components/Footer'
import Head from 'next/head'
import Header from 'components/Header'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className="p-6">
        <p className="text-left">
          Hello there,
          <br />
          <br />
          This document is intended to serve as a resource bank for us to deepen
          our knowledge about race relations in Singapore. It was inspired by
          the compilation of{' '}
          <a className="link" href="bit.ly/ANTIRACISMRESOURCES">
            Anti-Racism Resources document
          </a>{' '}
          compiled by Sarah Sophie Flicker and Alyssa Klein.
          <br />
          <br />
          The resources have been separated into different categories namely,
          articles, books, social media accounts, videos, websites and others.
          Some resources may not be about race entirely but are still important
          in highlighting how race can intersect with other identities
          (nationality, religion, gender etc.) to perpetuate double and/or
          triple discrimination in Singapore.
          <br />
          <br />
          In the course of my research, I have also come across useful scholarly
          articles and books that have been compiled and shared beforehand by{' '}
          <a className="link" href="https://www.academia.sg/">
            Academia SG
          </a>{' '}
          and{' '}
          <a className="link" href="https://twitter.com/ikansumbat?lang=en">
            @ikansumbat
          </a>
          , and have included them in this list for ease of reference.
          <br />
          <br />
          Disclaimer: While I do work in this field, I am compiling this
          resource bank on my own accord. I have always been passionate about
          issues of inequality in Singapore and as a minority, issues
          surrounding race in Singapore are close to my heart. It is important
          for all of us to educate ourselves and to continue establishing (safe)
          spaces to have conversations about the realities of race relations in
          Singapore.
          <br />
          <br />
          Special thanks to the following people for their contribution: Corrie
          Tan for the arts-related resources, Yogesh,{' '}
          <a
            className="link"
            href="https://www.instagram.com/pagesofelly/?hl=en"
          >
            @pagesofelly
          </a>
          ,{' '}
          <a
            className="link"
            href="https://www.instagram.com/nonfirqtion/?hl=en"
          >
            @nonfirqtion
          </a>
          , Victoria, Carolyn Oei, and many others who have chosen to remain
          anonymous. &#128522;
          <br />
          <br />
          Please feel free to share this with your friends and family.
          <br />
          <br />
          If you have any suggestions to add to the list or any feedback, please
          fill in the form{' '}
          <a className="link" href="https://forms.gle/stgnm6FdhrZpMoi17">
            here
          </a>
          .
          <br />
          <br />
          Thank you!
          <br />
          <br />
          <a className="link" href="https://www.instagram.com/adila_s/?hl=en">
            Adila
          </a>
        </p>
      </main>
      <Footer />
    </>
  )
}

export default Home
