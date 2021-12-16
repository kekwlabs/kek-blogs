import Head from "next/head";
import { Blogs, Blog } from "../../types/blog";
import styles from "../../styles/home.module.css"
import { Container, Text, Button, StylesProvider } from "@chakra-ui/react"

export default function BlogPage({title, description}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Text as="u" fontSize="3xl">{title}</Text>
            <Text fontSize="1xl">{description}</Text>
        </div>
    )
}

export async function getStaticProps(context: any){
    console.log('heyo',context);
    return{
        props:Blogs.find((item)=>item.slug ==context.params.slug),
    };
}

export async function getStaticPaths(){
    // Blogs.map((blog: Blog)
    return{
        paths: Blogs.map((blog: Blog)=>({
            params:{
                slug:blog.slug,
            },
        })),
        fallback: false,
    }
}
