import "./Card.css";

function Card({children, title = null}) {
  return(
    <>
      <div className="card-container">
        <div className="card">
          {title === null ? "" : <h2>{title}</h2>}
          <div className="card-body">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;