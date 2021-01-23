import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Element } from "store/elements";
import { AppState } from "store/rootReducer";
import { Form } from "components/Form";
import { List, ListElement } from "./styles";
import { deleteElement } from "store/elements";
import { useDispatch } from "react-redux";

export const ListContainer = ({ data }: any) => {
  const [obj, setObj] = useState({});
  const dispatch = useDispatch();
  const handleDelete = (id: number) => {
    dispatch(deleteElement(id));
  };
  return (
    <>
      <List>
        {data.map((item: any, index: number) => {
          return (
            <ListElement key={`${item.id}-${index}`}>
              <div>{item.id ? item.id : "id"}</div>
              <div>{item.date_from ? item.date_from : ""}</div>
              <div>{item.date_to ? item.date_to : ""}</div>
              <div>{item.date_time ? item.date_time : ""}</div>
              <div>{item.currency_name ? item.currency_name : ""}</div>
              <div>{item.currency_value ? item.currency_value : ""}</div>
              <div>{item.consent ? item.consent : ""}</div>
              <div>{item.tag ? item.tag.title : ""}</div>
              <div>
                {item.tags.map((tag: any, i: number) => (
                  <p>{tag.title}</p>
                ))}
              </div>
              <div>
                <button
                  onClick={() => {
                    setObj(item);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </ListElement>
          );
        })}
      </List>
      <Form object={obj ? obj : false} isEdit={true} />
    </>
  );
};
