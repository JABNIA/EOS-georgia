import "../styles/banner.scss"

function Banner() {

    const handleScroll = (scroll: number) => {
        const banner = document.querySelector('.banner');
        if(banner !== null) {
            banner.scrollLeft += scroll;
        }
    }

  return (
    <>
    <div className="banner">
      <img className="banner-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNKjmcSo2y3zYe9CQSDczG9iGOVljb6oP5Q&s" alt="" />
      <img className="banner-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNKjmcSo2y3zYe9CQSDczG9iGOVljb6oP5Q&s" alt="" />
      <img className="banner-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNKjmcSo2y3zYe9CQSDczG9iGOVljb6oP5Q&s" alt="" />
      <img className="banner-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNKjmcSo2y3zYe9CQSDczG9iGOVljb6oP5Q&s" alt="" />
    </div>
    <div className="switch-wrapper">
        <div className="switch-point"
        onClick={() => handleScroll(-1920)}>
        </div>
        <div className="switch-point"
        onClick={() => handleScroll(+1920)}>
        </div>
    </div>
    </>
  )
}

export default Banner
