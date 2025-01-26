import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Calendar as CalendarIcon, Phone } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';
import './styles/Calendar.css'
import { Helmet } from 'react-helmet';

const events = [
  // {
  //   date: '2024-11-13',
  //   title: 'Tsitsing Itireleng Sustainable Farming Programme 2024',
  //   details: {
  //     description: 'Join us as Kgosana Koketso Rakhudu launches the 2024 Sustainable Farming Programme, a pivotal event focused on food security and community empowerment.',
  //     venue: 'Tsitsing Village Hall',
  //     time: '8:30 AM',
  //     contact: {
  //       name: 'Ms. Tsholo Nape',
  //       phone: '+27 (82) 972-5629',
  //     },
  //     highlights: [
  //       'Learning sustainable farming practices',
  //       'Distributing 500 food hampers to families in need',
  //     ],
  //   },
  // },
  // {
  //   date: '2024-11-17',
  //   title: 'Celebrating Excellence in Tsitsing',
  //   details: {
  //     venue: 'Tsitsing Primary School',
  //     time: '8:00 AM - 10:30 AM',
  //     dressCode: 'Traditional Attire',
  //     contact: {
  //       name: 'Ms. Tsholo Nape',
  //       phone: '+27 (82) 972-5629',
  //     },
  //     keyFocus: [
  //       '2025 Kgotla Calendar Launch',
  //       'Tsitsing Excellence Awards',
  //       'Launch of Tsitsing Family Literacy Program',
  //     ],
  //   },
  // },
  // {
  //   date: '2024-11-29',
  //   title: '9th Year Leadership Celebration',
  //   details: {
  //     description:
  //       "Celebrate Kgosana Koketso Rakhudu's 9 years of dedication and leadership with a special graduation ceremony and inauguration of Dr. Koketso Rakhudu as Chancellor of KRF CET.",
  //     venue: 'Maile Kopman',
  //     time: '8:00 AM',
  //     dressCode: 'Formal Attire',
  //     specialGuests: [
  //       'Prof. Keo Motaung - Biomedical Scientist & CEO of Global Health Biotech',
  //       'Dr. Koketso Rakhudu - Incoming Chancellor of KRF CET',
  //       'Prof. Kgomo Mathabe - Head of Urology, University of Pretoria',
  //     ],
  //   },
  //   image: 'images/9thYear.jpg',
  //   alt: 'Leadership Celebration Event',
  //   loading: 'lazy',
  // },
  
];

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  const formatDateToUTC = (date) => {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
      .toISOString()
      .split('T')[0];
  };

  const getTileContent = ({ date }) => {
    const formattedDate = formatDateToUTC(date);
    const eventsOnDate = events.filter((event) => event.date === formattedDate);

    if (eventsOnDate.length > 0) {
      return (
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="absolute w-3 h-3 bg-blue-700 rounded-full opacity-80 shadow-md"></div>
          {eventsOnDate.length > 1 && (
            <span className="absolute bottom-0 right-0 text-xs text-white bg-blue-600 rounded-full px-1">
              {eventsOnDate.length}
            </span>
          )}
        </div>
      );
    }
    return null;
  };

  const getTileClassName = ({ date }) => {
    const formattedDate = formatDateToUTC(date);
    const hasEvent = events.some((event) => event.date === formattedDate);
    const isCurrentDate = date.toDateString() === new Date().toDateString();

    return `
      ${hasEvent ? 'event-tile' : ''} 
      ${isCurrentDate ? 'current-date' : ''} 
      hover:bg-blue-100 rounded-lg transition-colors duration-200
    `;
  };

  const handleDayClick = (date) => {
    const formattedDate = formatDateToUTC(date);
    const eventsOnDate = events.filter((event) => event.date === formattedDate);
    setSelectedDate(date);
    setSelectedEvents(eventsOnDate);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const EventDetails = ({ events }) => {
    if (!events || events.length === 0) return null;

    return (
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-8">
        {events.map((event, index) => (
          <div key={index}>
            {event.image && (
              <img
                src={event.image}
                alt={event.alt || 'Event image'}
                className="w-full h-64 object-contain rounded-lg shadow-md mb-4 cursor-pointer"
                loading={event.loading || 'lazy'}
                onClick={() => openModal(event.image)}
              />
            )}
            <h2 className="text-2xl font-bold text-blue-800 mb-4">{event.title}</h2>
            {event.details.description && (
              <p className="text-gray-600 mb-4 italic">{event.details.description}</p>
            )}

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <CalendarIcon className="w-5 h-5 text-blue-700" />
                <p>
                  {new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              <div className="text-sm grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-700">Venue</h3>
                  <p>{event.details.venue}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700">Time</h3>
                  <p>{event.details.time}</p>
                </div>
              </div>

              {event.details.dressCode && (
                <div>
                  <h3 className="font-semibold text-blue-700">Dress Code</h3>
                  <p className="text-gray-700">{event.details.dressCode}</p>
                </div>
              )}

              {event.details.specialGuests && (
                <div>
                  <h3 className="font-semibold text-blue-700">Special Guests</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {event.details.specialGuests.map((guest, idx) => (
                      <li key={idx} className="text-gray-700">
                        {guest}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <Helmet>
        <title>Book World Activities</title>
        <meta
          name="description"
          content="Stay updated on community events organized by the Office of Kgosana Koketso Rakhudu, including sustainable farming programs and community awards."
        />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-serif font-bold text-blue-800 mb-8">
        Book World Activities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <Calendar
              onClickDay={handleDayClick}
              tileClassName={getTileClassName}
              tileContent={getTileContent}
              className="rounded-lg shadow-md p-4"
              value={selectedDate}
            />
          </div>

          <div className="h-full">
            {selectedEvents.length > 0 ? (
              <EventDetails events={selectedEvents} />
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-lg h-full flex items-center justify-center">
                <div className="text-center">
                  <CalendarIcon className="w-12 h-12 text-blue-600 mb-4" />
                  <p className="text-gray-700 font-semibold">
                    Select a date to view event details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Image */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-full max-h-screen">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-4xl font-bold focus:outline-none"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Enlarged event"
              className="w-auto max-w-full max-h-screen rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
