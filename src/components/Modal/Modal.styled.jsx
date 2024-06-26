import styled from "styled-components";

export const ModalOverlay = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 20;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 64px;
  display: inline-flex;
  flex-direction: column;
  max-width: 566px;
  width: 95%;
  max-height: 95vh;
  gap: 40px;
  overflow: overlay;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  cursor: pointer;
  right: 20px;
  top: 20px;

  & svg {
    width: 32px;
    height: 32px;
    fill: none;
    stroke: #101828;
    transition: transform 150ms linear, stroke 150ms linear;

    &:hover {
      transform: scale(1.2);
      stroke: #e0a39a;
    }
  }
`;
