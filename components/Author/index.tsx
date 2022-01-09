import React from "react";

import styles from "./Author.module.scss";
import { Author } from "../../utils/interfaces";

type Props = {
  author: Author;
};

const Author: React.FC<Props> = ({ author }) => {
  const { bio, name, photo, id } = author;
  return (
    <div className={styles.Author}>
      <div className={styles.Author__ImageContainer}>
        <img alt={name} src={photo.url} />
      </div>
      <h3 className={styles.Author__name}>{name}</h3>
      <p className={styles.Author__bio}>{bio}</p>
    </div>
  );
};

export default Author;
