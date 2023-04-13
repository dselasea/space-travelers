import renderer from 'react-test-renderer';
import fetchAllMissions from '../redux/missions/missionsApi';
import Missions from '../../src/components/missions/Missions';

test('Missions Component', () => {
  const missionsComponent = renderer.create(
    <Missions />
  );
  let tree = missionsComponent.toJSON();
  expect(tree).toMatchSnapshot();
})