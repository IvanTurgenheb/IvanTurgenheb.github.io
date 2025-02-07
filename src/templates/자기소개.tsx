import React from "react"
import { graphql } from "gatsby"

import type {
  ContactType,
  InformationType,
  PrizeType,
} from "../types/Profile.interface"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Profile from "../components/Profile"
import Prizes from "../components/Prizes"

interface BlogTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        information: InformationType
        contact: ContactType
        prizes: PrizeType[]
      }
    }
  }
}

const BlogTemplate = ({
  data: { markdownRemark: myProfile },
}: BlogTemplateProps) => {
  const { information, contact, prizes } = myProfile.frontmatter

  return (
    <Layout>
      <Profile information={information} contact={contact} />
      <Prizes prizes={prizes} />
    </Layout>
  )
}

export const Head = ({
  data: { markdownRemark: myProfile },
}: BlogTemplateProps) => {
  return <Seo title={myProfile.frontmatter.information.title} />
}

export default BlogTemplate

export const pageQuery = graphql`
  query ProfileData($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        information {
          title
          subTitle
          description
        }
        contact {
          email
          github
          phone
        }
        prizes {
          title
          date
          institution
        }
      }
    }
  }
`
