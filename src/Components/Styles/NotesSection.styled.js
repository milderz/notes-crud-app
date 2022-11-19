import styled from "styled-components";

export const StyledNotesSection = styled.section`
  padding: 5.6rem;

  overflow-y: scroll;

  filter: ${(props) => (props.addNoteFormActive ? "brightness(0.4)" : "none")};
  background-color: var(--secondary-black);
  transition: filter 0.4s ease;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5.6rem;

    @media screen and (max-width: 820px) {
      padding-bottom: 1.6rem;
    }
  }

  .notes-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 40.4rem;
    grid-gap: 3.2rem;

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 820px) {
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 400px) {
      grid-auto-rows: 30.4rem;
      padding-bottom: 20rem;
    }
  }

  @media screen and (max-width: 670px) {
    padding: 8.4rem 2.8rem 2.8rem 2.8rem;
  }
  @media screen and (max-width: 500px) {
    padding: 8.4rem 1.8rem 1.8rem 1.8rem;
  }
`;
