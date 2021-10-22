import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import Main from './components/Main'
import Title from './components/Title'
import Section from './components/Section'
import Element from './components/Element'
import PageBanner from './components/PageBanner'

export default function Home() {
var elementss = [['https://nextjs.org/docs','Documentation','Find in-depth information about Next.js features and API.'],
['https://nextjs.org/docs','Docdfgdfgdfgumentation','Find in-depth information about Next.js features and API.'],
['https://nextjs.org/docs','Documentation','Find in-depth information about Next.js features and API.'],
['https://nextjs.org/docs','Documentation','Find in-depth information about Next.js features and API.']];

  return (
    <div className={styles.container}>
      <Head>
      <PageBanner/>
      </Head>
      <Main>
        <Title/>
        <Section>
          {elementss.map((element)=>(
            <Element arr={element} />
          ))}
        </Section>
      </Main>
    <Footer />
    </div>
  )
}
