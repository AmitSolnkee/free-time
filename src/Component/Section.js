import React from "react";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const navigate = useNavigate();
  const NavigateToEnvelope = () => {
    navigate("/envelope");
  };
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="image-section col-md-5 p-4">
          <img
            className="img-shadow img-fluid"
            src={require("../Assets/images/img-us-8.jpg")}
            width={"100%"}
          />
        </div>
        <div className="description-section col-md-7 p-4">
          <h2>The Love We Share</h2>
          <p>
            "When I'm with you, I feel something very special. Your smile makes
            me happy, and when you touch me, I feel a wonderful warmth inside.
            Every moment we spend together is like a favorite memory I want to
            keep forever. I love you more with each passing day, and you mean
            the world to me. You're not just my love; you're my best friend and
            my happiness. I'm excited about all the adventures and happiness
            we'll share in the future. You complete me, and I'm looking forward
            to a lifetime of love with you."
          </p>
          <button className="px-5 py-2 rounded-pill fw-bold text-white" onClick={()=> navigate('/gallery')}>
            View
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="envelope mt-2 mt-md-5 mb-5" onClick={NavigateToEnvelope}>
        <img className="img-fluid" src={require("../Assets/images/Neha.jpg")} />
      </div>
    </div>
  );
};

export default Section;
