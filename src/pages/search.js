import React from 'react'

import Layout from "../components/layout"
import Search from "../components/search"
import SEO from "../components/seo"

const SearchPage = () => (
    <Layout>
        <SEO title="Search" />
        <Search />
    </Layout>
)

export default SearchPage