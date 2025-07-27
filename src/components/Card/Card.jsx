import "./Card.css";

function Card({bodyContent, footerContent = null, title = null}) {
  return(
    <>
      <div className="card-container">
        <div className="card">
          {title === null ? "" : <h4 className="card-title">{title}</h4>}
          <div className="card-body">
            {bodyContent}
          </div>
          {
            footerContent === null ? "" : 
            <div className="card-footer">
              {footerContent}
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Card;