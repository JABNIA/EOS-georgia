function SuggesedProductCard({title, description}: { title: string, description: string }) {
  return (
    <div className="suggested-card">
        <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt={title} className="suggested-card-img"/>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default SuggesedProductCard
