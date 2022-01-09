import React, { useEffect, useState } from 'react'

import { PostCard } from '..'

import { IPost } from '../../utils/interfaces';
import { getPosts } from '../../services';

const PostList: React.FC = () => {
  const [postList, setPostList] = useState<IPost[]>([])

  useEffect(() => {
    (async () => {
      const posts = await getPosts() || []
      setPostList(posts)
    })()
  }, [])

  return <>{postList?.map((post: IPost) => <PostCard key={post.node.id} post={post.node} />)}</>
}

export default PostList
