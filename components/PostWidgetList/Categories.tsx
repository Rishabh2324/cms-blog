import React, { useEffect, useState } from 'react'
import { getCategories } from '../../services';
import { CategoriesEntity } from '../../utils/interfaces';

import styles from './PostWidgetList.module.scss';

const Categories: React.FC = () => {

  const [categories, setCategories] = useState<CategoriesEntity[]>([]);

  useEffect(() => {
    getCategories().then((results) =>
      setCategories(results)
    );
  }, []);

  return <div className={styles.PostWidgetList}>
    <h2 className={styles.PostWidgetList__heading}>Categories</h2>
    <div className={styles.PostWidgetList__separator} />
    {categories?.map((category: any) =>
      <a href={`/category/${category.slug}`} className={styles.PostWidgetList__categoryItem} key={category.id}>
        {category.name}
      </a>)}
  </div>
}

export default Categories;
