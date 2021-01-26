import React, { useState, FC } from "react";
import { useSelector } from "react-redux";
import { Element } from "store/elements";
import { AppState } from "store/rootReducer";
import { EditForm } from "components/Form";
import { List, ListElement } from "./styles";
import { deleteElement } from "store/elements";
import { useDispatch } from "react-redux";
import { Modal } from "components/Modal";
import { Submit } from "components/Buttons"

export const ElementList: FC<any> = () => {
  const { elements, isPending } = useSelector(
    (state: AppState) => state.elementList
  );
  const [obj, setObj] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id: number | null) => {
    if (id) {
      dispatch(deleteElement(id));
    }
  };
  return (
    <>
      {!isPending ? (
        <>
          <List>
            {elements.map((item: any, index: number) => {
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
                      <p key={`${tag}-${i}`}>{tag.title}</p>
                    ))}
                  </div>
                  <div>
                    <Submit
                      onClick={() => {
                        setObj(item);
                        setEditModalOpen(true);
                      }}
                    >
                      Edit
                    </Submit>
                    <Submit
                      onClick={() => {
                        setDeleteItemId(item.id);
                        setDeleteModalOpen(true);
                      }}
                    >
                      Delete
                    </Submit>
                  </div>
                </ListElement>
              );
            })}
          </List>
          {deleteModalOpen && (
            <Modal handleClose={() => setDeleteModalOpen(false)}>
              <p>Are u sure?</p>
              <Submit
                onClick={() => {
                  handleDelete(deleteItemId);
                  setDeleteModalOpen(false);
                  setDeleteItemId(null);
                }}
              >
                Yes
              </Submit>
              <Submit
                onClick={() => {
                  setDeleteModalOpen(false);
                  setDeleteItemId(null);
                }}
              >
                No
              </Submit>
            </Modal>
          )}
          {editModalOpen && obj && (
            <Modal
              handleClose={() => {
                setEditModalOpen(false);
                setObj(false);
              }}
            >
              <EditForm
                handleClose={() => {
                  setEditModalOpen(false);
                  setObj(false);
                }}
                object={obj}
              />
            </Modal>
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};
