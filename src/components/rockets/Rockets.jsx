import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length) return;
    dispatch(fetchRockets());
  }, [dispatch, rockets.length]);

  return (
    <div className="card mb-3 mt-4">
      <div className="row g-0">
        { rockets.map((rocket) => (
          <>
          <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="Rocket" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Falcon 1</h5>
            <p className="card-text">The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX durint 2006 - 2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the </p>
            <button type="button" className="btn btn-primary">Reserve Rocket</button>
          </div>
        </div>
          </>
        )) }
      </div>
        {console.log(rockets)}
    </div>
  );
};

export default Rockets;
