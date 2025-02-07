import React from "react"
import { graphql } from "gatsby"

import type {
  CertificatesType,
  ContactType,
  ExperiencesType,
  InformationType,
  PrizeType,
  SkillsType,
} from "../types/Profile.interface"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Profile from "../components/Profile"
import Prizes from "../components/Prizes"
import Certificates from "../components/Certificates"
import Skills from "../components/Skills"
import Experiences from "../components/Experiences"

interface BlogTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        information: InformationType
        contact: ContactType
        prizes: PrizeType[]
        certificates: CertificatesType[]
        experiences: ExperiencesType[]
        skills: {
          stack: SkillsType[]
        }
      }
    }
  }
}

const BlogTemplate = ({
  data: { markdownRemark: myProfile },
}: BlogTemplateProps) => {
  const { information, contact, prizes, certificates, experiences, skills } =
    myProfile.frontmatter

  return (
    <Layout>
      <Profile information={information} contact={contact} />
      <Prizes prizes={prizes} />
      <Certificates certificates={certificates} />
      <Experiences experiences={experiences} />
      <Skills skills={skills} />
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
          school
        }
        prizes {
          title
          date
          institution
        }
        certificates {
          title
          date
          institution
        }
        experiences {
          title
          subTitle
          imgUrl
          date
          descriptions
          githubLink
        }
        skills {
          stack
        }
      }
    }
  }
`
