const BASE_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "s1E3yoqRz4sRP4n0nlmQ3qHusqdx6IEa";

export const getGifs = async (category: string, limit: number) => {
  const url: string = `${BASE_URL}/search?api_key=${API_KEY}&q=${category}&limit=${limit}`;

  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((gif: any) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.fixed_height.url,
  }));

  return gifs;
};
