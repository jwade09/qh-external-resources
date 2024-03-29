const videoQuery = `{
  allPrismicVideo(
    filter: {data: {category: {in: "Videos"}}}) {
    nodes {
      data {
        category
        hide_disclaimer
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
        date: date_created(formatString: "X")
        
      }
      id
      internal {
        contentDigest
      }
      tags
      last_publication_date(formatString: "MMMM D, YYYY")
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
        date: date_created(formatString: "X")
        hide_disclaimer
      }
      id
      internal {
        contentDigest
      }
      tags
      last_publication_date(formatString: "MMMM D, YYYY")
    }
  }
}`
const ccsQuery = `{
  allPrismicVideo(filter: {data: {category: {in: "Comprehensive Care Solutions"}}}) {
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
        date: date_created(formatString: "X")
        hide_disclaimer
      }
      id
      internal {
        contentDigest
      }
      tags
      last_publication_date(formatString: "MMMM D, YYYY")
    }
  }
}`
const whitePaperQuery = `{
  allPrismicVideo(filter: {data: {category: {in: "White Papers"}}}) {
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
        date: date_created(formatString: "X")
        hide_disclaimer
      }
      id
      internal {
        contentDigest
      }
      tags
      last_publication_date(formatString: "MMMM D, YYYY")
    }
  }
}`
const webinarsQuery = `{
  allPrismicVideo(filter: {data: {category: {in: "Webinars"}}}) {
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
        date: date_created(formatString: "X")
        hide_disclaimer
      }
      id
      internal {
        contentDigest
      }
      tags
      last_publication_date(formatString: "MMMM D, YYYY")
    }
  }
}`
const caseQuery = `{
  allPrismicVideo(filter: {data: {category: {in: "Case Studies"}}}) {
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
        date: date_created(formatString: "X")
        hide_disclaimer
      }
      id
      internal {
        contentDigest
      }
      tags
      last_publication_date(formatString: "MMMM D, YYYY")
    }
  }
}`
const navQuery = `{
  allPrismicVideo(filter: {data: {category: {in: "Navigation Insider"}}}) {
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
        date: date_created(formatString: "X")
        hide_disclaimer
      }
      id
      internal {
        contentDigest
      }
      tags
      last_publication_date(formatString: "MMMM D, YYYY")
    }
  }
}`
const colQuery = `{
  allPrismicVideo(filter: {data: {category: {in: "Collection"}}}) {
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
        date: date_created(formatString: "X")
        hide_disclaimer
      }
      id
      internal {
        contentDigest
      }
      tags
      last_publication_date(formatString: "MMMM D, YYYY")
    }
  }
}`
const landQuery = `{
  allPrismicVideo(filter: {data: {category: {in: "Landing Pages"}}}) {
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
        date: date_created(formatString: "X")
        hide_disclaimer
      }
      id
      internal {
        contentDigest
      }
      tags
      last_publication_date(formatString: "MMMM D, YYYY")
    }
  }
}`
const memberQuery = `{
  allPrismicVideo(filter: {data: {category: {in: "Member Stories"}}}) {
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
        date: date_created(formatString: "X")
        hide_disclaimer
      }
      id
      internal {
        contentDigest
      }
      tags
      last_publication_date(formatString: "MMMM D, YYYY")
    }
  }
}`

const playBookQuery = `{
  allPrismicPlaybook {
    nodes {
      data {
        description {
          richText
          html
        }
        title {
          text
        }
      }
      uid
      id
      internal {
        contentDigest
      }
    }
  }
}`



const queries = [
  {
    query: videoQuery,
    transformer: ({ data }) => data.allPrismicVideo.nodes,
    indexName: 'Videos',
  },
  {
    query: solutionQuery,
    transformer: ({ data }) => data.allPrismicVideo.nodes,
    indexName: 'Solution_overview',
  },
  {
    query: ccsQuery,
    transformer: ({ data }) => data.allPrismicVideo.nodes,
    indexName: 'CCS',
  },
  {
    query: whitePaperQuery,
    transformer: ({ data }) => data.allPrismicVideo.nodes,
    indexName: 'White_paper',
  },
  {
    query: webinarsQuery,
    transformer: ({ data }) => data.allPrismicVideo.nodes,
    indexName: 'Webinars',
  },
  {
    query: caseQuery,
    transformer: ({ data }) => data.allPrismicVideo.nodes,
    indexName: 'Case_studies',
  },
  {
    query: navQuery,
    transformer: ({ data }) => data.allPrismicVideo.nodes,
    indexName: 'Nav_insider',
  },
  {
    query: landQuery,
    transformer: ({ data }) => data.allPrismicVideo.nodes,
    indexName: 'Landing_pages',
  },
  {
    query: memberQuery,
    transformer: ({ data }) => data.allPrismicVideo.nodes,
    indexName: 'Member_stories',
  },
  {
    query: playBookQuery,
    transformer: ({ data }) => data.allPrismicPlaybook.nodes,
    indexName: 'Playbooks',
  },
  {
    query: colQuery,
    transformer: ({ data }) => data.allPrismicVideo.nodes,
    indexName: 'Collections',
  },
  ]


module.exports = queries