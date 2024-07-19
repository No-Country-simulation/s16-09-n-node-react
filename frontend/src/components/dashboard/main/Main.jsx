
import Proyect from "../proyect/Proyect"
import Tools from "../tools/Tools"
import Tasks from '../tasks/Tasks'
import Meetings from '../meetings/Meetings'
import Docs from '../docs/Docs'
import Collaborators from '../collaborators/Collaborators'
import Progress from '../progress/Progress'
import Calendar from '../calendar/Calendar'
import { useTheme } from '../../../context/ThemeContext'; 
import styled from 'styled-components'

const MainContainer = styled.div`
  width: 76dvw;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;


const Main = (theme) => {
  return <MainContainer theme ={theme}>
    <Proyect />
    <Tools />
    <Collaborators />
    <Tasks />
    <Progress />
    <Meetings />
    <Docs />
    <Calendar />
  </MainContainer>
}

export default Main
