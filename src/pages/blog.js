import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// const Blog = () => {
//   return (
//     <div>
//       <div
//         id='retainable-rss-embed'
//         data-rss='https://medium.com/feed/@pirix.tech'
//         data-maxcols='3'
//         data-layout='grid'
//         data-poststyle='inline'
//         data-readmore='Read the rest'
//         data-buttonclass='btn btn-primary'
//         data-offset='-100'
//       />
//       <script src='https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js' />
//     </div>

//   )
// }

const Blog = () => {
  const data = useStaticQuery(graphql`
    query Medium {
      allMediumPost {
        edges {
          totalCount
          node {
            id
            uniqueSlug
            title
            createdAt(formatString: "DD MMMM YYYY")
            virtuals {
              subtitle
              readingTime
              previewImage {
                imageId
              }
            }
            author {
              username
            }
          }
        }
      }
    }
  `)

  return (
    ({ data.allMediumPost }) => (
      <header>
        <h1>{allMediumPost.edges[0].node.title}</h1>
      </header>
    )
    // <div className='blog'>
    //   <h1 Blog />
    //   <ol>
    //     {data.allMediumPost.edges.map(({ node }) => {
    //       return (
    //         <li>
    //           <a
    //             key={node.name}
    //             href={`https://medium.com/@pirix.tech/${node.uniqueSlug}`}
    //             target='_blank'
    //             rel='noopener noreferrer'
    //           >
    //             <h2>{node.title}</h2>
    //             <p>{node.createdAt}</p>
    //           </a>
    //         </li>
    //       )
    //     })}
    //   </ol>
    // </div>
  )
}

export default Blog
