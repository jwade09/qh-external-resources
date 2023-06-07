import React from "react"
import Layout from "../includes/layout"
import { graphql } from "gatsby"
import { PrismicRichText, SliceZone } from "@prismicio/react"
import { components } from "../components/slices"

export const playBookQuery = graphql`
query bookQuery($id: String) {
    prismicPlaybook(id: {eq: $id}) {
      id
      uid
      data {
        description {
          richText
        }
        title {
          text
        }
        body {
          ... on PrismicPlaybookDataBodyResources {
            id
            slice_type
            primary {
                resource_description {
                  richText
                }
                resource_title {
                  text
                }
              }
            items {
              resource {
                document {
                  ... on PrismicVideo {
                    id
                    data {
                      title {
                        text
                      }
                      resource {
                        url
                      }
                      hide_disclaimer
                      description {
                        text
                      }
                      date_created(formatString: "MMMM, YYYY")
                      category
                    }
                  }
                }
              }
            }
          }
        }
      }
      type
    }
  }
`

const PlayBook = (props) => {
    console.log(props)
    return(
        <Layout side={props.data.prismicPlaybook.type}>
            <section>
                <div className="flex align-center">
                    <div className="pl">
                        <h1>{props.data.prismicPlaybook.data.title.text}</h1>
                        <PrismicRichText field={props.data.prismicPlaybook.data.description.richText} />
                    </div>
                </div>
            </section>
            <section>
                <SliceZone components={components} slices={props.data.prismicPlaybook.data.body}  />
            </section>
        </Layout>
    )
}

export default PlayBook

export const Head = (props) => {
    return(
      <>
        <title>{props.data.prismicPlaybook.data.title.text}</title>
        <script src="https://kit.fontawesome.com/ba4e68cc54.js" crossorigin="anonymous"></script>
        <meta name="robots" content="noindex"></meta>
      </>
    )
  }