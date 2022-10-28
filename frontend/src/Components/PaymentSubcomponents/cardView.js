import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const card = ({
                  title,
                  btnName,
                  imgLoc,
                  id,
                  path,
                  price

              }) => {
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{`Price : ${price}`}</p>
                <Link to= {`${path}/${id}`}  className="btn btn-danger">{btnName}</Link>
            </div>
        </div>
    )
}

card.propTypes ={
    id: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string.isRequired,
    btnName: PropTypes.string.isRequired,
}

export default card;