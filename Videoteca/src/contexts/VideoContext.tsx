import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import FormModal from "../components/FormModal";

import api from "../services/api";

type handleSubmitProps = React.FormEventHandler<HTMLFormElement>;

type VideoContextProps = {
  handleAdd: () => void;
  handleClose: VoidFunction;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  link: string;
  setLink: Dispatch<SetStateAction<string>>;
  handleSubmit: handleSubmitProps;
  titleHandle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  linkHandle: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const VideoContext = createContext<VideoContextProps>(
  {} as VideoContextProps
);

export const VideoContextProvider: React.FC = ({ children }) => {
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const handleAdd = (): void => {
    setOpenFormModal(true);
  };

  const handleClose = (): void => {
    setOpenFormModal(false);
  };

  const titleHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const linkHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleSubmit: handleSubmitProps = () => {
    const video = {
      link,
      title,
    };
    api.post("videos", video);

    setOpenFormModal(false);
  };

  return (
    <VideoContext.Provider
      value={{
        handleAdd,
        handleClose,
        title,
        setLink,
        setTitle,
        link,
        titleHandle,
        linkHandle,
        handleSubmit,
      }}
    >
      {children}
      {openFormModal && <FormModal />}
    </VideoContext.Provider>
  );
};
