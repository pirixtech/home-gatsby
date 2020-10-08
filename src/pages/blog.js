import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// retainable.io method
// https://medium.com/datadriveninvestor/embed-medium-as-a-blog-on-your-site-54a1b49cbe16
// reference: https://snpranav.com/blog/medium-posts-on-website/
const Blog = () => {
  return (
    <div>
      <div
        id='retainable-rss-embed'
        data-rss='https://medium.com/feed/@pirix.tech'
        data-maxcols='3'
        data-layout='grid'
        data-poststyle='inline'
        data-readmore='Read the rest'
        data-buttonclass='btn btn-primary'
        data-offset='-100'
      />
      <script src='https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js' />
    </div>

  )
}

// use gatsby-source-medium plugin
// const Blog = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMediumPost {
//         edges {
//           node {
//             id
//             uniqueSlug
//             title
//             createdAt(formatString: "DD MMMM YYYY")
//             virtuals {
//               subtitle
//               readingTime
//               previewImage {
//                 imageId
//               }
//             }
//             author {
//               username
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <div className='blog'>
//       <h1 Blog />
//       <ol>
//         {data.allMediumPost.edges.map(({ node }) => {
//           return (
//             <li>
//               <a
//                 key={node.id}
//                 href={`https://medium.com/@pirix.tech/${node.uniqueSlug}`}
//                 target='_blank'
//                 rel='noopener noreferrer'
//               >
//                 <h2>{node.title}</h2>
//                 <p>{node.createdAt}</p>
//               </a>
//             </li>
//           )
//         })}
//       </ol>
//     </div>
//   )
// }

export default Blog
