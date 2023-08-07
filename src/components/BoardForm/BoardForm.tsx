import React, { useState, MouseEvent } from "react";

import styles from "./BoardForm.module.scss";
import { CreateBoard } from "components/CreateBoard";
import { bg6, bg7, bg8, bg9 } from "imagesUrls";
import classNames from "classnames";
import { useForm } from "react-hook-form";

const BoardForm = () => {
  const [isCreateActive, setCreateActive] = useState(false);
  const [currentBg, setCurrentBg] = useState<string>("BoardForm_bg6__XIQpg");

  const handleBack = () => {
    setCreateActive(true);
  };

  const changeBackground = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setCurrentBg(e.currentTarget.className);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      boardTitle: "",
    },
  });

  return (
    <>
      {isCreateActive ? (
        <CreateBoard />
      ) : (
        <div onClick={(e) => e.stopPropagation()} className={styles.BoardForm}>
          <div className={styles.title}>
            <i onClick={handleBack} className="fa-solid fa-chevron-left"></i>
            <h4>Create board</h4>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className={`${styles.bigBg} ${currentBg}`}>
            <img src="https://trello.com/assets/14cda5dc635d1f13bc48.svg" />
          </div>
          <div className={styles.backgrounds}>
            <h5>Background</h5>
            <div className={styles.imgs}>
              <div onClick={changeBackground} className={styles.bg6}>
                {currentBg.includes("bg6") && (
                  <i className="fa-solid fa-check"></i>
                )}
              </div>
              <div onClick={changeBackground} className={styles.bg7}>
                {currentBg.includes("bg7") && (
                  <i className="fa-solid fa-check"></i>
                )}
              </div>
              <div onClick={changeBackground} className={styles.bg8}>
                {currentBg.includes("bg8") && (
                  <i className="fa-solid fa-check"></i>
                )}
              </div>
              <div onClick={changeBackground} className={styles.bg9}>
                {currentBg.includes("bg9") && (
                  <i className="fa-solid fa-check"></i>
                )}
              </div>
            </div>
            <div className={styles.colors}>
              <button onClick={changeBackground} className={styles.bg1}>
                {currentBg.includes("bg1") && (
                  <i className="fa-solid fa-check"></i>
                )}
              </button>
              <button onClick={changeBackground} className={styles.bg2}>
                {currentBg.includes("bg2") && (
                  <i className="fa-solid fa-check"></i>
                )}
              </button>
              <button onClick={changeBackground} className={styles.bg3}>
                {currentBg.includes("bg3") && (
                  <i className="fa-solid fa-check"></i>
                )}
              </button>
              <button onClick={changeBackground} className={styles.bg4}>
                {currentBg.includes("bg4") && (
                  <i className="fa-solid fa-check"></i>
                )}
              </button>
              <button onClick={changeBackground} className={styles.bg5}>
                {currentBg.includes("bg5") && (
                  <i className="fa-solid fa-check"></i>
                )}
              </button>
              <button className={styles.more}>
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
          <form>
            <label htmlFor="boardTitle">Board title</label>
            <input
              {...register("boardTitle", { required: true, maxLength: 30 })}
              type="text"
              name="boardTitle"
            />
            <p>
              <i className="fa-solid fa-hand"></i> Board title is required
            </p>
            <div className={styles.select}>
              <span>Workspace</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <button type="submit" className={styles.createBtn}>
              Create
            </button>
          </form>

          <button className={styles.startBtn}>Start with a template</button>
          <div className={styles.footerText}>
            By using images from Unsplash, you agree to their{" "}
            <a href="">license</a> and <a href="">Terms of Service</a>
          </div>
        </div>
      )}
    </>
  );
};

export default BoardForm;
