import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store/rootReducer";
import { Container, AlertWrapper } from "./styles";

export const Alert = () => {
  const { alerts } = useSelector((state: AppState) => state.handleAlert);
  return (
    <div>
      {alerts && alerts.length !== 0 && (
        <Container>
          {alerts.map((alert, index) => (
            <AlertWrapper key={index} variant={alert.variant}>
              {alert.message}
            </AlertWrapper>
          ))}
        </Container>
      )}
    </div>
  );
};
