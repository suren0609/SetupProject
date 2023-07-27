import React from "react";

import styles from "./Attachment.module.scss";

const Attachment = () => {
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.Attachment}>
      <div className={styles.title}>
        <h4>Attach</h4>
      </div>
      <div className={styles.attachFile}>
        <h6>Attach a file from your computer</h6>
        <p>You can also drag and drop files to upload them.</p>
        <button>Choose a file</button>
      </div>
      <div className={styles.searchOrPaste}>
        <h5>Search or paste a link</h5>
        <input
          type="text"
          placeholder="Find recent links or paste a new link"
        />
      </div>
      <div className={styles.displayText}>
        <h5>Display text (optional)</h5>
        <input type="text" placeholder="Text to display" />
      </div>
      <div className={styles.recentlyViewed}>
        <h5>RECENTLY VIEWED</h5>
      </div>
      <div className={styles.btns}>
        <button className={styles.cancel}>Cancel</button>
        <button className={styles.insert}>Insert</button>
      </div>
    </div>
  );
};

export default Attachment;
