import type { NextPage } from 'next'
import { Container, Text } from "@chakra-ui/react"
import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <main>
      <section className={styles.top}>
        <Container maxW="container.lg">
          <Text as="b" className={styles.mono} fontSize="4xl" color="cyan.500">KekwLabs Blog</Text>
          <Text className={`${styles.mono} ${styles.desc}`} fontSize="1.1rem">Blog platform for kekwlabs' members to publish research blogs and writups based on computer science and security.</Text>
        </Container>
      </section>
    </main>
  )
}

export default Home
