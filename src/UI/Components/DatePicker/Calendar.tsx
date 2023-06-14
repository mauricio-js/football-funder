import { useState } from "react";

interface CalendarDataProps {
  value: Date | null;
  onChange: (date: Date) => void;
}

export const Calendar: React.FC<CalendarDataProps> = ({ value, onChange }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (date: Date) => {
    onChange(date);
  };

  // Calculate the number of days in the current month
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Calculate the start and end dates of the current month's weeks
  const startOfMonthDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonthDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    daysInMonth
  );
  const startOfWeekDate = new Date(startOfMonthDate);
  startOfWeekDate.setDate(
    startOfMonthDate.getDate() - startOfMonthDate.getDay()
  );
  const endOfWeekDate = new Date(endOfMonthDate);
  endOfWeekDate.setDate(
    endOfMonthDate.getDate() + (6 - endOfMonthDate.getDay())
  );

  // Create an array of date objects for the current month's weeks
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];
  let currentDateObj = new Date(startOfWeekDate);
  while (currentDateObj <= endOfWeekDate) {
    currentWeek.push(new Date(currentDateObj));
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentDateObj.setDate(currentDateObj.getDate() + 1);
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-button" onClick={handlePrevMonth}>
          &lt;
        </button>
        <div className="calendar-title">
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <button className="calendar-button" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className="calendar-body">
        {weeks.map((week, index) => (
          <div key={index} className="calendar-row">
            {week.map((date, index) => (
              <div
                key={index}
                className={`calendar-cell ${
                  date < startOfMonthDate || date > endOfMonthDate
                    ? "disabled"
                    : ""
                } ${date.getTime() === value?.getTime() ? "selected" : ""}`}
                onClick={() => handleDateClick(date)}
              >
                {date.getDate()}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
