import PostDetails from '@/components/Blog/PostDetails/PostDetails';
import CATEGORIES from '@/constants/CATEGORIES';
import GROUPS from '@/constants/GROUPS';
import URLS from '@/constants/URLS';
import { getPosts, getPostsByFriendlyUrl } from '@/services/getPosts';
import _ from 'lodash';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

export default function Index({ posts }: any) {
  return <>{/* <PostDetails posts={posts} /> */}</>;
}

export const getStaticPaths = async () => {
  // Get Posts by category and group
  const courses = await getPosts({
    mode: 'ForStaticPaths',
    categoryId: CATEGORIES.Product,
    groupId: GROUPS.Main,
    includeBody: false,
  });

  const paths = courses.map((course: any) => {
    return {
      params: {
        friendlyUrl: course.friendlyUrl,
      },
    };
  });
  return { paths, fallback: true };
};

interface IParams extends ParsedUrlQuery {
  friendlyUrl: string;
}
// ------------------------------------------------------------------------------------------------
export const getStaticProps: GetStaticProps = async (context) => {
  const { friendlyUrl } = context.params as IParams;
  console.log('🚀 ~ friendlyUrl:', friendlyUrl);

  const post: any = _.first(await getPostsByFriendlyUrl(friendlyUrl));
  console.log('🚀 ~ post:', post);

  if (!post) {
    return { notFound: true };
  }

  const posts = await getPosts({
    categoryId: post.categoryID,
    includeBody: true,
  });

  return {
    props: {
      posts: posts,
    },
    revalidate: URLS.validate,
  };
};
