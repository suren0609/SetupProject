import React, { FC } from "react";

import styles from "./Share.module.scss";

interface IProp {
  closeShare: (e: any) => void;
}

const Share: FC<IProp> = ({ closeShare }) => {
  return (
    <div
      data-name="inputOrButton"
      onClick={(e) => e.stopPropagation()}
      className={styles.Share}
    >
      <div className={styles.title}>
        <h4>Share and more...</h4>
        <i onClick={closeShare} className="fa-solid fa-xmark"></i>
      </div>
      <ul>
        <li>Print</li>
        <li>Export JSON</li>
      </ul>
      <div className={styles.shareBody}>
        <hr />
        <h6>Link to this card</h6>
        <input data-name="inputOrButton" type="text" />
        <a href="">Show QR Code</a>
        <h6>Embed this card</h6>
        <input data-name="inputOrButton" type="text" />
        <h6>Email for this card</h6>
        <input data-name="inputOrButton" type="text" />
        <p>
          Emails sent to this address will appear as a comment by you on the
          card
        </p>
        <hr />
        <p>Card #1</p>
        <p>
          Added yesterday at 10:56 AM . <a href="">Delete</a>
        </p>
      </div>
    </div>
  );
};

export default Share;
