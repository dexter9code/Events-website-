import Header from "./MainHeader";
import Notification from "./../common/notification";
import { useContext } from "react";
import NotificationContext from "../../context/notificationContext";

const Layout = function (props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <>
      <Header />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
