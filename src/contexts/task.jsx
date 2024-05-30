import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

function sortAsencingOrder(tasks, property) {
  if (property === "dueDate") {
    const sortedDates = tasks.sort((a, b) => {
      const [monthA, dayA, yearA] = a[property].split("-").map(Number);
      const [monthB, dayB, yearB] = b[property].split("-").map(Number);

      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return dateA - dateB;
    });
    return sortedDates;
  } else {
    const sorted = tasks.sort((a, b) => a[property] - b[property]);

    return sorted;
  }
}

function sortDescendingOrder(tasks, property) {
  if (property === "dueDate") {
    const sortedDates = tasks.sort((a, b) => {
      const [monthA, dayA, yearA] = a[property].split("-").map(Number);
      const [monthB, dayB, yearB] = b[property].split("-").map(Number);

      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return dateB - dateA;
    });
    return sortedDates;
  } else {
    const sorted = tasks.sort((a, b) => b[property] - a[property]);

    return sorted;
  }
}

export const TaskProvider = ({ children }) => {
  const [initialTasks, setInitialTasks] = useState([]);
  const [dueTask, setDueTask] = useState("");
  const [displaySortOptions, setDisplaySortOptions] = useState(false);
  const [displaySubTaskInput, setDisplaySubTaskInput] = useState(true);
  const [editingMode, setEditingMode] = useState(true);

  const [subTaskEditMode, setSubTaskEditMode] = useState(false);
  const [selectedSortedOptionIndex, setSelectedSortedOptionIndex] = useState(
    null
  );
  const [powerMode, setPowerMode] = useState(false);

  const [closeIcon, setCloseIcon] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handlePower = () => {
    const copyOfTasks = [...tasks];
    const foundDueTask = copyOfTasks.find((task) => task.color === "red");
    setDueTask(foundDueTask);

    setPowerMode(!powerMode);
  };

  const handleCloseIcon = () => {
    setCloseIcon(!closeIcon);
  };

  const handleSelectedSortedOptionIndex = (index) => {
    const defaultOption = JSON.parse(JSON.stringify(tasks));
    const initialOptions = [...initialTasks];

    setSelectedSortedOptionIndex(
      index === selectedSortedOptionIndex ? "" : index
    );

    switch (index) {
      case 0:
        setTasks(initialOptions);
        break;
      case 1:
        const ascendingDates = sortAsencingOrder(defaultOption, "dueDate");
        setTasks(ascendingDates);

        break;
      case 2:
        const descendingDates = sortDescendingOrder(defaultOption, "dueDate");
        setTasks(descendingDates);
        break;
      case 3:
        const ascendingComplexity = sortAsencingOrder(
          defaultOption,
          "complexityLevel"
        );
        setTasks(ascendingComplexity);
        break;
      case 4:
        const descendingComplexity = sortDescendingOrder(
          defaultOption,
          "complexityLevel"
        );
        setTasks(descendingComplexity);
        break;

      case 5:
        const ascendingPriority = sortAsencingOrder(
          defaultOption,
          "priorityLevel"
        );
        setTasks(ascendingPriority);
        break;

      case 6:
        const descendingPriority = sortDescendingOrder(
          defaultOption,
          "priorityLevel"
        );
        setTasks(descendingPriority);
        break;
      case 7:
        const ascendingRating = sortAsencingOrder(defaultOption, "totalRating");
        setTasks(ascendingRating);
        break;
      case 8:
        const descendingRating = sortDescendingOrder(
          defaultOption,
          "totalRating"
        );
        setTasks(descendingRating);
        break;
      default:
        setTasks(defaultOption);
    }
  };

  const handleDisplaySortOptions = () => {
    setDisplaySortOptions(!displaySortOptions);
  };

  const handleRemoveTask = (taskId) => {
    const copyOfTasks = [...tasks];

    const taskToRemove = copyOfTasks.find((task) => task.id === taskId);

    if (!taskToRemove) return;

    const filteredTasks = copyOfTasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(filteredTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        handleRemoveTask,
        displaySortOptions,
        handleDisplaySortOptions,
        selectedSortedOptionIndex,
        handleSelectedSortedOptionIndex,
        editingMode,
        setEditingMode,
        subTaskEditMode,
        setSubTaskEditMode,
        displaySubTaskInput,
        setDisplaySubTaskInput,
        closeIcon,
        setCloseIcon,
        handleCloseIcon,
        powerMode,
        setPowerMode,
        handlePower,
        setDueTask,
        initialTasks,
        setInitialTasks,
        dueTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
