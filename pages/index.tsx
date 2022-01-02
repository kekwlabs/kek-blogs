import type { NextPage } from "next"
import { Container, Text, Button } from "@chakra-ui/react"
import styles from "../styles/home.module.css"
import { Blogs, Blog } from "../types/blog"
import Head from "next/head"
import Link from "next/link"
import { getAllPosts } from "../types/blog"

export async function getStaticProps(context: any){
  const allPosts=getAllPosts();

  return{
      props:{
        posts: allPosts.map(({data, content})=>({
          ...data,
          data:data,
          content:content,
        }))
      }
  };
}

const Home: NextPage = ({posts}) => {
  let homepage: any = () => {
    return window.open("https://kekwlabs.github.io");
  };

  let blogs = posts.map((blog) => {
    return (
      <Container maxW="container.lg" className={styles.blog} key={blog.slug}>
        <Text as="u" fontSize="3xl">
        <Link href={`/blog/${blog.slug}`}>
          {blog.title}
        </Link>
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
        <title>kekBlogs</title>
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
            <Text className={styles.desc} fontSize="1.4rem">
              Blog platform for kekwLabs&apos; members to publish research blogs
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
      </main>
    </>
  );
};


export default Home;
