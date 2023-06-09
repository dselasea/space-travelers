import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length) return;
    dispatch(fetchMissions());
  }, [dispatch, missions.length]);

  return (
    <div className="p-4 table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="fw-bold">{mission.mission_name}</td>
                <td className="w-20">{mission.description}</td>
                <td className="p-4 align-middle">
                  {
                    !mission.reserved && (
                      <span className="badge badge-secondary bg-secondary px-3 py-2 fw-normal fs-6">
                        Not a member
                      </span>
                    )
                  }
                  {
                    mission.reserved && (
                      <span className="badge badge-info bg-info px-3 py-2 fw-normal fs-6">
                        Active member
                      </span>
                    )
                  }
                </td>
                <td className="p-4 align-middle">
                  {
                    !mission.reserved && (
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => dispatch(joinMission(mission.mission_id))}
                      >
                        Join&nbsp;mission
                      </button>
                    )
                  }
                  {
                    mission.reserved && (
                      <button
                        className="btn btn-outline-danger"
                        type="button"
                        onClick={() => dispatch(leaveMission(mission.mission_id))}
                      >
                        Leave&nbsp;mission
                      </button>
                    )
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
