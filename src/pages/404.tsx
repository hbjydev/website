import * as React from 'react';
import { Link } from "gatsby"
import Layout from '../components/Layout';
import InnerLayout from '../components/InnerLayout';

const NotFoundPage = () => {
  return (
    <Layout>
      <InnerLayout>
        <h1>404.</h1>

        <p>
          That's an error that means the page you requested wasn't found.
        </p>

        <p>
          Would you like to <Link to="/">go home</Link>?
        </p>
      </InnerLayout>
    </Layout>
  )
}

export default NotFoundPage
