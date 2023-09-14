import React, { FC, MouseEvent } from "react";
import styles from "./AddList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setAddActive } from "store/slices/popupSlice";
import { boardState, listState, popupState } from "store/selectors";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { createListAction } from "store/actions";
import Loading from "components/Loading/Loading";
import { setAddListLoading } from "store/slices/listSlice";

const AddList: FC = () => {
  const dispatch = useDispatch();
  const { isAddActive } = useSelector(popupState);
  const { currentBoard } = useSelector(boardState);
  const { addListLoading } = useSelector(listState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const changeAddIsActive = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(setAddActive(!isAddActive));
  };

  const submitList: SubmitHandler<FieldValues> = (data) => {
    dispatch(setAddListLoading(true));
    dispatch(
      createListAction({
        name: data.listTitle,
        boardId: currentBoard.id.toString(),
      }),
    );
    reset();
  };

  const value = watch("listTitle");

  return !isAddActive ? (
    <div className={styles.AddList} onClick={(e) => changeAddIsActive(e)}>
      + Add another list
    </div>
  ) : (
    <div className={styles.AddListActive} onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleSubmit(submitList)}>
        <input
          {...register("listTitle", { required: true, maxLength: 30 })}
          type="text"
          placeholder="Enter list title..."
          autoFocus
        />
        <div className={styles.buttonAndClose}>
          <input type="submit" className={styles.add} value={"Add list"} />
          <button className={styles.close}>
            <i
              onClick={(e) => changeAddIsActive(e)}
              className="fa-solid fa-xmark"
            ></i>
          </button>
          {addListLoading ? <Loading /> : null}
        </div>
      </form>
    </div>
  );
};

export default AddList;
