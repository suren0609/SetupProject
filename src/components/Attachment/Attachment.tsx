import React from "react";

import styles from "./Attachment.module.scss";

const Attachment = () => {
  return (
    <div
      data-name="inputOrButton"
      onClick={(e) => e.stopPropagation()}
      className={styles.Attachment}
    >
      <div className={styles.title}>
        <h4>Attach</h4>
      </div>
      <div className={styles.attachFile}>
        <h6>Attach a file from your computer</h6>
        <p>You can also drag and drop files to upload them.</p>
        <button data-name="inputOrButton">Choose a file</button>
      </div>
      <div className={styles.searchOrPaste}>
        <h5>Search or paste a link</h5>
        <input
          data-name="inputOrButton"
          type="text"
          placeholder="Find recent links or paste a new link"
        />
      </div>
      <div className={styles.displayText}>
        <h5>Display text (optional)</h5>
        <input
          data-name="inputOrButton"
          type="text"
          placeholder="Text to display"
        />
      </div>
      <div className={styles.recentlyViewed}>
        <h5>RECENTLY VIEWED</h5>
        <div className={styles.viewed}>
          <div className={styles.task}>
            <i className="fa-solid fa-credit-card"></i>
            <div className={styles.taskInfo}>
              <h4>Create Lists Functionality</h4>
              <p>Tasks Viewed 4 hours ago</p>
            </div>
          </div>
          <div className={styles.task}>
            <i className="fa-solid fa-credit-card"></i>
            <div className={styles.taskInfo}>
              <h4>Create Lists Functionality</h4>
              <p>Tasks Viewed 4 hours ago</p>
            </div>
          </div>
          <div className={styles.task}>
            <i className="fa-solid fa-credit-card"></i>
            <div className={styles.taskInfo}>
              <h4>Create Lists Functionality</h4>
              <p>Tasks Viewed 4 hours ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <button data-name="inputOrButton" className={styles.cancel}>
          Cancel
        </button>
        <button data-name="inputOrButton" className={styles.insert}>
          Insert
        </button>
      </div>
    </div>
  );
};

export default Attachment;
