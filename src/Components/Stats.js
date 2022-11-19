import { StyledStats } from "./Styles/Stats.styled";

function Stats({ notes, title }) {
  return (
    <StyledStats>
      <h3>{title}</h3>
      <p>
        You have <span>{notes.length}</span> notes
      </p>
    </StyledStats>
  );
}

export default Stats;
