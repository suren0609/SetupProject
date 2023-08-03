import React, { FC, useState, FocusEvent } from "react";

import styles from "./Share.module.scss";
import { DeleteCard } from "components/DeleteCard";

interface IProp {
  closeShare: (e: any) => void;
}

const Share: FC<IProp> = ({ closeShare }) => {
  const [isDeleteActive, setDeleteActive] = useState(false);

  const handleDeleteActive = () => {
    setDeleteActive((prev) => !prev);
  };

  const closeDeleteCard = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    setDeleteActive(false);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) =>
    e.currentTarget.select();

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
        <input
          data-name="inputOrButton"
          value={window.location.href}
          type="text"
          autoFocus
          onFocus={handleFocus}
        />
        <button className={styles.btn} data-name="inputOrButton">
          Show QR Code
        </button>
        <h6>Embed this card</h6>
        <input
          data-name="inputOrButton"
          value={`<blockquote class="trello-card"><a href="https:&#x2F;&#x2F;trello.com&#x2F;c&#x2F;N5722tOP">tgcjgtjhjhm</a></blockquote><script src="https://p.trellocdn.com/embed.min.js"></script>`}
          type="text"
          onFocus={handleFocus}
        />
        <h6>Email for this card</h6>
        <input
          data-name="inputOrButton"
          value={`surenbalayan1+30p91d6rb3jrjaf2raq+30vl4q3exb2vvv8hkuf+12a7f8n83f@boards.trello.com`}
          type="text"
          onFocus={handleFocus}
        />
        <p>
          Emails sent to this address will appear as a comment by you on the
          card
        </p>
        <hr />
        <p>Card #1</p>
        <p onBlur={closeDeleteCard} tabIndex={0}>
          Added yesterday at 10:56 AM .{" "}
          <button
            className={styles.btn}
            onClick={handleDeleteActive}
            data-name="inputOrButton"
          >
            Delete
          </button>
          {isDeleteActive && <DeleteCard closeDeleteCard={closeDeleteCard} />}
        </p>
      </div>
    </div>
  );
};

export default Share;
