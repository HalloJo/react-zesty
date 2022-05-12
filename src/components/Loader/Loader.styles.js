import styled from "styled-components";

export const Aside = styled.aside`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #294910;
  display: flex;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;

export const LoadingBar = styled.div`
  display: grid;
  grid-row-gap: 12px;
`;

export const Label = styled.label`
  color: #fbdd74;
`;

export const ProgressBar = styled.progress`
  border: 1px solid #fbdd74;
  height: 20px;
  width: 400px;

  &[value]::-webkit-progress-bar {
    background: #fbdd74;
  }

  &[value]::-webkit-progress-value {
    background: #cf4ef0;
  }
`;
