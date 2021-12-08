# Documentation

This project is new and we expect you to atleast know basic reactjs and also basics of web development for you to understand this. Information about static site generation would be a plus.

## Stack

- Language: [TypeScript](https://www.typescriptlang.org/)
- Framework: [Next.js](https://nextjs.org/docs)
- Style Framework: [Chakra UI](https://chakra-ui.com/)
- Style lib : [Emotion](https://emotion.sh/docs/introduction)
- Animation: [Framer motion](https://www.framer.com/motion/)
- Hosting: [cloudflare-pages](https://pages.dev)


## Guidelines
Keep the following point in mind when making a PR:
1. Make sure to run `npm run lint` to make sure your code passes the automatic checks (try to fix all the bugs which come up if u can)
2. We prefer that the commit messages should be like: `"home: change btn color to cyan"` or `"doc: add contributor to readme"` or any relevant names you can come up depending on which part of the code the changes have been made.
3. Try to commit more often, and dont hesitate to send the smallest of changes as a PR.

## Structure

The project is very new and in its early stages of development, please make sure to update this document and TODO as the features will be implemented.

Routes-

1. `blog/:id` [blogs will stored in "uploads/" in .md format]
2. `/blogs` [Will show all the blogs pulished in the present year. For the previous years, there will be a button to switch to those.]

### Blogs Page [index]

A kekwLabs Blogs logo on top and a description of the blog contains list of latest blogs. In future updates, pagination should be added to only display 10 blogs at a time.

Description of the blog goes like: `Blog platform for kekwlabs' members to publish research and development content like blogs and writups on computer science and security research`

### Blog Page

Will fetch the blog from the `uploads` and then the `/{year}` directory and will display on the page, converting markdown to html. The mechanism goes something like this:

1. A function called `getStaticPaths` gets executed at build time which maps all the paths in the uploads folder and caches it somewhere
2. Another function called `getStaticProps` also gets called at build time and takes all the params as the argument (I currently have no idea how this works but may figure it out soon if I read the docs more, if someone is reading this now, well I have not done that yet.) and fetches all the files from the uploads directory and outputs the build html.

## TODO
1. Initialize next.js, add readme and contributor information --- [DONE]
2. Install required packages [chakra, framer-motion] --- [DONE]
3. Build basic layout of the Blogs page, adding styles and stuff.
4. Add functionality to display list of blogs from the uploads/{year} directory to the Blogs page.
5. Add fuctionality to convert `.md` to `html` and display on the blogs/:id page.
6. Write `getStaticPaths` and `getStaticProps` with the functionality described above.

