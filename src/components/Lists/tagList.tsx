import React, { useState, FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store/rootReducer";
import { EditTagForm } from "components/Form";
import { List, ListElement } from "./styles";
import { useDispatch } from "react-redux";
import { Modal } from "components/Modal";
import { deleteTag } from "store/tags";
import { Submit } from "components/Buttons"

export const TagList: FC<any> = () => {
  const { tags, isPending } = useSelector((state: AppState) => state.tagList);
  const [obj, setObj] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id: number | null) => {
    if (id) {
      dispatch(deleteTag(id));
    }
  };
  return (
    <>
      {!isPending ? (
        <>
          <List>
            {tags.map((item: any, index: number) => {
              return (
                <ListElement key={`${item.id}-${index}`}>
                  <div>{item.id ? item.id : "id"}</div>
                  <div>{item.title ? item.title : "null title"}</div>
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
              <EditTagForm
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
