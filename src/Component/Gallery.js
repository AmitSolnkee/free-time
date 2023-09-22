import React from "react";

const Gallery = () => {
  const imageGallery = [
    {
      id: 1,
      title: "After Party",
      src: "img-us-2.jpg",
    },
    {
      id: 2,
      title: "After Party",
      src: "img-us-2.jpg",
    },
    {
      id: 3,
      title: "After Party",
      src: "img-us-2.jpg",
    },
    {
      id: 4,
      title: "After Party",
      src: "img-us-2.jpg",
    },
    {
      id: 5,
      title: "After Party",
      src: "img-us-2.jpg",
    },
    {
      id: 6,
      title: "After Party",
      src: "img-us-2.jpg",
    },
    {
      id: 7,
      title: "After Party",
      src: "img-us-2.jpg",
    },
    {
      id: 8,
      title: "After Party",
      src: "img-us-2.jpg",
    },
  ];
  return (
    <div className="container  p-2 p-md-4">
      <div className="row">
        {imageGallery.map((card, id) => {
          return (
            <div key={id} className="col-md-3">
              <div className="card p-3 pb-0 mt-2  bg-white">
                <img
                  className="img-fluid"
                  src={require(`../Assets/images/${card.src}`)}
                />
                <p className=" fw-bold fs-6 mt-2 text-center ">
                  Title: <span className="fs-6 fw-light ">{card.title}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
