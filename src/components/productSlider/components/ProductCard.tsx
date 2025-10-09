import React from 'react'

function ProductCard({imgLink}: {imgLink: string}) {
  return (
    <div className='card-wrapper'>
        <img src={imgLink} alt="product" />
        <h4>name</h4>
        <p>description</p>
        <button>Visit</button>
    </div>
  )
}

export default ProductCard
