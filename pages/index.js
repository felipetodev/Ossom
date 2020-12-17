import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { 
  CallToAction, 
  Blog, 
  Services,
  HowWeWork,
  Hero,
} from '../sections'

export default function Index({ allPosts }) {
  
  return (
    <>
      <Layout>
        <Head>
          <title>FOÚ</title>
        </Head>
        <Hero />
        <HowWeWork />
        <Services />
        <Blog posts={allPosts}/>  
        <CallToAction />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
