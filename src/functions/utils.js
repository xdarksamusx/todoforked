import { parseISO, format, differenceInDays } from "date-fns";

export const calculateTimeLeft = (date) => {
  let color;

  const dateInput = date;
  const currentDate = new Date();

  const dateSelected = parseISO(
    `${dateInput}T00:00${format(currentDate, "XXX")}`
  );

  const differenceDays = differenceInDays(dateSelected, currentDate);

  switch (differenceDays) {
    case 0:
      color = "red";
      break;
    case 1:
      color = "red";
      break;
    case 2:
      color = "orange";
      break;
    case 3:
      color = "orange";
      break;
    default:
      color = "blue";
  }

  return color;
};

export const formatTime = (time) => {
  const timeDue = time;
  if (!timeDue) return;

  const splitTime = timeDue.split(":");

  const hour = splitTime[0].padStart(2, "0");
  const minutes = splitTime[1].padStart(2, "0");

  const intHour = parseInt(hour);
  const intMinutes = parseInt(minutes);

  if (intHour > 12) {
    convertedHour = hour - 12;
    return `${convertedHour}:${intMinutes.toString().padStart(2, "0")} PM`;
  } else {
    return `${hour}:${minutes} AM`;
  }
};

export const formatDate = (date) => {
  if (!date) return;

  const splitDate = date.split("-");

  const formattedDate =
    splitDate[1] + "-" + splitDate[2].trim() + "-" + splitDate[0];
  return formattedDate;
};
