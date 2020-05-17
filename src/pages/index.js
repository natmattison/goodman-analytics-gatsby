import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import CaseStudies from "../components/sections/casestudies"
import Blog from "../components/sections/blog"
import Services from "../components/sections/services"
import Contact from "../components/sections/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Services />
    <CaseStudies />
    <Blog />
    <Contact />
  </Layout>
)

export default IndexPage
