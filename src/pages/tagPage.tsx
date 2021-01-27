import { AddTagForm } from "components/Form";
import { TagList } from "components/Lists";
import { FormWrapper } from "./styles";
import { Heading, Subheading } from "components/Typography";
import React from "react";

export const TagPage = () => {
  return (
    <>
      <Heading>Tags</Heading>
      <TagList />
      <FormWrapper>
        <Subheading>Add new tag</Subheading>
        <AddTagForm />
      </FormWrapper>
    </>
  );
};
