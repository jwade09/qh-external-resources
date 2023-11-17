import * as React from "react"
import Layout from "../includes/layout"
import SearchCard from "../components/search-card"
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, connectStateResults, Index } from "react-instantsearch-dom"
import { graphql } from "gatsby"
import PlayCard from "../components/play-card"

const searchClient = algoliasearch('W58GS3KDZK', '281b7cfdd7761212f4a65d97b8b9b4af');

const IndexResults = connectStateResults(
  ({ searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      children
    ) : ''
);

const AllResults = connectStateResults(({ allSearchResults, children }) => {
  const hasResults =
    allSearchResults &&
    Object.values(allSearchResults).some(results => results.nbHits > 0);
  return !hasResults ? (
    <div>
      <div className="search-wrapper"><p className="mt-15">No results have been found.</p></div>
      <Index indexName="Videos" />
      <Index indexName="Solution_overview" />
    </div>
  ) : (
    children
  );
});



const Results = connectStateResults(({ searchState, children }) =>
searchState && searchState.nbHits !== 0 ? (
  children
) : (
  ''
)
);

export const newResources = graphql`
  query news {
    allPrismicVideo(sort: {first_publication_date: DESC}, limit: 3, filter: {}) {
      nodes {
        data {
          category
          description {
            text
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
      }
    }
  }
`

const IndexPage = (props) => {
  console.log(props)
  return (
    <Layout>
      {/* <section>
        <div className="flex align-center">
          <img className="header-img" src={headerImage} />
          <div>
          <h1>Resources</h1>
          <p>The marketing department continuously updates this site for any sales/marketing efforts. If something is missing, please reach out to the marketing department.</p>
          </div>
        </div>
      </section> */}
      <section className="flex justify-content well wrap new gutter bot">
        {props.data.allPrismicVideo.nodes.map(card =>{
          return <PlayCard title={card.data.title.text} url={card.data.resource.url} desc={card.data.description.text} cat={card.data.category} date={card.data.date_created} new="NEW" />
        })}
      </section>
      <section>
      <InstantSearch searchClient={searchClient} indexName="Videos">
        <section className="well search gutter-sm">
        <SearchBox autoFocus />
        </section>
          <section className="well">
          <Results>
          <AllResults>
            <Index indexName="Videos">
              <IndexResults>
              <a className="anchor" id="videos" />
              <h2 className="search-title">Videos</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Solution_overview">
              <IndexResults>
              <a className="anchor" id="solutions" />
              <h2 className="search-title" id="solutions">Solution Overviews / Research</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="CCS">
              <IndexResults>
              <a className="anchor" id="ccs" />
              <h2 className="search-title" id="ccs">Comprehensive Care Solutions</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="White_paper">
              <IndexResults>
              <a className="anchor" id="paper" />
              <h2 className="search-title" id="paper">White Papers</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Webinars">
              <IndexResults>
              <a className="anchor" id="webinars" />
              <h2 className="search-title" id="webinars">Webinars</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Case_studies">
              <IndexResults>
              <a className="anchor" id="case" />
              <h2 className="search-title" id="case">Case Studies</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Nav_insider">
              <IndexResults>
              <a className="anchor" id="insider" />
              <h2 className="search-title" id="insider">Navigation Insider</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Landing_pages">
              <IndexResults>
              <a className="anchor" id="landing" />
              <h2 className="search-title" id="landing">Landing Pages</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Member_stories">
              <IndexResults>
              <a className="anchor" id="member" />
              <h2 className="search-title" id="member">Member Marketing</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            </AllResults>
        </Results>
          </section>
      </InstantSearch>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return(
    <>
      <title>External Resources</title>
      <script src="https://kit.fontawesome.com/ba4e68cc54.js" crossorigin="anonymous"></script>
      <meta name="robots" content="noindex"></meta>
    </>
  )
}
