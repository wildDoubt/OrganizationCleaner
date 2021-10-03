import { useDispatch, useSelector } from 'react-redux';
import { Button, Result } from 'antd';
import { homeAction, SelectOrganizationAction } from '../reducers/state';
import { SUCCESS, ERROR } from '../utils/strings.json';

const Confirm = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((rootState) => rootState.state);
  const onClick = () => {
    dispatch(homeAction);
  };

  const onClickBackButton = () => {
    dispatch(SelectOrganizationAction);
  };

  return (
    <>
      {result === SUCCESS && (
      <Result
        status="success"
        title="Successfully deleted repositories. "
        extra={[
          <Button
            type="primary"
            key="back_button"
            onClick={onClickBackButton}
          >
            Back
          </Button>,
          <Button
            key="home_button"
            onClick={onClick}
          >
            Home
          </Button>,
        ]}
      />
      )}
      {result === ERROR && (
      <Result
        status="warning"
        title="There are some problems with your operation."
        extra={(
          <Button
            type="primary"
            onClick={onClickBackButton}
          >
            Back
          </Button>
)}
      />
      )}

    </>
  );
};

export default Confirm;
