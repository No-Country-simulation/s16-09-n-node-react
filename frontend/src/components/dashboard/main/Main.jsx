import "./main.css";

import { useTheme } from "@/context/themecontext";
import Aos from "aos";

import Calendar from "../calendar/Calendar";
import Collaborators from "../collaborators/Collaborators";
import Docs from "../docs/Docs";
import Meetings from "../meetings/Meetings";
import Progress from "../progress/Progress";
import Proyect from "../proyect/Proyect";
import Tasks from "../tasks/Tasks";
import Tools from "../tools/Tools";
import { useEffect } from "react";

const Main = () => {


  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  const { theme } = useTheme();


useEffect


  return (
    <div className='main-container' style={{ color: theme.text }}>
      <Proyect theme={theme} />
      <Tools theme={theme} />
      <div data-aos="fade-left">
      <Collaborators  /></div>
      
      <Tasks />
 
      <Progress />
      <Meetings />
      <Docs />
      <Calendar />
    </div>
  );
};

export default Main;
