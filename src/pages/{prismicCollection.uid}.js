import React from "react"
import Layout from "../includes/layout"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"
import CollectionCard from "../components/collection-card"

export const playBookQuery = graphql`
query collQuery($id: String) {
    prismicCollection(id: {eq: $id}) {
      uid
      type
      data {
        desc {
          richText
        }
        title {
          text
        }
        resource {
          category
          decription {
            text
          }
          resource_link {
            url
          }
          resource_title {
            text
          }
        }
      }
    }
  }
`

const Collection = (props) => {

  const sc = props.data.prismicCollection.data.resource

    return(
        <Layout>
            <section className="flex justify-content well wrap gutter bot">
                <div className="flex align-center">
                    <div className="pl">
                        <h1>{props.data.prismicCollection.data.title.text}</h1>
                        <PrismicRichText field={props.data.prismicCollection.data.desc.richText} />
                    </div>
                </div>
            </section>

            <section className="flex justify-content well wrap gutter bot">
              {sc.map(col => {
                return <CollectionCard cat={col.category} title={col.resource_title.text} url={col.resource_link.url} desc={col.decription.text} />
              })}
            </section>
        </Layout>
    )
}

export default Collection

export const Head = (props) => {
    return(
      <>
        <title>{props.data.prismicCollection.data.title.text}</title>
        <script src="https://kit.fontawesome.com/ba4e68cc54.js" crossorigin="anonymous"></script>
        <meta name="robots" content="noindex"></meta>
      </>
    )
  }