import * as React from "react"
import Layout from "../includes/layout"
import headerImage from "../images/resource-image.png"
import SearchCard from "../components/search-card"
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, connectStateResults, Index } from "react-instantsearch-dom"

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

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <div className="flex align-center">
          <img className="header-img" src={headerImage} />
          <div>
          <h1>Resources</h1>
          <p>The marketing department continuously updates this site for any sales/marketing efforts. If something is missing, please reach out to the marketing department.</p>
          </div>
        </div>
      </section>
      <section>
      <InstantSearch searchClient={searchClient} indexName="Videos">
        <SearchBox autoFocus />
          <Results>
          <AllResults>
            <Index indexName="Videos">
              <IndexResults>
              <h2 className="search-title" id="videos">Videos</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Solution_overview">
              <IndexResults>
              <h2 className="search-title" id="solutions">Solution Overviews / Research</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="CCS">
              <IndexResults>
              <h2 className="search-title" id="ccs">Comprehensive Care Solutions</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="White_paper">
              <IndexResults>
              <h2 className="search-title" id="paper">White Papers</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Webinars">
              <IndexResults>
              <h2 className="search-title" id="webinars">Webinars</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Case_studies">
              <IndexResults>
              <h2 className="search-title" id="case">Case Studies</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Nav_insider">
              <IndexResults>
              <h2 className="search-title" id="insider">Navigation Insider</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Landing_pages">
              <IndexResults>
              <h2 className="search-title" id="landing">Landing Pages</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            <Index indexName="Member_stories">
              <IndexResults>
              <h2 className="search-title" id="member">Member Stories</h2>
              <Hits hitComponent={SearchCard} />
              </IndexResults>
            </Index>
            </AllResults>
        </Results>
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
