import React, { useState, MouseEvent, useRef } from "react";

import styles from "./TaskDescription.module.scss";
import { Members } from "components/Members";
import { UserAvatar } from "components/UserAvatar";
import { useDispatch } from "react-redux";
import { setTaskDetailsActive } from "store/slices";

const TaskDescription = () => {
  const [isTitleInput, setTitleInput] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [isMembersPopup, setMembersPopup] = useState(false);

  const dispatch = useDispatch();

  const titleInputHandler = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setTitleInput(true);
  };

  const closeTaskDesk = () => {
    dispatch(setTaskDetailsActive(false));
  };

  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const { top, left } = divRef.current!.getBoundingClientRect();
    setMembersPopup((prev) => !prev);
    setPopupPosition({ top, left });
  };

  const onBlurMembers = (e: any) => {
    if (
      e.relatedTarget?.dataset?.name === "search-members" ||
      e.relatedTarget?.dataset?.name === "show-workspace"
    ) {
      return;
    }
    setMembersPopup(false);
  };

  return (
    <div onClick={closeTaskDesk} className={styles.TaskDescription}>
      <div
        onClick={(e: any) => e.stopPropagation()}
        className={styles.container}
      >
        <div className={styles.winHeader}>
          <div className={styles.titleAndPlace}>
            <i className="fa-regular fa-hard-drive"></i>
            <div className={styles.title}>
              {!isTitleInput ? (
                <h4 onClick={(e) => titleInputHandler(e)}>Create Tasks`s UI</h4>
              ) : (
                <input
                  type="text"
                  value="Create Tasks`s UI"
                  onBlur={() => setTitleInput(false)}
                  autoFocus={isTitleInput}
                />
              )}

              <p>in list in progress</p>
            </div>
          </div>
          <div onClick={closeTaskDesk} className={styles.close}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className={styles.winBody}>
          <div className={styles.mainSection}>
            <div className={styles.MembersNotify}>
              <div className={styles.memNotChilds}>
                <h6>Members</h6>
                <div className={styles.members}>
                  <UserAvatar />
                  <div className={styles.addMember}>+</div>
                </div>
              </div>
              <div className={styles.memNotChilds}>
                <h6>Notifications</h6>
                <div className={styles.watching}>
                  <i className="fa-regular fa-eye"></i> Watch
                </div>
              </div>
            </div>
            <div className={styles.descActivity}>
              <div className={styles.descActHeader}>
                <div className={styles.blockTitle}>
                  <h5>
                    <i className="fa-solid fa-align-left"></i>
                  </h5>
                  <h5>Description</h5>
                </div>
                <button className={styles.headerRightBtn}>Edit</button>
              </div>
              <textarea
                className={styles.descriptionInput}
                name="description"
              ></textarea>
            </div>
            <div className={styles.descActivity}>
              <div className={styles.descActHeader}>
                <div className={styles.blockTitle}>
                  <h5>
                    <i className="fa-solid fa-list-ul"></i>
                  </h5>
                  <h5>Activity</h5>
                </div>
                <button className={styles.headerRightBtn}>Hide Details</button>
              </div>
              <div className={styles.commentinput}>
                <UserAvatar />
                <textarea
                  name="comment"
                  placeholder="Write a comment..."
                ></textarea>
              </div>
            </div>
          </div>
          <div className={styles.descriptionSidebar}>
            <div className={styles.sidebarSections}>
              <h5>Add to card</h5>
              <div
                onClick={handleClick}
                className={styles.sideSettings}
                ref={divRef}
                tabIndex={0}
                onBlur={onBlurMembers}
              >
                <i className="fa-regular fa-user"></i> Members
                {isMembersPopup && <Members popupPosition={popupPosition} />}
              </div>
              <div className={styles.sideSettings}>
                <i className="fa-regular fa-square-check"></i> Checklist
              </div>
              <div className={styles.sideSettings}>
                <i className="fa-solid fa-tag"></i> Labels
              </div>
              <div className={styles.sideSettings}>
                <i className="fa-regular fa-clock"></i> Dates
              </div>
              <div className={styles.sideSettings}>
                <i className="fa-solid fa-paperclip"></i> Attachment
              </div>
              <div className={styles.sideSettings}>
                <i className="fa-solid fa-credit-card"></i> Cover
              </div>
              <div className={styles.sideSettings}>
                <i className="fa-solid fa-kaaba"></i> Custom Fields
              </div>
            </div>
            <div className={styles.sidebarSections}>
              <h5>Power-Ups</h5>
              <div className={styles.addSetting}>
                <i className="fa-solid fa-plus"></i> Add Power-Ups
              </div>
            </div>
            <div className={styles.sidebarSections}>
              <h5>Automation</h5>
              <div className={styles.addSetting}>
                <i className="fa-solid fa-plus"></i> Add button
              </div>
            </div>
            <div className={styles.sidebarSections}>
              <h5>Actions</h5>
              <div className={styles.sideSettings}>
                <i className="fa-solid fa-arrow-right"></i> Move
              </div>
              <div className={styles.sideSettings}>
                <i className="fa-solid fa-copy"></i> Copy
              </div>
              <div className={styles.sideSettings}>
                <i className="fa-regular fa-images"></i> Make template
              </div>
              <div className={styles.sideSettings}>
                <i className="fa-solid fa-box-archive"></i> Archive
              </div>
              <div className={styles.sideSettings}>
                <i className="fa-solid fa-share-nodes"></i> Share
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDescription;
