export default interface Thumbnail {
  trending: Trending;
  regular: Regular;
}

interface Trending {
  small: string;
  large: string;
}

interface Regular {
  small: string;
  medium: string;
  large: string;
}
