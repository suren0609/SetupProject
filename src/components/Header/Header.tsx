import LogoSvg from "components/LogoSvg/LogoSvg";
import React, { FC, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { logoutUser } from "services/logout";
import { popupState, userSelector } from "store/selectors";
import {
  setCreateBoardActive,
  setCreateBoardPopupPos,
  setIsMenuActive,
  setIsPopupActive,
} from "store/slices/popupSlice";
import { setToken } from "store/slices/userSlice";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const dispatch = useDispatch();

  const { isMenuActive } = useSelector(popupState);
  const { isProfilePopupActive } = useSelector(popupState);

  const { isCreateBoardActive } = useSelector(popupState);

  const isLoading = useSelector((state: any) => state.isLoading);

  const btnRef = useRef<HTMLButtonElement>(null);

  const changeMenuState = (leftOrRight: string) => {
    setIsPopupActive(false);
    leftOrRight === "left"
      ? dispatch(
          setIsMenuActive({
            rightMenu: false,
            leftMenu: !isMenuActive.leftMenu,
          }),
        )
      : dispatch(
          setIsMenuActive({
            leftMenu: false,
            rightMenu: !isMenuActive.rightMenu,
          }),
        );
  };

  const ChangeProfilePopupState = () => {
    dispatch(setIsPopupActive(!isProfilePopupActive));
    dispatch(setIsMenuActive({ rightMenu: false, leftMenu: false }));
  };

  const createBoardPopupHandler = () => {
    const { top, left } = btnRef.current!.getBoundingClientRect();
    dispatch(setCreateBoardPopupPos({ top: top, left: left }));
    dispatch(setCreateBoardActive(!isCreateBoardActive));
  };

  const menuActiveHandler = (
    e: React.MouseEvent<HTMLElement>,
    side: string,
  ) => {
    e.stopPropagation();
    changeMenuState(side);
  };

  const profilePopupHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    ChangeProfilePopupState();
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();

    dispatch(setToken(null));
    ChangeProfilePopupState();
    navigate("login");
  };

  const user = useSelector(userSelector);

  return (
    <div className={styles.Header}>
      <div className={styles.headerLeft}>
        <i className={`${styles.gridMenu} bx bxs-grid`}></i>
        <div className={styles.logo}>
          <LogoSvg />
        </div>
        <div className={styles.controls}>
          <ul>
            <li>
              Workspases{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </li>
            <li>
              Recent{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </li>
            <li>
              Starred{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </li>
            <li>
              Templates{" "}
              <span>
                <i className="bx bx-chevron-down"></i>
              </span>
            </li>
          </ul>
          <button
            onClick={createBoardPopupHandler}
            data-name="inputOrButton"
            ref={btnRef}
          >
            Create
          </button>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.controls2}>
          <div className={styles.search}>
            <input type="search" placeholder="Search" />
          </div>

          <i className="bx bx-bell"></i>
          <i className="fa-regular fa-circle-question"></i>
          <i className="fa-solid fa-circle-half-stroke"></i>
          <div
            className={styles.profile}
            onClick={(e) => profilePopupHandler(e)}
          >
            <div className={styles.userAva}>
              {!isLoading ? (
                <ClipLoader color="#1c2422" loading={!isLoading} />
              ) : (
                `${user.firstname[0]}${user.lastname[0]}`
              )}
            </div>
            <div
              className={styles.profilePopup}
              style={{
                display: isProfilePopupActive ? "flex" : "none",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.profileData}>
                <div className={styles.userAvatar}>
                  {`${user.firstname[0]}${user.lastname[0]}`}
                </div>
                <div className={styles.userNameEmail}>
                  <p>{user.firstname + " " + user.lastname}</p>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className={styles.popupBlocks}>
                <p>Switch accaunts</p>
                <p>Manage accaunt</p>
              </div>
              <div className={styles.popupBlocks}>
                <h6>TRELLO</h6>
                <p>Profile and visibility</p>
                <p>Activty</p>
                <p>Cards</p>
                <p>Settings</p>
              </div>
              <div className={styles.popupBlocks}>
                <p>Help</p>
                <p>Shortcuts</p>
              </div>

              <button onClick={handleLogout}>LogOut</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tasks}>
        <div className={styles.burger1}>
          <i
            className="fa-solid fa-bars"
            onClick={(e) => menuActiveHandler(e, "left")}
          ></i>
          <div
            className={styles.controlsResp}
            style={{ display: isMenuActive.leftMenu ? "block" : "none" }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ul>
              <li>
                Workspases{" "}
                <span>
                  <i className="bx bx-chevron-down"></i>
                </span>
              </li>
              <li>
                Recent{" "}
                <span>
                  <i className="bx bx-chevron-down"></i>
                </span>
              </li>
              <li>
                Starred{" "}
                <span>
                  <i className="bx bx-chevron-down"></i>
                </span>
              </li>
              <li>
                Templates{" "}
                <span>
                  <i className="bx bx-chevron-down"></i>
                </span>
              </li>
            </ul>
            <button>Create</button>
          </div>
        </div>
        <div className={styles.tasksAndCount}>
          <h4>Tasks</h4>
          <p>48</p>
        </div>
      </div>
      <div className={styles.logoResp}>
        <LogoSvg />
      </div>
      <div className={styles.burgerAndSearch}>
        <div className={styles.searchResp}>
          <input type="search" />
        </div>
        <div className={styles.notifi}>
          <i className="fa-regular fa-bell"></i>
        </div>
        <div className={styles.profile} onClick={(e) => profilePopupHandler(e)}>
          <div className={styles.userAva}>
            {user.firstname[0] + "" + user.lastname[0]}
          </div>
          <div
            className={styles.profilePopup}
            style={{
              display: isProfilePopupActive ? "flex" : "none",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.profileData}>
              <div className={styles.userAvatar}>
                {user.firstname[0] + "" + user.lastname[0]}
              </div>
              <div className={styles.userNameEmail}>
                <p>{user.firstname + " " + user.lastname}</p>
                <p>{user.email}</p>
              </div>
            </div>
            <div className={styles.popupBlocks}>
              <p>Switch accaunts</p>
              <p>Manage accaunt</p>
            </div>
            <div className={styles.popupBlocks}>
              <h6>TRELLO</h6>
              <p>Profile and visibility</p>
              <p>Activty</p>
              <p>Cards</p>
              <p>Settings</p>
            </div>
            <div className={styles.popupBlocks}>
              <p>Help</p>
              <p>Shortcuts</p>
            </div>

            <button onClick={handleLogout}>LogOut</button>
          </div>
        </div>

        <div className={styles.burgerResp}>
          <i
            className="fa-solid fa-ellipsis"
            onClick={(e) => menuActiveHandler(e, "right")}
          ></i>
          <div
            className={styles.controlsResp2}
            style={{ display: isMenuActive.rightMenu ? "block" : "none" }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={styles.workspaceVisible}>
              <i className="fa-solid fa-user-group"></i>
              <p>Workspace visible</p>
            </div>
            <div className={styles.rightControls}>
              <div className={styles.sections}>
                <i className="fa-solid fa-rocket"></i>
                <p>Power-Ups</p>
              </div>
              <div className={styles.sections}>
                <i className="fa-solid fa-bolt-lightning"></i>
                <p>Automation</p>
              </div>
              <div className={styles.sections}>
                <i className="fa-solid fa-filter"></i>
                <p>Filter</p>
              </div>
            </div>

            <div className={styles.boardAndViews}>
              <button>
                <i className="fa-solid fa-chart-simple fa-rotate-180"></i>{" "}
                <span>Board</span>
              </button>
              <button>
                <i className="fa-solid fa-user-plus"></i> <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
