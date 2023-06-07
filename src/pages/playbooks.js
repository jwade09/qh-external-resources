import React from "react"
import Layout from "../includes/layout"
import headerImage from "../images/playbook-image.jpg"
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, connectStateResults, Index } from "react-instantsearch-dom"
import BookCard from "../components/book-card"

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
      <div className="search-wrapper"><p className="mt-15">No results have been found. 😔</p></div>
      <Index indexName="Playbooks" />
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


const Books = () => {
    return(
        <Layout side="playbook">
      <section>
        <div className="flex align-center">
        <img className="header-img" src={headerImage} />
        <div className="well">
          <h1>Playbooks</h1>
          <p>The marketing department continuously updates this site for any sales/marketing efforts. If something is missing, please reach out to the marketing department.</p>
          </div>
        </div>
      </section>
      <InstantSearch searchClient={searchClient} indexName="Playbooks">
        <SearchBox autoFocus />
          <Results>
          <AllResults>
            <Index indexName="Playbooks">
              <IndexResults>
              <Hits hitComponent={BookCard} />
              </IndexResults>
            </Index>
            </AllResults>
            </Results>
            </InstantSearch>
        </Layout>
    )
}

export default Books

export const Head = (props) => {
    return(
      <>
        <title>playbooks</title>
        <script src="https://kit.fontawesome.com/ba4e68cc54.js" crossorigin="anonymous"></script>
        <meta name="robots" content="noindex"></meta>
      </>
    )
  }