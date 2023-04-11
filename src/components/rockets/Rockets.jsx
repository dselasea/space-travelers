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
        {console.log(rockets)}
      </div>
    </div>
  );
};

export default Rockets;
