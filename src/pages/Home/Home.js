import React, { useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import { useParams } from "react-router-dom";

const Home = (props) => {
  const [articlesList, setArticlesList] = useState()
  const {slug} = useParams();

  useEffect(() => {
    console.log(slug)
    if (props.articles) {
      const tempArticlesList = props.articles;
      let filteredArticlesList = []

      tempArticlesList.forEach(article => {
        if (article.subtype === "7" && article.taxonomy.tags.some(obj => obj.slug === slug)) {
          filteredArticlesList.push(article);
        }
      });
      setArticlesList(filteredArticlesList);
    }

  }, [props, slug])



  return (
    <div className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
      {articlesList ? articlesList.map(article => {
        return (
          <Article title={article.headlines.basic} date={article.display_date} imageUrl={article.promo_items.basic.url}></Article>
        )
      })
        :
        <></>}
    </div>
  );
};
export default Home;