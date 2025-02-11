import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Calendar as CalendarIcon } from "lucide-react";

const events = [
  { date: "2025-02-05", title: "World Read Aloud Day", details: "Celebrating World Read Aloud Day at Kana Primary school with Book World", image: "/images/WRA05.jpg" },
  { date: "2025-02-10", title: "Back to School Campaign", details: "Back to school activation in Cape Town with Book World", image: "/images/BackToSchool.jpg" },
  { date: "2025-02-11", title: "Back to School Campaign", details: "Back to school activation in Cape Town with Book World", image: "/images/WorldReadAloudCPT.jpg" },
  { date: "2025-02-12", title: "Back to School Campaign", details: "Back to school activation in Cape Town with Book World", image: "/images/WorldReadAloudCPT.jpg" },
  { date: "2025-02-13", title: "Back to School Campaign", details: "Back to School activation in Free State With Book World", image: "/images/BackToSchool.jpg" },
  { date: "2025-02-14", title: "Back to School Campaign", details: "Back to School activation in Free State With Book World", image: "/images/WorldReadAloudCPT.jpg" },
  { date: "2025-02-14", title: "Blind-Date With a Book", details: "Launching Blind-Date with a book at Stook Koffie Roostery in partnership with Rustenburg Library and Information Services 📚✨ Join us for a surprise book adventure! 📖☕", image: "/images/BlindDateWithABook.png" }

];

const CalendarComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (year, month) => {
    let days = [];
    let date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const formatDate = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const startDay = daysInMonth[0].getDay();
  const prevMonthDays = [...Array(startDay)].map(() => null);
  const formattedDays = [...prevMonthDays, ...daysInMonth];

  const handleMonthChange = (increment) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1));
  };

  const handleYearChange = (increment) => {
    setCurrentMonth(new Date(currentMonth.getFullYear() + increment, currentMonth.getMonth(), 1));
  };

  const hasEvent = (date) => events.filter((event) => event.date === formatDate(date)).length;

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Helmet>
        <title>Book World Events</title>
      </Helmet>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-[#2b347c] mb-6">Book World Events</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <button onClick={() => handleYearChange(-1)} className="text-lg font-semibold text-blue-700">&laquo; Prev Year</button>
              <button onClick={() => handleMonthChange(-1)} className="text-lg font-semibold text-blue-700">&larr; Prev Month</button>
            </div>
            <h2 className="text-xl font-bold text-gray-800">{currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
            <div className="flex gap-2">
              <button onClick={() => handleMonthChange(1)} className="text-lg font-semibold text-blue-700">Next Month &rarr;</button>
              <button onClick={() => handleYearChange(1)} className="text-lg font-semibold text-blue-700">Next Year &raquo;</button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 text-center">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="font-semibold text-gray-600">{day}</div>
            ))}

            {formattedDays.map((date, index) => (
              <div
                key={index}
                className={`h-16 flex flex-col justify-center items-center rounded-lg transition cursor-pointer
                  ${date ? "bg-gray-50 hover:bg-blue-100" : "bg-transparent"}
                  ${date && date.toDateString() === new Date().toDateString() && "bg-blue-200 text-blue-800"}
                  ${date && hasEvent(date) && "ring-2 ring-blue-600"}`}
                onClick={() => date && handleDateClick(date)}
              >
                {date && <span className="text-sm font-medium text-gray-800">{date.getDate()}</span>}
                {date && hasEvent(date) > 0 && (
                  <span className="text-xs bg-blue-600 text-white rounded-full px-2 mt-1">{hasEvent(date)} Events</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {selectedDate ? (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Events on{" "}
                {selectedDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
              </h2>
              {events
                .filter((event) => event.date === formatDate(selectedDate))
                .map((event, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="font-semibold text-blue-700">{event.title}</h3>
                    <p className="text-gray-600">{event.details}</p>
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="mt-4 w-full h-48 object-contain rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openModal(event.image)}
                      />
                    )}
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-gray-700 text-center">Select a date to view events.</p>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-full max-h-screen">
            <button onClick={closeModal} className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-4xl font-bold focus:outline-none">&times;</button>
            <img src={modalImage} alt="Event" className="w-auto max-w-full max-h-screen rounded-lg object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
