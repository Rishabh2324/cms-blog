import React from "react";
import moment from "moment";
import { IPost } from "../../utils/interfaces";

import CalenderIcon from "../../assets/icons/calender.svg";

import styles from "./PostCard.module.scss";

type Props = {
  post: IPost["node"];
  showDetailedPost?: boolean;
};

const PostCard: React.FC<Props> = ({ post, showDetailedPost = false }) => {
  const {
    title,
    excerpt,
    featuredImage,
    author,
    categories,
    createdAt,
    slug,
    content,
  } = post;

  const getContentFragment = (
    index: any,
    text: any,
    obj: any,
    type: string
  ) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className={styles.PostCard}>
      <div className={styles.PostCard__ImageContainer}>
        <img src={featuredImage.url} alt="SAd" />
      </div>
      <div className={styles.PostCard__Details}>
        <h1 className={styles.title}>
          <a href={`/post/${slug}`}>{title}</a>
        </h1>
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
        {!showDetailedPost && (
          <p className={styles.PostCard__Details__blogDescription}>{excerpt}</p>
        )}
        {!showDetailedPost && (
          <div className={styles.PostCard__Details__readBlogButton}>
            <a href={`/post/${slug}`}>Continue Reading</a>
          </div>
        )}
        {showDetailedPost && (
          <>
            {content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) =>
                getContentFragment(itemIndex, item.text, item, "")
              );
              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default PostCard;
