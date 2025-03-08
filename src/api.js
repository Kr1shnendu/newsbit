// const API_KEY = "a885b175578c4d5386452982023dafd3";
// const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async () => {
    const response = await fetch(`https://newsapi-eosin.vercel.app/api/news`);
    const data = await response.json();
    return data.articles;
}
