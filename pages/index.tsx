import type { NextPage } from 'next'
import { Container, Text } from "@chakra-ui/react"
import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.top}>
      <Container maxW="container.lg">
        <Text fontSize="5xl"><code>KekwLabs Blog</code></Text>
        <br />
        <Text fontSize="1.1rem"><code>Blog platform for kekwlabs' members to publish research and development content like blogs and writups on computer science and security research</code></Text>
      </Container>
    </div>
  )
}

export default Home
