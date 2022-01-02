import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory=path.join(process.cwd(),'uploads');

export function getAllPosts(){
    const allPosts=fs.readdirSync(postsDirectory);

    return allPosts.map(fileName=>{
        const slug=fileName.replace('.md','');
        const fileContents=fs.readFileSync(
            path.join(postsDirectory,fileName),'utf8'
        );

        const {data, content}=matter(fileContents);

        return{
            data,
            content,
            slug,
        }

    })
}

export interface Blog {
    title: string
    description: string
    body: string
    slug: string
}

// export const Blogs: Blog[] = [
//     {
//         title: 'This is Blog 1',
//         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat a commodi dolor officiis expedita quasi, eaque reiciendis debitis saepe dolore molestiae maxime distinctio, voluptas qui tenetur quod excepturi optio',
//         slug:'first',
//         body: 'body'
//     },

//     {
//         title: 'This is Blog 2',
//         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat a commodi dolor officiis expedita quasi, eaque reiciendis debitis saepe dolore molestiae maxime distinctio, voluptas qui tenetur quod excepturi optio',
//         slug:'second',
//         body: 'body'
//     },


//     {
//         title: 'This is Blog 3',
//         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat a commodi dolor officiis expedita quasi, eaque reiciendis debitis saepe dolore molestiae maxime distinctio, voluptas qui tenetur quod excepturi optio',
//         slug:'third',
//         body: 'body'
//     },


//     {
//         title: 'This is Blog 4',
//         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat a commodi dolor officiis expedita quasi, eaque reiciendis debitis saepe dolore molestiae maxime distinctio, voluptas qui tenetur quod excepturi optio',
//         slug:'fourth',
//         body: 'body'
//     },


//     {
//         title: 'This is Blog 5',
//         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat a commodi dolor officiis expedita quasi, eaque reiciendis debitis saepe dolore molestiae maxime distinctio, voluptas qui tenetur quod excepturi optio',
//         slug:'fifth',
//         body: 'body'
//     },
// ]