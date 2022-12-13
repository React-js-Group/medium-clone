import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

import styles from "./styles.module.scss";

interface NotificationsProps {
  set: (active: string) => void;
  display: string;
}

const Notifications: React.FC<NotificationsProps> = ({ set, display }) => {
  return (
    <li onClick={() => set("notifications")} className={styles.Item}>
      <IoNotificationsOutline />
      {display === "notifications" && (
        <div className={styles.Notifications}> اعلانی وجود ندارد</div>
      )}
    </li>
  );
};

export default Notifications;
