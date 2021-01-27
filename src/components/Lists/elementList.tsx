import React, { useState, FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store/rootReducer";
import { EditForm } from "components/Form";
import { List, ListElement, BtnMargin, ButtonsWrapper } from "./styles";
import { deleteElement } from "store/elements";
import { useDispatch } from "react-redux";
import { Modal } from "components/Modal";
import { Submit } from "components/Buttons";

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
            <ListElement className={"header"}>
              <div>Id</div>
              <div>Date from</div>
              <div>Date to</div>
              <div>Datetime</div>
              <div>Currency</div>
              <div>Value</div>
              <div>Consent</div>
              <div>Tag</div>
              <div>Tags</div>
              <div>Actions</div>
            </ListElement>
            {elements.map((item: any, index: number) => {
              return (
                <ListElement key={`${item.id}-${index}`}>
                  <div>{item.id ? item.id : "null"}</div>
                  <div>{item.date_from ? item.date_from : "null"}</div>
                  <div>{item.date_to ? item.date_to : "null"}</div>
                  <div>{item.date_time ? item.date_time : "null"}</div>
                  <div>{item.currency_name ? item.currency_name : "null"}</div>
                  <div>
                    {item.currency_value ? item.currency_value : "null"}
                  </div>
                  <div>{item.consent ? item.consent : "null"}</div>
                  <div>{item.tag ? item.tag.title : "null"}</div>
                  <div>
                    {item.tags.map((tag: any, i: number) => (
                      <p key={`${tag}-${i}`}>{tag.title}</p>
                    ))}
                  </div>
                  <ButtonsWrapper>
                    <BtnMargin>
                      <Submit
                        onClick={() => {
                          setObj(item);
                          setEditModalOpen(true);
                        }}
                      >
                        Edit
                      </Submit>
                    </BtnMargin>
                    <Submit
                      onClick={() => {
                        setDeleteItemId(item.id);
                        setDeleteModalOpen(true);
                      }}
                    >
                      Delete
                    </Submit>
                  </ButtonsWrapper>
                </ListElement>
              );
            })}
          </List>
          {deleteModalOpen && (
            <Modal handleClose={() => setDeleteModalOpen(false)}>
              <p>Are you sure?</p>
              <ButtonsWrapper>
                <BtnMargin>
                  <Submit
                    onClick={() => {
                      handleDelete(deleteItemId);
                      setDeleteModalOpen(false);
                      setDeleteItemId(null);
                    }}
                  >
                    Yes
                  </Submit>
                </BtnMargin>
                <Submit
                  onClick={() => {
                    setDeleteModalOpen(false);
                    setDeleteItemId(null);
                  }}
                >
                  No
                </Submit>
              </ButtonsWrapper>
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
