import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
const Task = ({ taskObj, onComplete }) => {
  const newDate = new Date(taskObj.deadline);

  function getClassNameBgColor(date) {
    const diffDay = differenceInDays(date, new Date());
    return diffDay > 3 ? "bg-[#d4d7ff]" : "bg-[#ffd9d4]";
  }

  const deadlineInDate = new Date(taskObj.deadline);
  const deadlineInText = formatDistanceToNow(deadlineInDate, {
    addSuffix: true,
    locale: tr,
  });
  const classBg = getClassNameBgColor(deadlineInDate);
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span className={classBg}>{deadlineInText}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
