import React from 'react'

export default function Carousel() {
  return (
    <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
      <div className="carousel-inner" id="carousel">
        <div className='carousel-caption' style={{ zIndex: "10" }}>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
          </form>
        </div>
        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" className="d-block w-100" style={{ filter: "brightness(45%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" className="d-block w-100" style={{ filter: "brightness(45%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1017" className="d-block w-100" style={{ filter: "brightness(45%)" }} alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div></div>
  )
}
