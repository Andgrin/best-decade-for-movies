export type Actor = {
  name: string;
  "@type": string;
  url: string;
};

export type AggregateRating = {
  bestRating: string;
  ratingValue: number;
  ratingCount: number;
  "@type": string;
  worstRating: string;
};

export type Creator = {
  name?: string;
  "@type": string;
  url: string;
};

export type Director = {
  name?: string;
  "@type": string;
  url: string;
};

export type Genre = "Action"
  | "Adventure"
  | "Animation"
  | "Biography"
  | "Comedy"
  | "Crime"
  | "Documentary"
  | "Drama"
  | "Family"
  | "Fantasy"
  | "History"
  | "Horror"
  | "Music"
  | "Mystery"
  | "Romance"
  | "Sci-Fi"
  | "Sport"
  | "Thriller"
  | "War";

export type Thumbnail = {
  contentUrl: string;
  "@type": string;
};

export type Trailer = {
  description: string;
  embedUrl: string;
  name: string;
  thumbnail: Thumbnail;
  thumbnailUrl: string;
  "@type": string;
  uploadDate: string;
};

export type Movie = {
  actor: Actor[];
  aggregateRating: AggregateRating;
  contentRating: string;
  "@context": string;
  creator: Creator[];
  datePublished: string;
  description: string;
  director: Director[];
  duration: string;
  genre: Genre[];
  image: string;
  name: string;
  trailer: Trailer;
  "@type": string;
  url: string;
};