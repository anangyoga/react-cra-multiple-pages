import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    };
    getArticles();
  }, []);
  return (
    <section>
      <h1>Blog</h1>
      <p>Ini tulisan-tulisanku, tolong dibaca ya!</p>
      {loading && <i>Loading articles ...</i>}
      {!loading && (
        <div>
          {articles.map((article) => (
            <article key={article.id}>
              <h2>
                <Link to={`/blog/${article.id}`}>{article.title}</Link>
              </h2>
              <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Blog;
