import axios from 'axios'

const getNews = () => {
  const options = {
    method: 'GET',
    // url: process.env.REACT_APP_NEWS_API,
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: { q: 'Elon Musk', lang: 'en' },
    headers: {
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
      // 'X-RapidAPI-Key': process.env.REACT_APP_NEWS_API_KEY,
      'X-RapidAPI-Key': 'd3d31e2bd9mshea393665808dfbap1dc1d6jsn9990c03d0378',
    },
  }
  return axios.request(options)
}

export default getNews