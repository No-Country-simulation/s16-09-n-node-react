import "./main.css";

import { useTheme } from "@/context/themecontext";

import Calendar from "../calendar/Calendar";
import Collaborators from "../collaborators/Collaborators";
import Docs from "../docs/Docs";
import Meetings from "../meetings/Meetings";
import Progress from "../progress/Progress";
import Proyect from "../proyect/Proyect";
import Tasks from "../tasks/Tasks";
import Tools from "../tools/Tools";

const Main = () => {
  const { theme } = useTheme();
  console.log(theme, "theme");

  return (
    <div className='main-container' style={{ color: theme.text }}>
      <Proyect theme={theme} />
      <Tools theme={theme} />
      <Collaborators />
      <Tasks />
      <Progress />
      <Meetings />
      <Docs />
      <Calendar />
    </div>
  );
};

export default Main;
