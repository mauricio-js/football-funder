import { useState } from "react";
import { Calendar } from "UI";

export const CustomizeDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  // Format the selected date for display in the input field
  const formattedDate = selectedDate?.toLocaleDateString("en-US");

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = new Date(event.target.value);
    if (!isNaN(inputDate.getTime())) {
      setSelectedDate(inputDate);
    }
  };

  const handleCalendarChange = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleCalendarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={formattedDate ?? ""}
        onChange={handleDateChange}
        onFocus={toggleCalendar}
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      {showCalendar && (
        <div
          className="absolute top-12 left-0 z-10 bg-white border border-gray-300 rounded-md shadow-sm p-2"
          onClick={handleCalendarClick}
        >
          <Calendar value={selectedDate} onChange={handleCalendarChange} />
        </div>
      )}
    </div>
  );
};
