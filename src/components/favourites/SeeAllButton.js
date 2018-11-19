import React from "react";
import { Link } from "react-router-dom";

const SellAllButton = ({ favourites }) => {
  return (
    <div className="favourite-see-all__container">
      {favourites && (
        <Link to={'/favourites'}>
          <span className="favourite-see-all">
            See all
          </span>
        </Link>
        
      )}
    </div>
  );
};

export default SellAllButton;
