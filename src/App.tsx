import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ListContainer } from "components/ListContainer";
import { useDispatch, useSelector } from "react-redux";
import { addNewElement, fetchElementList } from "store/elements";
import { AppState } from 'store/rootReducer';
import { Form } from "components/Form"
function App() {
  const dispatch = useDispatch();
  const {elements, isPending} = useSelector((state: AppState) => state.elementList)
  const handleClick = () => {

    dispatch(addNewElement({date_from: '2020-01-20', date_to: '2020-01-20', date_time: '2020-01-20 15:23', tag: 1, tags: [{id:1}, {id: 2}]}));
  }
  useEffect(() => {
    dispatch(fetchElementList());
  }, [dispatch]);
  return (
    <div className="App">
      {!isPending && <ListContainer data={elements} />}
    </div>

  );
}

export default App;
