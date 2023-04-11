import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reserveRocket } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length) return;
    dispatch(fetchRockets());
  }, [dispatch, rockets.length]);

  return (
    <>
      { rockets.map((rocket) => (
        <div className="card mb-3 mt-4" key={rocket.rocketId}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={rocket.rocketImage} className="img-fluid rounded-start" alt="Rocket" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{rocket.rocketName}</h5>
                <p className="card-text">{rocket.rocketDescription}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => dispatch(reserveRocket(rocket.rocketId))}
                >
                  Reserve Rocket
                </button>
              </div>
            </div>
          </div>
        </div>
      )) }
    </>
  );
};

export default Rockets;
