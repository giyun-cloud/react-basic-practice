import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "8781f0b76bf2d697908b701ab8439073",
    language: "ko",
  },
});
api.get("movie/popular");

export const moivesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
  search: (str) =>
    api.get("search/moive", { params: { query: encodeURIComponent(str) } }),
};
export const tvApi = {
  popular: () => api.get("tv/popular"),
  topRated: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/airing_today"),
  tvDetail: (id) =>
    api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
  search: (str) =>
    api.get("search/tv", { params: { query: encodeURIComponent(str) } }),
};
