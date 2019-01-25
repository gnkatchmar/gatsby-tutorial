// import React from "react"
// import Header from "../components/header"

// export default () => (
//   <div style={{ color: `teal` }}>
//     <Header headerText="About Gatsby" />
//     <Header headerText="It's pretty cool" /> 
//     <p>Such wow. Very React.</p>
//   </div>
// )

// import React from "react"
// import Layout from "../components/layout"

// export default () => (
//   <Layout>
//     <h1>About me</h1>
//     <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
//   </Layout>
// )

import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
  <Helmet>
  <meta charSet="utf-8" />
  <title>My Title</title>
  <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    <h1>About {data.site.siteMetadata.title}</h1> 
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`