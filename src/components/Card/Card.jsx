import "./Card.css";

function Card({bodyContent, footerContent, title = null}) {
  return(
    <>
      <div className="card-container">
        <div className="card">
          {title === null ? "" : <h2 className="card-title">{title}</h2>}
          <div className="card-body">
            {bodyContent}
          </div>
          <div className="card-footer">
            {footerContent}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;