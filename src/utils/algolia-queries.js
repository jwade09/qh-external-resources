const videoQuery = `{
  allPrismicVideo(filter: {data: {category: {in: "Videos"}}}) {
    nodes {
      data {
        category
        description {
          richText
          html
        }
        resource {
          url
        }
        title {
          text
        }
        date_created(formatString: "MMMM, YYYY")
      }
      id
      internal {
        contentDigest
      }
    }
  }
}`
const solutionQuery = `{
  allPrismicVideo(filter: {data: {category: {in: "Solution Overviews / Research"}}}) {
    nodes {
      data {
        category
        description {
          richText
          html
        }
        resource {
          url
        }
        title {
          text
        }
        date_created(formatString: "MMMM, YYYY")
      }
      id
      internal {
        contentDigest
      }
    }
  }
}`



const queries = [
    
    {
      query: solutionQuery,
      transformer: ({ data }) => data.allPrismicVideo.nodes,
      indexName: 'Solution_overview',
  },
  {
    query: videoQuery,
    transformer: ({ data }) => data.allPrismicVideo.nodes,
    indexName: 'Videos',
},
  ]


module.exports = queries