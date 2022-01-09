import React, { useEffect, useState } from 'react'
import { getRecentPosts, getSimilarPosts } from '../../services';

import { PostWidgetItem } from '../../components'
import { IPost } from '../../utils/interfaces';

import styles from './PostWidgetList.module.scss';

const PostWidgetList = ({ categories, slug }:any) => {

  const [relatedPosts, setRelatedPosts] = useState<IPost[]>([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((results) =>
        setRelatedPosts(results)
      );
    } else {
      getRecentPosts().then((results) => setRelatedPosts(results));
    }
  }, [slug]);

  return <div className={styles.PostWidgetList}>
    <h2 className={styles.PostWidgetList__heading}>{slug ? 'Related Posts' : 'Recent Posts'}</h2>
    <div className={styles.PostWidgetList__separator} />
    {relatedPosts?.map((post: any) => <PostWidgetItem key={post.id} post={post} />)}
  </div>
}

export default PostWidgetList
