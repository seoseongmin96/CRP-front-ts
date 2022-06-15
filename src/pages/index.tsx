

import Layout from '@components/layout';
import PostListMasonryThreeColumn from '@components/posts-layout/masonry-three-column';
import Instagram from '@components/sections/instagram';

import styled from 'styled-components';
import { Home } from '@components/Home';


const PostsListContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const HomePage = () => {
  return (
    <Layout title="CRP">
      <PostsListContainer>
        <PostListMasonryThreeColumn />
        <Instagram/>
      </PostsListContainer>
      <Home/>
    </Layout>
  );
};

export default HomePage;
