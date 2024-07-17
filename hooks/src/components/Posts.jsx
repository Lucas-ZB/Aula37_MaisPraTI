import { useEffect, useState } from "react";

function Posts() {
  const [news, setNews] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    
    const fetchNews = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`);
        const newsData = await response.json();
        setNews(newsData);
    };

    const timerId = setInterval(() => {
        fetchNews();
        setCount(prevCount => prevCount + 1);
    }, 3000);

    return () => {

        clearInterval(timerId);
        setNews(null);
    };
}, [count]);

    return (
        <div>
            {news ? (
                <div>
                    <h1>{news.title}</h1>
                    <p>{news.body}</p>
                </div>
            ) : (
                <p>Carregando notícias</p>
            )}
        </div>
    )
}

export default Posts;