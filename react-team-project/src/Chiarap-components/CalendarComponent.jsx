import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
    // Esempio di eventi
    const events = [
        {
            id: 1,
            title: 'Evento 1',
            start: new Date(2024, 3, 1, 10, 0),
            end: new Date(2024, 3, 1, 12, 0),
        },
        {
            id: 2,
            title: 'Evento 2',
            start: new Date(2024, 3, 5, 15, 0),
            end: new Date(2024, 3, 5, 17, 0),
        },
    ];

    return (
        <div style={{ height: 500 }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ margin: '50px' }}
            />
        </div>
    );
};

export default CalendarComponent;