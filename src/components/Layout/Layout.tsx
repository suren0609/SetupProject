import React, { useEffect, useState, MouseEvent, ReactNode, FC } from "react";
import { Sidebar } from "components/Sidebar";
import { Header } from "../../components/Header";
import { getUser } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Layout.module.scss";
import { TaskDescription } from "components/TaskDescription";
import { EditCard } from "components/EditCard";
import {
  taskCardActiveSelector,
  taskDetailsActiveSelector,
} from "store/selectors";
import { AccessModifierPopup } from "components/AccessModifierPopup";
import { CreateBoardPopupRender } from "components/CreateBoardPopupRender";
import { BoardBackground } from "components/BoardBackground";
import {
  setAddActive,
  setIsMenuActive,
  setIsPopupActive,
} from "store/slices/popupSlice";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const isMenuActive = useSelector((state: any) => state.popup.isMenuActive);

  const isAccessModifierActive = useSelector(
    (state: any) => state.popup.isAccessModifierPopupActive,
  );

  const isCreateBoardActive = useSelector(
    (state: any) => state.popup.isCreateBoardActive,
  );

  const isBoardBackgroundActive = useSelector(
    (state: any) => state.popup.isBoardBackgroundActive,
  );
  const dispatch = useDispatch();

  const isProfilePopupActive = useSelector(
    (state: any) => state.popup.isProfilePopupActive,
  );

  const isAddActive = useSelector((state: any) => state.popup.isAddActive);

  const isTaskDeskActive = useSelector(taskDetailsActiveSelector);

  const isTaskCardActive = useSelector(taskCardActiveSelector);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <>
      <Header />
      <div className={styles.HomeBodyContainer}>
        <Sidebar />
        {children}
      </div>
      {isTaskDeskActive && <TaskDescription />}
      {isTaskCardActive && <EditCard />}
      {isCreateBoardActive && <CreateBoardPopupRender />}
      {isAccessModifierActive && <AccessModifierPopup />}
      {isBoardBackgroundActive && <BoardBackground />}
    </>
  );
};

export default Layout;
