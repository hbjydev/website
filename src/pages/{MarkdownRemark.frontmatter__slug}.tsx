import { graphql } from 'gatsby';
import * as React from 'react';
import InnerLayout from '../components/InnerLayout';
import Layout from '../components/Layout';

interface PageQueryData {
    markdownRemark: {
        html: string;
        frontmatter: {
            date: string;
            slug: string;
            title: string;
        }
    };
};

type TemplateProps = {
    data: PageQueryData;
};

export default function Template({ data }: TemplateProps) {
    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;

    return (
        <Layout title={frontmatter.title}>
            <InnerLayout html={html} />
        </Layout>
    );
};

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
