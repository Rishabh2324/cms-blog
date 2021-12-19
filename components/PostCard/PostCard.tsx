import React from "react";
import moment from "moment";
import { IPost } from "../../utils/interfaces";

import CalenderIcon from '../../assets/icons/calender.svg'

import styles from "./PostCard.module.scss";

type Props = {
  post: IPost;
};

const PostCard: React.FC<Props> = ({ post }) => {
  const { title, excerpt, featuredImage, author, categories, createdAt } =
    post.node;
  return (
    <div className={styles.PostCard}>
      <div className={styles.PostCard__ImageContainer}>
        <img src={featuredImage.url} alt="SAd" />
      </div>
      <div className={styles.PostCard__Details}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.authorDetails__section}>
          <div className={styles.details}>
            <div className={styles.author_image}>
              <img src={author.photo.url} alt={title} />
            </div>
            <p className={styles.author_name}>{author.name}</p>
          </div>
          <div className={styles.details}>
            <div className={styles.author_image}>
              <CalenderIcon />
            </div>
            <p className={styles.author_name}>
              {moment(createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
        <p className={styles.PostCard__Details__blogDescription}>{excerpt}</p>
        <div className={styles.PostCard__Details__readBlogButton}>
          <button>Continue Reading</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
