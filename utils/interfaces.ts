export interface IPost {
 node:{ id:string;
  author: Author;
  excerpt: string;
  slug: string;
  title: string;
  createdAt: string;
  featuredImage: FeaturedImage;
  categories?: (CategoriesEntity)[] | null;}
}

export interface Author {
  bio: string;
  id: string;
  name: string;
  photo:FeaturedImage
}

export interface FeaturedImage {
  url: string;
}

export interface CategoriesEntity {
  name: string;
  slug: string;
}

export interface CommentInterface {
  name:string;
  email:string;
  comment:string;
}
  