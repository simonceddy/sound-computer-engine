import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotification } from './notificationsSlice';

function Notification() {
  const { current } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();
  useEffect(() => {
    if (current) {
      console.log('notified');
      setTimeout(() => {
        dispatch(clearNotification());
        console.log('notification cleared');
      }, 4000);
    }
  }, [current]);
  return (
    <div className="overflow-hidden overflow-ellipsis flex flex-row justify-start items-center">
      {current && (
        <span>{current}</span>
      )}
    </div>
  );
}

export default Notification;
