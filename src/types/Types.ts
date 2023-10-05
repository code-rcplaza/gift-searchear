export type Gif = {
  id: string;
  title: string;
  url: string;
};

export type GifsByCategory = {
  category: string;
  gifs: Gif[];
};
