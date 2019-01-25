// import React from "react"
// import { Link } from "gatsby"
// import Header from "../components/header"

// export default () => (
//   <div style={{ color: `teal` }}>
//     <Link to="/">Home</Link>
//     <Header headerText="Contact" />
//     <p>Send us a message!</p>
//   </div>
// )

import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
  <Helmet>
  <meta charSet="utf-8" />
  <title>My Title</title>
  <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
  </Layout>
)