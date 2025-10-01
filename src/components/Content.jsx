import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 5px;
  flex-wrap: nowrap;
`;

export default function Content({ content }) {
  return (
    <ContentContainer className="ContentContainer">
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}
