import styled from 'styled-components';

const ModalStyles = styled.div`
  border-radius: 2px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  min-width: 300px;
  z-index: 9999999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  color: #333333;
  font-size: 25px;
  font-weight: bold;
  max-height: 80vh;
`;

export default ModalStyles;
