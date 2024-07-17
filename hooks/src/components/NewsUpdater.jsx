import { useEffect, useState } from 'react';

function NewsUpdater() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Define an async function inside useEffect
        const fetchNews = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setNews(data.slice(0, 5)); // Assuming you want the first 5 news items
            } catch (error) {
                console.error('Error:', error);
            }
            setIsLoading(false);
        };

        // Call the async function
        fetchNews();

        // Set up an interval to fetch news every 10 seconds
        const interval = setInterval(fetchNews, 10000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <h1>Últimas Notícias Simuladas</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                news.map((article) => (
                    <li key={article.id}>
                        <p>{article.title}</p>
                    </li>
                ))
            )}
        </div>
    );
}

export default NewsUpdater;