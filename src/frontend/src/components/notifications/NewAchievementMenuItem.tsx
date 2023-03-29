import { Button, useTheme } from '@mui/material';
import { FC, useCallback, useMemo } from 'react';
import { NotificationDTO } from '../../tools/api.autogenerated';
import { myApi } from '../../tools/apiHandler';
import { NotificationMenuItem } from './NotificationMenuItem';

type NewAchievementMenuItemProps = {
  notif: NotificationDTO;
  onRead?: (id: number) => void;
};

const NewAchievementMenuItem: FC<NewAchievementMenuItemProps> = (props) => {
  const achievementName = useMemo(() => {
    const type = (props.notif.content as any).achievement;
    if (type === 'achievement1') return 'Welcome !';
    else if (type === 'achievement2') return 'Not Bad !';
    else if (type === 'achievement3') return 'Expert';
    else if (type === 'achievement4') return 'Champion';
  }, [props.notif]);

  const theTheme = useTheme();

  return (
    <NotificationMenuItem
      date={props.notif.date}
      id={props.notif.id}
      title={'New Achievement Unlocked'}
      isRead={props.notif.isRead}
    >
      <div className="notif-body"
      style={{ backgroundColor: theTheme.palette.background.paper }}    
    >
        You unlocked the achievement: <strong>{achievementName}</strong>
      </div>
    </NotificationMenuItem>
  );
};

export default NewAchievementMenuItem;