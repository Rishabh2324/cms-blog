export interface IPost {
  node: {
    id: string;
    author: Author;
    excerpt: string;
    slug: string;
    title: string;
    createdAt: string;
    featuredImage: FeaturedImage;
    categories?: CategoriesEntity[] | null;
    content: Content;
  };
}

export interface Content {
  raw: { children: ContentEntity[] };
}
export interface ContentEntity {
  type: string;
  children: { text: string }[];
}

export interface Author {
  bio: string;
  id: string;
  name: string;
  photo: FeaturedImage;
}

export interface FeaturedImage {
  url: string;
}

export interface CategoriesEntity {
  name: string;
  slug: string;
}

export interface CommentInterface {
  name: string;
  email: string;
  comment: string;
}
