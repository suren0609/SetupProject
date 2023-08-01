import React, { FC, forwardRef, useEffect, useRef, useState } from "react";
import { getPosition } from "helpers/getPosition";

import styles from "./Dates.module.scss";
import { IProp } from "store/types";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getParameters } from "helpers/parametersForPosition";

const Dates: FC<any> = ({ popupRef }: IProp) => {
  const [pos, setPos] = useState({ currentTop: -200, currentLeft: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef) {
      const { top, left, height, width } = getParameters(popupRef, divRef);

      setPos((prevState) => {
        return {
          ...prevState,
          ...getPosition(width, height, top, left),
        };
      });
    }
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={styles.Dates}
      style={{ top: pos.currentTop, left: pos.currentLeft }}
      ref={divRef}
      data-name="inputOrButton"
    >
      <div className={styles.title}>
        <h4>Dates</h4>
      </div>
      <Calendar className={[styles.calendar]} />
      <div className={styles.startDate}>
        <h5>Start date</h5>
        <div className={styles.checkInput}>
          <input data-name="inputOrButton" type="checkbox" />
          <input data-name="inputOrButton" type="date" />
        </div>
      </div>
      <div className={styles.dueDate}>
        <h5>Due date</h5>
        <div className={styles.checkInput}>
          <input data-name="inputOrButton" type="checkbox" />
          <input data-name="inputOrButton" type="date" />
          <input data-name="inputOrButton" type="time" />
        </div>
      </div>
      <div className={styles.dateReminder}>
        <h5>Set due date reminder</h5>
        <select data-name="inputOrButton" name="" id="">
          <option value="None">None</option>
          <option value="At time of due date">At time of due date</option>
          <option value="5 Minutes before">5 Minutes before</option>
          <option value="10 Minutes before">10 Minutes before</option>
          <option value="15 Minutes before">15 Minutes before</option>
          <option value="1 Hour before">1 Hour before</option>
          <option value="2 Hours before">2 Hours before</option>
          <option value="1 Day before">1 Day before</option>
          <option value="2 Days before">2 Days before</option>
        </select>
      </div>
      <button data-name="inputOrButton" className={styles.saveBtn}>
        Save
      </button>
      <button data-name="inputOrButton" className={styles.removeBtn}>
        Remove
      </button>
    </div>
  );
};

export default Dates;
