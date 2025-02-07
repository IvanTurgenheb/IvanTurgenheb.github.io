import React from "react"
import { graphql } from "gatsby"

import type { ContactType, InformationType } from "../types/Profile.interface"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Profile from "../components/Profile"

interface BlogTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        information: InformationType
        contact: ContactType
      }
    }
  }
}

const BlogTemplate = ({
  data: { markdownRemark: myProfile },
}: BlogTemplateProps) => {
  return (
    <Layout>
      <Profile
        information={myProfile.frontmatter.information}
        contact={myProfile.frontmatter.contact}
      />
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
      }
    }
  }
`
