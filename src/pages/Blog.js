import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog";
    const getArticles = async () => {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    };
    getArticles();
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Blog</h1>
      <p className="section-description">Ini tulisan-tulisanku, tolong dibaca ya!</p>
      {loading && <i>Loading articles ...</i>}
      {!loading && (
        <div className="articles">
          {articles.map((article) => (
            <article key={article.id} className="article">
              <h2 className="article-title">
                <Link to={`/blog/${article.id}`}>{article.title}</Link>
              </h2>
              <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Blog;
