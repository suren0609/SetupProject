import React, { useState, MouseEvent, useRef } from "react";

import styles from "./TaskDescription.module.scss";
import { Members } from "components/Members";
import { UserAvatar } from "components/UserAvatar";
import { useDispatch, useSelector } from "react-redux";
import { setTaskDetailsActive, setTaskTemplate } from "store/slices";
import { Labels } from "components/Labels";
import { Checklist } from "components/Checklist";
import { Dates } from "components/Dates";
import { Attachment } from "components/Attachment";
import { Cover } from "components/Cover";
import { Move } from "components/Move";
import { Copy } from "components/Copy";
import { CommentUI } from "components/CommentUI";
import { isTaskTemplateSelector } from "store/selectors";
import { Share } from "components/Share";
import { DeleteCard } from "components/DeleteCard";

const TaskDescription = () => {
  const [isTitleInput, setTitleInput] = useState(false);
  const [isMembersPopup, setMembersPopup] = useState(false);
  const [isLabelsActive, setLabelsActive] = useState(false);
  const [isChecklistActive, setChecklistActive] = useState(false);
  const [isDatesActive, setDatesActive] = useState(false);
  const [isAttachActive, setAttachActive] = useState(false);
  const [isCoverActive, setCoverActive] = useState(false);
  const [isMoveActive, setMoveActive] = useState(false);
  const [isCopyActive, setCopyActive] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const [isTaskHidden, setTaskHidden] = useState(true);
  const [isShareActive, setShareActive] = useState(false);
  const [isDeleteActive, setDeleteActive] = useState(false);

  const dispatch = useDispatch();

  const makeTemplateActive = useSelector(isTaskTemplateSelector);

  const titleInputHandler = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setTitleInput(true);
  };

  const handleDeleteActive = () => {
    setDeleteActive((prev) => !prev);
  };

  const closeDeleteCard = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    setDeleteActive(false);
  };

  const closeTaskDesk = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    dispatch(setTaskDetailsActive(false));
  };

  const handleShare = (event: any) => {
    event.stopPropagation();

    setShareActive((prev) => !prev);
  };

  const closeShare = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }

    setShareActive(false);
  };
  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setMembersPopup((prev) => !prev);
  };

  const handleCopy = () => {
    setCopyActive((prev) => !prev);
  };

  const closeCopy = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    setCopyActive(false);
  };

  const handleMove = () => {
    setMoveActive((prev) => !prev);
  };

  const closeMove = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    setMoveActive(false);
  };

  const handleDates = () => {
    setDatesActive((prev) => !prev);
  };

  const closeDates = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    setDatesActive(false);
  };

  const handleCover = () => {
    setCoverActive((prev) => !prev);
  };

  const closeCover = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    setCoverActive(false);
  };

  const handleAttach = () => {
    setAttachActive((prev) => !prev);
  };

  const closeAttach = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    setAttachActive(false);
  };

  const handleLabelsActive = () => {
    setLabelsActive((prev) => !prev);
  };

  const handleChecklist = () => {
    setChecklistActive((prev) => !prev);
  };

  const closeLabels = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    setLabelsActive(false);
  };

  const closeChecklist = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    setChecklistActive(false);
  };

  const onBlurMembers = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    setMembersPopup(false);
  };

  const handleMakeTemplate = () => {
    dispatch(setTaskTemplate(!makeTemplateActive));
  };

  const handleArchive = () => {
    setIsArchived((prev) => !prev);
  };

  const handleTaskHide = () => {
    setTaskHidden((prev) => !prev);
  };

  return (
    <div onClick={closeTaskDesk} className={styles.TaskDescription}>
      <div
        onClick={(e: any) => e.stopPropagation()}
        className={styles.container}
      >
        {makeTemplateActive ? (
          <div className={styles.thisIsATemplate}>
            <div className={styles.thisIsLeft}>
              <i className="fa-solid fa-tachograph-digital"></i>
              <h4>This is a Template card.</h4>
            </div>
            <div className={styles.thisIsRight}>
              <button>
                <i className="fa-regular fa-square-plus"></i> Create card from
                template
              </button>
              <div onClick={closeTaskDesk} className={styles.close}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>
        ) : (
          isArchived && (
            <div className={styles.thisCardArchived}>
              <div className={styles.thisIsLeft}>
                <i className="fa-solid fa-box-archive"></i>
                <h4>This card is archived.</h4>
              </div>

              <div onClick={closeTaskDesk} className={styles.close}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          )
        )}

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
          {!makeTemplateActive && !isArchived && (
            <div onClick={closeTaskDesk} className={styles.close}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          )}
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
              <div className={styles.comments}>
                <CommentUI />
              </div>
            </div>
          </div>
          <div className={styles.descriptionSidebar}>
            <div className={styles.sidebarSections}>
              <h5>Add to card</h5>
              <div
                onClick={handleClick}
                className={styles.sideSettings}
                tabIndex={0}
                onBlur={onBlurMembers}
              >
                <i className="fa-regular fa-user"></i> Members
                {isMembersPopup && <Members />}
              </div>
              <div
                onClick={handleChecklist}
                onBlur={closeChecklist}
                tabIndex={0}
                className={styles.sideSettings}
              >
                <i className="fa-regular fa-square-check"></i> Checklist
                {isChecklistActive && <Checklist />}
              </div>
              <div
                onClick={handleLabelsActive}
                onBlur={closeLabels}
                tabIndex={0}
                className={styles.sideSettings}
              >
                <i className="fa-solid fa-tag"></i> Labels
                {isLabelsActive && <Labels />}
              </div>
              <div
                onClick={handleDates}
                onBlur={closeDates}
                tabIndex={0}
                className={styles.sideSettings}
              >
                <i className="fa-regular fa-clock"></i> Dates
                {isDatesActive && <Dates />}
              </div>
              <div
                onClick={handleAttach}
                onBlur={closeAttach}
                tabIndex={0}
                className={styles.sideSettings}
              >
                <i className="fa-solid fa-paperclip"></i> Attachment
                {isAttachActive && <Attachment />}
              </div>
              <div
                onClick={handleCover}
                onBlur={closeCover}
                tabIndex={0}
                className={styles.sideSettings}
              >
                <i className="fa-solid fa-credit-card"></i> Cover
                {isCoverActive && <Cover />}
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
              <div
                onClick={handleMove}
                onBlur={closeMove}
                tabIndex={0}
                className={styles.sideSettings}
              >
                <i className="fa-solid fa-arrow-right"></i> Move
                {isMoveActive && <Move />}
              </div>
              <div
                onClick={handleCopy}
                onBlur={closeCopy}
                tabIndex={0}
                className={styles.sideSettings}
              >
                <i className="fa-solid fa-copy"></i> Copy
                {isCopyActive && <Copy />}
              </div>
              {makeTemplateActive ? (
                <div
                  onClick={handleMakeTemplate}
                  className={styles.sideSettings}
                >
                  <i className="fa-regular fa-images"></i> Template
                  <div className={styles.done}>
                    <i className="fa-solid fa-square-check"></i>
                  </div>
                </div>
              ) : (
                <div
                  onClick={handleMakeTemplate}
                  className={styles.sideSettings}
                >
                  <i className="fa-regular fa-images"></i> Make template
                </div>
              )}

              {makeTemplateActive ? (
                <>
                  {isTaskHidden ? (
                    <div
                      onClick={handleTaskHide}
                      className={styles.sideSettings}
                    >
                      <i className="fa-solid fa-arrow-rotate-left"></i> Show in
                      list
                    </div>
                  ) : (
                    <div
                      onClick={handleTaskHide}
                      className={styles.sideSettings}
                    >
                      <i className="fa-solid fa-box-archive"></i> Hide from list
                    </div>
                  )}

                  <div
                    onClick={handleDeleteActive}
                    id={styles.deleteBtn}
                    className={styles.sideSettings}
                    onBlur={closeDeleteCard}
                    tabIndex={0}
                  >
                    <i className="fa-solid fa-minus"></i> Delete
                    {isDeleteActive && (
                      <DeleteCard closeDeleteCard={closeDeleteCard} />
                    )}
                  </div>
                </>
              ) : (
                <>
                  {isArchived ? (
                    <>
                      <div
                        onClick={handleArchive}
                        className={styles.sideSettings}
                      >
                        <i className="fa-solid fa-arrow-rotate-left"></i> Send
                        to board
                      </div>
                      <div
                        onClick={handleDeleteActive}
                        id={styles.deleteBtn}
                        className={styles.sideSettings}
                        onBlur={closeDeleteCard}
                        tabIndex={0}
                      >
                        <i className="fa-solid fa-minus"></i> Delete
                        {isDeleteActive && (
                          <DeleteCard closeDeleteCard={closeDeleteCard} />
                        )}
                      </div>
                    </>
                  ) : (
                    <div
                      onClick={handleArchive}
                      className={styles.sideSettings}
                    >
                      <i className="fa-solid fa-box-archive"></i> Archive
                    </div>
                  )}
                </>
              )}

              <div
                onClick={handleShare}
                onBlur={closeShare}
                tabIndex={0}
                data-name="inputOrButton"
                className={styles.sideSettings}
              >
                <i className="fa-solid fa-share-nodes"></i> Share
                {isShareActive && <Share closeShare={closeShare} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDescription;
