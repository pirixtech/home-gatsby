const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    title: 'Pirix Technologies',
    description: 'Pirix Techlogies Inc. Homepage'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-copy-linked-files']
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid || 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Playfair+Display:400,700'
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: 'gatsby-remark-embed-video',
    //   options: {
    //     width: 800,
    //     ratio: 1.77,
    //     height: 400,
    //     related: false,
    //     noIframeBorder: true
    //   }
    // }
    'gatsby-plugin-ffmpeg',
    {
      resolve: 'gatsby-remark-videos',
      options: {
        pipelines: [
          {
            name: 'vp9',
            transcode: chain =>
              chain
                .videoCodec('libvpx-vp9')
                .noAudio()
                .outputOptions(['-crf 20', '-b:v 0']),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: 'webm'
          },
          {
            name: 'h264',
            transcode: chain =>
              chain
                .videoCodec('libx264')
                .noAudio()
                .videoBitrate('1000k'),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: 'mp4'
          }
        ]
      }
    }
  ]
}
