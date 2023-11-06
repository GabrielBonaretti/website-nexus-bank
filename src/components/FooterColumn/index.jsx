import { Div, DivTopics, Text, Title } from "./style";

const FooterColumn = ({ title, option1, option2, option3, option4 }) => {
  return (
    <Div>
      <Title>{title}</Title>

      <DivTopics>
        <Text>{option1}</Text>
        <Text>{option2}</Text>
        <Text>{option3}</Text>
        <Text>{option4}</Text>
      </DivTopics>
    </Div>
  );
};

export default FooterColumn;
