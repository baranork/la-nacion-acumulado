import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { getArticles } from "./services/getArticles";
import Title from "./components/Title/Title";

const App = () => {

  const [articles, setArticles] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data.articles)

        let tags = [];
        data.articles.forEach(element => {
          element.taxonomy.tags.forEach(tag => {
            let tagExists = tags.some(obj => obj.text === tag.text)
            if (tagExists) {
              tags.find(obj => obj.text === tag.text).count += 1;
            }
            else {
              tags.push({
                text: tag.text,
                slug: tag.slug,
                count: 1
              })
            }

          });

        });
        tags.sort((a, b) => b.count - a.count);

        setTags(tags.slice(0, 10));
      });

  }, [])

  return (
    <div>
      <main>
        <div className="lay-sidebar">
          <div className="sidebar_main">
            <div className="row">
            <Title />
            </div>
            <div className="row">
              <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
                {tags.map(tag => {
                  return (
                    <Link to={`/tema/${tag.slug}`} key={tag.slug}>
                      {tag.text}
                    </Link>
                  )
                })}
              </div>
            </div>
            <Routes>
              <Route path="/tema/:slug" element={<Home articles={articles} />}></Route>
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;