import { Sidebar } from "components/Sidebar";
import Cookies from "js-cookie";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "store/actions";
import { setToken } from "store/slices/userSlice";
import { Header } from "../../components/Header";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  const { token } = useSelector((state: any) => state.user);
  const cookieToken = Cookies.get("token");

  useEffect(() => {
    if (cookieToken) {
      dispatch(setToken(cookieToken));
    }
  }, []);

  useEffect(() => {
    if (token !== "") {
      dispatch(getUser());
    }
  }, [token]);

  return (
    <div className={styles.container}>
      {token?.length ? (
        <div className={styles.container}>
          <Header />
          <div className={styles.HomeBodyContainer}>
            <Sidebar />
            {children}
          </div>
        </div>
      ) : (
        <div className={styles.container}>{children}</div>
      )}
    </div>
  );
};

export default Layout;
