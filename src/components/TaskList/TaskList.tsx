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
import {
  popupState,
  taskState,
  userProfileActiveSelector,
} from "store/selectors";
import { setIsUserProfileActive } from "store/slices/userPopupSlice";
import styles from "./TaskList.module.scss";
import { IListData } from "store/types";
import { setCurrentList } from "store/slices/listSlice";
import {
  createTaskAction,
  getTasksAction,
  updateListAction,
} from "store/actions";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { setAddTaskLoading } from "store/slices/taskSlice";
import Loading from "components/Loading/Loading";
import { setAddCardActive } from "store/slices/popupSlice";

interface IProps {
  list: IListData;
}

const TaskList: FC<IProps> = ({ list }) => {
  const [isTemplateActive, setTemplateActive] = useState(false);
  // const [isAddCardActive, setAddCardActive] = useState(false);
  const [isListActionActive, setListActionActive] = useState(false);
  const [pos, setPos] = useState({ currentTop: 0, currentLeft: 0 });
  const [isTitleInput, setTitleInput] = useState(false);
  const [titleValue, setTitleValue] = useState<IListData>(list);
  const [taskData, setTaskData] = useState({
    name: "",
    description: "",
    startDate: Date.now().toString(),
    endDate: null,
    categoryId: list.id,
  });

  const listRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const { tasks, addTaskLoading } = useSelector(taskState);
  const { isAddCardActive } = useSelector(popupState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      listTitle: list.name,
    },
  });

  const { listTitle } = watch();
  useEffect(() => {
    dispatch(getTasksAction({ categoryId: list.id }));
  }, []);

  useEffect(() => {
    if (isAddCardActive) {
      listRef.current!.scrollTo({
        top: listRef.current!.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isAddCardActive]);
  useEffect(() => {
    if (isTitleInput) {
      const inputValue = formRef.current?.querySelector<HTMLInputElement>(
        'input[name="listTitle"]',
      );
      inputValue?.select();
    }
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
    dispatch(setAddCardActive(true));
  };

  const closeAddCard = (e: any) => {
    if (e.relatedTarget?.dataset?.name === "addCardActive") {
      return;
    }
    dispatch(setAddCardActive(false));
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

  const updateList: SubmitHandler<FieldValues> = () => {
    if (list.name !== listTitle)
      dispatch(updateListAction({ ...list, name: listTitle }));
    setTitleInput(false);
  };

  const changeTaskInput = (e: any) => {
    setTaskData({ ...taskData, name: e.target.value });
  };

  const addTaskHandler = () => {
    dispatch(setAddTaskLoading(true));
    dispatch(createTaskAction(taskData));
  };

  const categoryId = list.id;

  return (
    <div className={styles.TaskList}>
      <div className={styles.listHeader}>
        {isTitleInput ? (
          <form onSubmit={handleSubmit(updateList)} ref={formRef}>
            <input
              {...register("listTitle")}
              onBlur={updateList}
              autoFocus={isTitleInput}
            />
          </form>
        ) : (
          <h5 onClick={handleInputTitle}>{listTitle}</h5>
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
        {tasks[categoryId]?.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            changeUserProfileActive={changeUserProfileActive}
          />
        ))}

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
              onChange={changeTaskInput}
              autoFocus
            ></textarea>
            <div className={styles.buttonAndClose}>
              <button
                onClick={addTaskHandler}
                data-name="addCardActive"
                className={styles.add}
                disabled={taskData.name ? false : true}
              >
                {addTaskLoading ? <Loading /> : "Add a card"}
              </button>
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
