import { NavLink } from 'react-router-dom'
import './calendar.css'

const Calendar = (props) => {
  return (
    <NavLink to={"/dashboard/calendar-details"} className="calendar-calendar">
      <img
        alt="calendar-image"
        src="/assets/calendar-image.svg"
        className="calendar-calendar-image"
      />
    </NavLink>
  )
}

export default Calendar
