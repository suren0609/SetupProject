import React, { FC, useState, FocusEvent, useRef, useEffect } from "react";

import styles from "./Share.module.scss";
import { DeleteCard } from "components/DeleteCard";
import { inputValueForShare } from "utils/inputValueForShare";

interface IProp {
  closeShare: (e: any) => void;
}

const Share: FC<IProp> = ({ closeShare }) => {
  const [isDeleteActive, setDeleteActive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.dir(inputRef.current);
    inputRef.current?.select();

    // return () => inputRef.current?.select();
  }, []);

  const handleDeleteActive = () => {
    setDeleteActive((prev) => !prev);
  };

  const closeDeleteCard = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "inputOrButton") {
      return;
    }
    setDeleteActive(false);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={styles.Share}
      data-name="inputOrButton"
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
          ref={inputRef}
          data-name="inputOrButton"
          value={window.location.href}
          type="text"
          readOnly={true}
          // onFocus={handleFocus}
          // autoFocus
        />
        <button className={styles.btn} data-name="inputOrButton">
          Show QR Code
        </button>
        <h6>Embed this card</h6>
        <input
          readOnly={true}
          data-name="inputOrButton"
          value={inputValueForShare}
          type="text"
          onFocus={handleFocus}
        />
        <h6>Email for this card</h6>
        <input
          readOnly={true}
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
        <p>
          Added yesterday at 10:56 AM .{" "}
          <button
            className={styles.btn}
            onClick={handleDeleteActive}
            onBlur={closeDeleteCard}
            tabIndex={0}
            data-name="inputOrButton"
          >
            Delete
            {isDeleteActive && <DeleteCard closeDeleteCard={closeDeleteCard} />}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Share;
