import React from 'react'

import { Author, CommentForm, PostCard, PostWidgetList, Categories ,PostList} from "../../components";

import styles from './Home.module.scss';

const HomeLayout = () => {
  return (
    <div className={styles.HomeLayout}>
      <div className={styles.HomeLayout__FeaturedBlogsList}>

      </div>
      <div className={styles.HomeLayout__BlogListWithCategories}>
        <div className={styles.HomeLayout__BlogListWithCategories_blogList}>
          <PostList />
        </div>
        <div className={styles.HomeLayout__BlogListWithCategories_CategoryList_wrapper}>
          <div className={styles.HomeLayout__BlogListWithCategories_CategoryList}>
            <PostWidgetList />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeLayout;
