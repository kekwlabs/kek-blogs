# Documentation

This project is new and we expect you to atleast know basic reactjs and also basics of web development for you to understand this. Information about static site generation would be a plus.

Language: [TypeScript](https://www.typescriptlang.org/)
Framework: [Next.js](https://nextjs.org/docs)
Style Framework: [Chakra UI](https://chakra-ui.com/)
Style lib : [Emotion](https://emotion.sh/docs/introduction)
Animation: [Framer motion](https://www.framer.com/motion/)
Hosting: [cloudflare-pages](https://pages.dev)

## Structure

The project has not been made yet, please make sure to update this document and TODO as the features will be implemented.

Routes-

1. about
2. `blog/:id` [blogs will stored in "uploads/" in .md format]
3. `/blogs` [will show 10 blogs at a time]

### Blogs Page [index]

A kekwLabs Blogs logo on top and a description of the blog contains list of latest blogs. In future updates, pagination should be added to only display 10 blogs at a time.

Description of the blog goes like: `Blog platform for kekwlabs' members to publish research and development content like blogs and writups on computer science and security research`

### About Page

About page, containing kekwLabs text as logo [which will have the link to `https://kekwlabs.github.io`] and description of the blog page and our team and link to github and our discord server.

### Blog Page

Will fetch the blog from the `uploads` directory and will display on the page, converting markdown to html. The mechanism goes something like this:

1. A function called `getStaticPaths` gets executed at build time which maps all the paths in the uploads folder and caches it somewhere
2. Another function called `getStaticProps` also gets called at build time and takes all the params as the argument (I currently have no idea how this works but may figure it out soon if I read the docs more, if someone is reading this now, well I have not done that yet.) and fetches all the files from the uploads directory and outputs the build html.

## TODO
1. Initialize next.js, add readme and contributor information --- [DONE]
2. Install required packages [chakra, framer-motion] --- [DONE]
3. Add the about page and write relevant information. 
4. Build basic layout of the Blogs page, adding styles and shit.
5. Add functionality to display list of blogs from the uploads directory to the Blogs page.
6. Add fuctionality to convert `.md` to `html` and display on the blogs/:id page.
7. Write `getStaticPaths` and `getStaticProps` with the functionality described above.

