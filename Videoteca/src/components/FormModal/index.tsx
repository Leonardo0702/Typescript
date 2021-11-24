import React, { useContext } from "react";

import { VideoContext } from "../../contexts/VideoContext";

import {
  Overlay,
  Container,
  Header,
  FormContainer,
  FormMain,
  InputGroup,
  Footer,
  CloseIcon,
  CheckIcon,
} from "./styles";

export default function FormModal() {
  const { handleClose, titleHandle, title, link, linkHandle, handleSubmit } =
    useContext(VideoContext);

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Add a video</strong>
          <button onClick={() => handleClose()}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain>
            <InputGroup>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={titleHandle}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="link">Link</label>
              <input id="link" type="text" value={link} onChange={linkHandle} />
            </InputGroup>
          </FormMain>
          <Footer>
            <button type="submit">
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
