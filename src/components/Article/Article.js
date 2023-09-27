import { formatDisplayDate } from "../../utils/helpers"
import "./Article.css"

const Article = (props) => {

  return (
    <div className="mod-caja-nota ohlala w-100-mobile">
      <div className="cont-figure">
        <a className="figure">
          <picture className="content-pic picture">
            <img className="image" src={props.imageUrl} />
          </picture>
        </a>
      </div>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a>{props.title}</a>
        </h2>
        <h4 className="com-date">{formatDisplayDate(props.date)}</h4>
      </div>
    </div>
  )
}

export default Article