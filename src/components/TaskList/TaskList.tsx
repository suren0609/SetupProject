import { CardTemplate } from "components/CardTemplate";
import { ListActions } from "components/ListActions";
import { TaskCard } from "components/TaskCard";
import { UserProfile } from "components/UserProfile";
import { getTemplatePos } from "helpers/getPosition";
import { getParameters } from "helpers/parametersForPosition";
import {
  ChangeEvent,
  FC,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileActiveSelector } from "store/selectors";
import { setIsUserProfileActive } from "store/slices/userPopupSlice";
import styles from "./TaskList.module.scss";
import { IListData } from "store/types";
import { setCurrentList } from "store/slices/listSlice";
import { updateListAction } from "store/actions";

interface IProps {
  list: IListData;
}

const TaskList: FC<IProps> = ({ list }) => {
  const [isTemplateActive, setTemplateActive] = useState(false);
  const [isAddCardActive, setAddCardActive] = useState(false);
  const [isListActionActive, setListActionActive] = useState(false);
  const [pos, setPos] = useState({ currentTop: 0, currentLeft: 0 });
  const [isTitleInput, setTitleInput] = useState(false);
  const [titleValue, setTitleValue] = useState<IListData>(list);

  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAddCardActive) {
      listRef.current!.scrollTo({
        top: listRef.current!.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isAddCardActive]);
  useEffect(() => {
    inputRef.current?.select();
  }, [isTitleInput]);

  const isUserProfileActive = useSelector(userProfileActiveSelector);

  const dispatch = useDispatch();

  const handleListAction = () => {
    setListActionActive((prev) => !prev);
  };

  const closeListAction = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "listAction") {
      return;
    }

    setListActionActive(false);
  };

  const changeUserProfileActive = () => {
    dispatch(setIsUserProfileActive(!isUserProfileActive));
  };

  const templateRef = useRef<any>(null);
  const popupRef = useRef<any>(null);

  useEffect(() => {
    if (popupRef?.current) {
      const { top, left, height, width } = getParameters(templateRef, popupRef);

      setPos(getTemplatePos(width, height, top, left));
    }
  }, [isTemplateActive]);

  const showTemplate = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setTemplateActive((prev) => !prev);
  };

  const handleAddCardActive = () => {
    setAddCardActive(true);
  };

  const closeAddCard = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "addCardActive") {
      return;
    }
    setAddCardActive(false);
  };

  const hideTemplate = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "editButton") {
      return;
    }
    setTemplateActive(false);
  };

  const handleInputTitle = () => {
    setTitleInput(true);
  };

  const updateList = () => {
    dispatch(updateListAction(titleValue));
    setTitleInput(false);
  };

  const closeInput = () => {
    if (list.name !== titleValue.name) dispatch(updateListAction(titleValue));
    setTitleInput(false);
  };

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue({ ...list, name: e.target.value });
  };

  return (
    <div className={styles.TaskList}>
      <div className={styles.listHeader}>
        {isTitleInput ? (
          <form onSubmit={updateList}>
            <input
              onBlur={closeInput}
              type="text"
              value={titleValue.name}
              ref={inputRef}
              onChange={changeTitle}
            />
          </form>
        ) : (
          <h5 onClick={handleInputTitle}>{titleValue.name}</h5>
        )}

        <i
          onClick={handleListAction}
          tabIndex={0}
          data-name="listAction"
          className="fa-solid fa-ellipsis"
        ></i>
        {isListActionActive && (
          <ListActions closeListAction={closeListAction} list={list} />
        )}
      </div>
      <div ref={listRef} className={styles.listBody}>
        <TaskCard changeUserProfileActive={changeUserProfileActive} />

        {isAddCardActive && (
          <div
            className={styles.AddCardActive}
            onClick={(e) => e.stopPropagation()}
            onBlur={closeAddCard}
            tabIndex={0}
            data-name="addCardActive"
          >
            <textarea
              placeholder="Enter a title for this card..."
              autoFocus
            ></textarea>
            <div className={styles.buttonAndClose}>
              <button className={styles.add}>Add a card</button>
              <button onClick={closeAddCard} className={styles.close}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        )}
      </div>
      {!isAddCardActive && (
        <div className={styles.addCard}>
          <div className={styles.addACardBtn} onClick={handleAddCardActive}>
            + Add a card
          </div>
          <div
            onBlur={hideTemplate}
            tabIndex={0}
            className={styles.taskListTamplates}
            ref={templateRef}
          >
            <i
              onClick={(e) => showTemplate(e)}
              className="fa-solid fa-newspaper"
            ></i>
          </div>
        </div>
      )}

      {isTemplateActive && <CardTemplate pos={pos} popupRef={popupRef} />}
      {isUserProfileActive && <UserProfile />}
    </div>
  );
};

export default TaskList;
