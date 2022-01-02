import Head from "next/head";
import { getAllPosts } from "../../types/blog";
import styles from "../../styles/home.module.css"
import { Container, Text, Button, StylesProvider } from "@chakra-ui/react"

export default function BlogPage({data, content}) {
    console.log(content.content);
    return (
        <div>
            <Head>
                <title>{data.title}</title>
            </Head>
            <Text as="u" fontSize="3xl">{data.title}</Text>
            <Text fontSize="1xl">{data.description}</Text>
            <Text>{content}</Text>
        </div>
    )
}

export async function getStaticProps(context: any){
    const {params}= context;
    const allPosts=getAllPosts();
    const content=allPosts.find((item)=>item.slug ==params.slug);
    // console.log('heyo',context);
    return{
        props:
        {
            data:content.data,
            content:content.content
        }
    };
}

export async function getStaticPaths(){
    // Blogs.map((blog: Blog)
    return{
        paths: getAllPosts().map((post)=>({
            params:{
                slug:post.slug,
            },
        })),
        fallback: false,
    }
}
