import type { NextPage } from 'next'
import { Container, Text, Button } from '@chakra-ui/react'
import styles from '../styles/home.module.css'

const Home: NextPage = () => {
  
  let homepage: any = () => {
    return window.open('https://kekwlabs.github.io')
  }

  return (
    <main>
      <section className={styles.top}>
        <Container maxW="container.lg">
          <Text as="b" className={styles.mono} fontSize="4xl" color="cyan.500">KekwLabs Blog</Text>
          <Text className={`${styles.mono} ${styles.desc}`} fontSize="1.1rem">Blog platform for kekwlabs' members to publish research blogs and writups based on computer science and security.</Text>
          <Button onClick={homepage} className={styles.btn} colorScheme="cyan">Join Us</Button>
        </Container>
      </section>
    </main>
  )
}

export default Home
