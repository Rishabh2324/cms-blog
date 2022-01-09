import React from "react";

import { getPosts, getPostDetails } from "../../services";
import { IPost } from "../../utils/interfaces";

import {
  Author,
  CommentForm,
  PostCard,
  PostWidgetList,
  Categories,
} from "../../components";

import styles from "./Post.module.scss";

type Props = {
  post: IPost["node"];
};

const PostDetails: React.FC<Props> = ({ post }) => {
  return (
    <>
      <div className={styles.PostDetails}>
        <div className={styles.PostDetails__BlogListWithCategories}>
          <div className={styles.PostDetails__BlogListWithCategories_blogList}>
            <PostCard post={post} showDetailedPost={true} />
            <Author author={post.author}/>
          </div>
          <div
            className={
              styles.PostDetails__BlogListWithCategories_CategoryList_wrapper
            }
          >
            <div
              className={
                styles.PostDetails__BlogListWithCategories_CategoryList
              }
            >
              <PostWidgetList
                categories={post?.categories?.map((category) => category.slug)}
                slug={post.slug}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }: any) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: any) => ({ params: { slug } })),
    fallback: true,
  };
}
