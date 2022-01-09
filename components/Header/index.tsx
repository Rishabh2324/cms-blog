import React, { useEffect, useState } from "react";
import { getCategories } from "../../services";
import { CategoriesEntity } from "../../utils/interfaces";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [categories, setCategories] = useState<CategoriesEntity[]>([]);

  useEffect(() => {
    getCategories().then((results) => setCategories(results));
  }, []);

  return (
    <div className={styles.Header}>
      <h1 className={styles.Header__logo}>{`Fullstack.io`}</h1>
      <div className={styles.Header__links}>
      {categories?.map((category: any) => (
        <a  
          href={`/category/${category.slug}`}
          className={styles.Header__links_link}
          key={category.id}
        >
          {category.name}
        </a>
      ))}
      </div>
    </div>
  );
};

export default Header;
