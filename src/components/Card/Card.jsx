import "./Card.css";

function Card({title, children}) {
  return(
    <>
      <div className="card-container">
        <div className="card">
          <h2>{title}</h2>
            <div className="card-body">
              {children}
            </div>
        </div>
      </div>
    </>
  )
}

export default Card;