import React, { useEffect, useState, MouseEvent, ReactNode, FC } from "react";
import { Sidebar } from "components/Sidebar";
import { Header } from "../../components/Header";
import { getUser } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Layout.module.scss";
import { TaskDescription } from "components/TaskDescription";
import { EditCard } from "components/EditCard";
import {
  popupState,
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
import { CloseBoard } from "components/CloseBoard";
import { DeleteBoardPopup } from "components/DeleteBoardPopup";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const { isMenuActive } = useSelector(popupState);

  const { isAccessModifierPopupActive } = useSelector(popupState);

  const { isCloseBoardPopupActive } = useSelector(popupState);

  const { isCreateBoardActive } = useSelector(popupState);

  const { isBoardBackgroundActive } = useSelector(popupState);
  const dispatch = useDispatch();

  const { isProfilePopupActive } = useSelector(popupState);

  const { isDeleteBoardPopupActive } = useSelector(popupState);

  const { isAddActive } = useSelector(popupState);

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
      {isAccessModifierPopupActive && <AccessModifierPopup />}
      {isBoardBackgroundActive && <BoardBackground />}
      {isCloseBoardPopupActive && <CloseBoard />}
      {isDeleteBoardPopupActive && <DeleteBoardPopup />}
    </>
  );
};

export default Layout;
