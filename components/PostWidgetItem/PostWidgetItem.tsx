import React from 'react';
import moment from 'moment';

import { IPost } from '../../utils/interfaces';

import styles from './PostWidgetItem.module.scss';

type Props = {
    post: IPost;
};

const PostWidget: React.FC<Props> = ({ post }) => {
    const { title, featuredImage, createdAt, slug }: any = post;
    return (
        <div className={styles.PostWidgetItem}>
            <div className={styles.PostWidgetItem_postImageContainer}>
                <img src={featuredImage.url} alt="featuredImage" />
            </div>
            <div className={styles.PostWidgetItem_postDetail}>
                <p className={styles.PostWidgetItem_postDetail___Date}>
                    {moment(createdAt).format('MMM DD, YYYY')}
                </p>
                <a href={`/post/${slug}`} className={styles.PostWidgetItem_postDetail__Title}> {title}</a>
            </div>
        </div>
    );
};

export default PostWidget;
