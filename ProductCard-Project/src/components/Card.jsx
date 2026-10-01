function Card({ title, children }) {
  return (
    <div className="custom-card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

export default Card