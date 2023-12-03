import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/configureStore';

export const Filter = () => {
  const dispatch = useDispatch();
  const contactFilter = useSelector(state => state.filter);

  return (
    <input
      value={contactFilter}
      type="text"
      name="filter"
      onChange={evt => dispatch(filter(evt.target.value))}
    />
  );
};
