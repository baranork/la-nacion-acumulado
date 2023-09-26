import { formatDisplayDate } from "../../utils/helpers"
import "./Article.css"

const Article = (props) => {

  return (
    <div className="mod-caja-nota ohlala w-100-mobile" key={props.article._id}>
      <div className="cont-figure">
        <a className="figure">
          <picture className="content-pic picture">
            <img className="image" src={props.article.promo_items.basic.url} />
          </picture>
        </a>
      </div>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a>{props.article.headlines.basic}</a>
        </h2>
        <h4 className="com-date">{formatDisplayDate(props.article.display_date)}</h4>
      </div>
    </div>
  )
}

export default Article