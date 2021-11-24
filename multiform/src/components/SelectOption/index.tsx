import { Container, Icon, Info, Title, Description } from "./styles";

type Props = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
};

export const SelectOption = ({
  title,
  description,
  icon,
  selected,
  onClick,
}: Props) => {
  return (
    <Container onClick={onClick} selected={selected}>
      <Icon>{icon}</Icon>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
};
