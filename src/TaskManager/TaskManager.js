import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  changeTask,
  deleteTask,
  restoreTask,
} from "./taskManagerSlice";
import "./TaskManager.css";
import { useState } from "react";

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
    <div className="wrap">
      <div className="header">
        <div className="button" onClick={() => setListButton(true)}>
          Danh sách công việc
        </div>
        <div className="button" onClick={() => setListButton(false)}>
          Lịch sử đã xóa
        </div>
      </div>
      {listButton ? (
        <div className="content">
          <div className="input-task">
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
                <div key={task.id} className="item-wrap">
                  <div className="item-content">{task.content}</div>
                  <div className="item-tools">
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
        <div className="content">
          <h2>Lịch sử đã xóa</h2>

          {tasks?.map((task) => {
            if (task.deleted) {
              return (
                <div key={task.id} className="item-wrap">
                  <div className="item-content">{task.content}</div>
                  <div className="item-tools">
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
