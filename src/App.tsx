import React, { useEffect, useState } from "react";
import "./App.css";
import { ElementList, TagList } from "components/Lists";
import { useDispatch, useSelector } from "react-redux";
import { addNewElement, fetchElementList } from "store/elements";
import { AppState } from "store/rootReducer";
import { fetchCurrencyList } from "store/currencies";
import { fetchTagList } from "store/tags";
import { AddTagForm, Form } from "components/Form";
import { Submit } from "components/Buttons"
import { Modal } from "components/Modal";

function App() {
  const dispatch = useDispatch();
  const tagsLoading = useSelector((state: AppState) => state.tagList.isPending);
  const currenciesLoading = useSelector(
    (state: AppState) => state.currencyList.isPending
  );
  const [openAddModal, setOpenAddModal] = useState(false);
  useEffect(() => {
    dispatch(fetchElementList());
    dispatch(fetchCurrencyList());
    dispatch(fetchTagList());
  }, [dispatch]);
  return (
    <div className="App">
      <ElementList />
      <TagList />
      <AddTagForm />
      {!tagsLoading && !currenciesLoading && (
        <>
          <Submit onClick={() => setOpenAddModal(true)}>Add element</Submit>
        </>
      )}
      {openAddModal && (
        <Modal handleClose={() => setOpenAddModal(false)}>
          <Form handleClose={() => setOpenAddModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default App;
