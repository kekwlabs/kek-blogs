import type { NextPage } from "next";
import { Container, Text, Button } from "@chakra-ui/react";
import styles from "../styles/home.module.css";
import { Blogs, Blog } from "../types/blog";
import Head from "next/head";

const Home: NextPage = () => {
  let homepage: any = () => {
    return window.open("https://kekwlabs.github.io");
  };

  let blogs = Blogs.map((blog: Blog, i) => {
    return (
      <Container maxW="container.lg" className={styles.blog} key={i}>
        <Text as="u" fontSize="3xl">
          {blog.title}
        </Text>
        <Text fontSize="1xl">{blog.description}</Text>
        <br />
        <hr color="#00B5D8" />
      </Container>
    );
  });

  return (
    <>
      <Head>
        <title>Kek blogs</title>
        <meta
          name="description"
          content="blogging platform for members of kekwlabs to publish content on computer science research and writups"
        />
        <meta name="image" property="og:image" content="/logo.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <main>
        <section className={`${styles.mono} ${styles.top}`}>
          <Container maxW="container.lg">
            <Text as="b" fontSize="4xl" color="cyan.500">
              KekwLabs Blog
            </Text>
            <Text className={styles.desc} fontSize="1.4rem">
              Blog platform for kekwlabs&apos; members to publish research blogs
              and writups based on computer science and security.
            </Text>
            <Button
              onClick={homepage}
              className={styles.btn}
              colorScheme="cyan"
            >
              Join Us
            </Button>
          </Container>
          <div className={styles.blogs}>{blogs}</div>
        </section>

        <Container padding="1.5rem" centerContent>
          <Text fontSize="1.12rem" color="cyan.500" as="b">
            <a href="https://github.com/orgs/kekwlabs/people">
              &copy; kekwLabs
            </a>
          </Text>
        </Container>
      </main>
    </>
  );
};

export default Home;
