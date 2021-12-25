import React from 'react'

import PostList from './PostList'
import PosWidgetList from './PostWidgetList';

import styles from './Home.module.scss';
import Categories from './PostWidgetList/Categories';

const HomeLayout = () => {
  return (
    <div className={styles.HomeLayout}>
      <div className={styles.HomeLayout__NavBar}>

      </div>
      <div className={styles.HomeLayout__FeaturedBlogsList}>

      </div>
      <div className={styles.HomeLayout__BlogListWithCategories}>
        <div className={styles.HomeLayout__BlogListWithCategories_blogList}>
          <PostList />
        </div>
        <div className={styles.HomeLayout__BlogListWithCategories_CategoryList_wrapper}>
          <div className={styles.HomeLayout__BlogListWithCategories_CategoryList}>
            <PosWidgetList />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeLayout;
