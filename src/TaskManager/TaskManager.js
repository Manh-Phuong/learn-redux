import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  changeTask,
  deleteTask,
  restoreTask,
} from "./taskManagerSlice";
import { useState } from "react";

import classNames from 'classnames/bind';
import styles from './TaskManager.module.scss';

const cx = classNames.bind(styles);

function TaskManager() {
  const [inputTask, setInputTask] = useState("");
  const [listButton, setListButton] = useState(true);
  const tasks = useSelector((state) => state.taskManager);
  const dispatch = useDispatch();
  console.log(tasks);

  const handleAddTask = () => {
    dispatch(addTask(inputTask));
    setInputTask("");
  };

  const handleChangeComplete = (task) => {
    dispatch(changeTask(task));
  };

  const handleDeleteTask = (task) => {
    dispatch(deleteTask(task));
  };

  const handleRestoreTask = (task) => {
    dispatch(restoreTask(task));
  };

  return (
    <div className={cx("wrap")}>
      <div className={cx("header")}>
        <div className={cx("button")} onClick={() => setListButton(true)}>
          Danh sách công việc
        </div>
        <div className={cx("button")} onClick={() => setListButton(false)}>
          Lịch sử đã xóa
        </div>
      </div>
      {listButton ? (
        <div className={cx("content")}>
          <div className={cx("input-task")}>
            <input
              value={inputTask}
              onChange={(e) => setInputTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Thêm</button>
          </div>
          <h2>Danh sách công việc</h2>

          {tasks?.map((task) => {
            if (!task.deleted) {
              return (
                <div key={task.id} className={cx("item-wrap")}>
                  <div className={cx("item-content")}>{task.content}</div>
                  <div className={cx("item-tools")}>
                    {task.complete ? (
                      <button onClick={() => handleChangeComplete(task)}>
                        Đã hoàn thành
                      </button>
                    ) : (
                      <button onClick={() => handleChangeComplete(task)}>
                        Chưa hoàn thành
                      </button>
                    )}
                    <button onClick={() => handleDeleteTask(task)}>Xóa</button>
                  </div>
                </div>
              );
            }
            return <></>;
          })}
        </div>
      ) : (
        <div className={cx("content")}>
          <h2>Lịch sử đã xóa</h2>

          {tasks?.map((task) => {
            if (task.deleted) {
              return (
                <div key={task.id} className={cx("item-wrap")}>
                  <div className={cx("item-content")}>{task.content}</div>
                  <div className={cx("item-tools")}>
                    {task.complete ? (
                      <button onClick={() => handleChangeComplete(task)}>
                        Đã hoàn thành
                      </button>
                    ) : (
                      <button onClick={() => handleChangeComplete(task)}>
                        Chưa hoàn thành
                      </button>
                    )}
                    <button onClick={() => handleRestoreTask(task)}>
                      Khôi phục
                    </button>
                  </div>
                </div>
              );
            }
            return <></>;
          })}
        </div>
      )}
    </div>
  );
}

export default TaskManager;
