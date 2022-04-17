import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const getArticle = async () => {
      const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

      if (!request.ok) {
        return setNotFound(true);
      }

      const response = await request.json();

      setArticle(response);
      setLoading(false);
      console.log(response);
    };
    getArticle();
  }, [params]);

  if (notFound) {
    return <h1>404 Not Found</h1>;
  }
  return (
    <section>
      {loading ? (
        <i>Loading article ...</i>
      ) : (
        <article>
          <h1>{article.title}</h1>
          <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
          <img src={article.imageUrl} alt="" />
          <p>{article.summary}</p>
          <p>
            <i>source:</i>{" "}
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.newsSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}

export default BlogDetails;
