import React from "react"
import { rhythm } from "../utils/typography"
import Layout from "../layouts"

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div
          css={{
            padding: rhythm(3 / 4),
          }}
        >
          <h1 data-testid="about-title">About Gatsbygram</h1>
          <p>
            Gatsbygram is an example website built with the JavaScript web
            framework
            {` `}
            <a
              rel="noopener noreferrer"
              href="https://github.com/gatsbyjs/gatsby"
            >
              Gatsby
            </a>
            {` and `}
            <a
              rel="noopener noreferrer"
              href="https://github.com/lsirivong/gatsby-plugin-modal-routing"
            >
              gatsby-plugin-modal-routing
            </a>
            .
          </p>
          <p>
            The code for the site lives at
            {` `}
            <a
              href="https://github.com/lsirivong/gatsbygram-with-gatsby-plugin-modal-routing"
              rel="noopener noreferrer"
            >
              https://github.com/lsirivong/gatsbygram-with-gatsby-plugin-modal-routing
            </a>
          </p>
          <p>
            <a href="https://www.gatsbyjs.org/blog/gatsbygram-case-study/">
              Read a case study on how Gatsbygram was built
            </a>
          </p>
        </div>
      </Layout>
    )
  }
}

export default About
