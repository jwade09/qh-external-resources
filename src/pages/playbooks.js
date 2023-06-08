import React from "react"
import Layout from "../includes/layout"
import headerImage from "../images/playbook-image.jpg"
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, connectStateResults } from "react-instantsearch-dom"
import BookCard from "../components/book-card"

const searchClient = algoliasearch('W58GS3KDZK', '281b7cfdd7761212f4a65d97b8b9b4af');




const Results = connectStateResults(
    ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? (
        children
      ) : (
        <div className="search-wrapper"><p className="mt-15">No results have been found for {searchState.query}. 😔</p></div>
      )   
  );


const Books = () => {
    return(
        <Layout side="playbook">
      <section>
        <div className="flex align-center">
        <img className="header-img" src={headerImage} />
        <div>
          <h1>Playbooks</h1>
          <p>The marketing department continuously updates this site for any sales/marketing efforts. If something is missing, please reach out to the marketing department.</p>
          </div>
        </div>
      </section>
      <InstantSearch searchClient={searchClient} indexName="Playbooks">
                  <SearchBox autoFocus />
                  <Results>
                      <Hits hitComponent={BookCard}  />
                  </Results>
                </InstantSearch>
      
        </Layout>
    )
}

export default Books

export const Head = (props) => {
    return(
      <>
        <title>Playbooks</title>
        <script src="https://kit.fontawesome.com/ba4e68cc54.js" crossorigin="anonymous"></script>
        <meta name="robots" content="noindex"></meta>
      </>
    )
  }