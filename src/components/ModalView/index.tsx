import { ReactNode } from "react";
import { Modal, ModalProps, TouchableWithoutFeedback } from "react-native";
import { Bar, Container, Overlay } from "./styles";
import { Background } from "../Background";

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export function ModalView({ children, closeModal, ...rest }: Props) {
  return (
    <Modal
      {...rest}
      transparent
      animationType="slide"
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <Overlay>
          <Container>
            <Background>
              <Bar />
              {children}
            </Background>
          </Container>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  )
};