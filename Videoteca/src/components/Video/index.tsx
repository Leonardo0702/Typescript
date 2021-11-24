import React from "react";

import { IoTrash, IoThumbsUp, IoPencil } from "react-icons/io5";

import { Container, ButtonArea, Button } from "./styles";

export interface Props {
  id?: number;
  title?: string;
  link?: string;
  liked?: boolean;
}

const Video: React.FC<Props> = ({ id, title, link, liked }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <a href={link} target="_blank">
        {link}
      </a>
      <ButtonArea>
        <Button>
          <IoThumbsUp />
        </Button>
        <Button>
          <IoPencil />
        </Button>
        <Button>
          <IoTrash />
        </Button>
      </ButtonArea>
    </Container>
  );
};

export default Video;
