import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"

interface BlogTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description: string
      }
    }
  }
}

const BlogTemplate = ({
  data: { markdownRemark: post },
}: BlogTemplateProps) => {
  return (
    <Layout>
      <Profile title={post.frontmatter.title} />
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }: BlogTemplateProps) => {
  return <Seo title={post.frontmatter.title} />
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogData($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
