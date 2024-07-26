"use client"
import { NavLink } from 'react-router-dom'
import './calendar.css'
import { useTheme } from "@/context/themecontext";

const Calendar = () => {
const {theme} = useTheme()


  const getFilterStyle = () => {
    return theme.color === "#e8e8e8" ? "invert(0)" : "invert(1)";
  };
  return (
    <NavLink to={"/dashboard/calendar-details"} className="calendar-calendar"
    style={{backgroundColor: theme.background, color: theme.subtitulos}}>
      <img
        alt="calendar-image"
        src="/assets/calendar-image.svg"
        className="calendar-calendar-image"
        style={{backgroundColor: theme.text, padding: "5%", borderRadius: "2%", color: theme.subtitulos}}
        
      />
    </NavLink>
  )
}

export default Calendar
