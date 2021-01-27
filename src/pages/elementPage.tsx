import React, { useState } from "react";
import { ElementList } from "components/Lists";
import { useSelector } from "react-redux";
import { AppState } from "store/rootReducer";
import { Form } from "components/Form";
import { Submit } from "components/Buttons";
import { Modal } from "components/Modal";
import { Heading } from "components/Typography";
import { HeadingContainer } from "./styles";
export const ElementPage = () => {
  const tagsLoading = useSelector((state: AppState) => state.tagList.isPending);
  const currenciesLoading = useSelector(
    (state: AppState) => state.currencyList.isPending
  );
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
    <>
    <HeadingContainer>
      <Heading>Elements</Heading>

      {!tagsLoading && !currenciesLoading && (
        <>
          <Submit className={"ml"} onClick={() => setOpenAddModal(true)}>Add element</Submit>
        </>
      )}
    </HeadingContainer>
      <ElementList />

      {openAddModal && (
        <Modal handleClose={() => setOpenAddModal(false)}>
          <Form handleClose={() => setOpenAddModal(false)} />
        </Modal>
      )}
    </>
  );
};
