import type { NextPage } from 'next'
import { Container, Text, Button } from '@chakra-ui/react'
import styles from '../styles/home.module.css'
import { Blogs, Blog } from '../types/blog'

const Home: NextPage = () => {

  let homepage: any = () => {
    return window.open('https://kekwlabs.github.io')
  }

  let blogs =  Blogs.map((blog: Blog, i) => {
    return (
      <Container maxW="container.lg" className={styles.blog} key={i}>
        <Text as="u" fontSize="3xl">{blog.title}</Text>
        <Text fontSize="1xl">{blog.description}</Text>
        <br />
        <hr color="#00B5D8" />
      </Container>
    )
  })

  return (
    <main>
      <section className={`${styles.mono} ${styles.top}`}>
        <Container maxW="container.lg">
          <Text as="b" fontSize="4xl" color="cyan.500">KekwLabs Blog</Text>
          <Text className={styles.desc} fontSize="1.1rem">Blog platform for kekwlabs&apos; members to publish research blogs and writups based on computer science and security.</Text>
          <Button onClick={homepage} className={styles.btn} colorScheme="cyan">Join Us</Button>
        </Container>
        <div className={styles.blogs}>
            {blogs}
        </div>
      </section>
    </main>
  )
}

export default Home
