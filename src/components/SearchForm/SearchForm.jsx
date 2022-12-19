import React from "react";
import {Formik, Form, Field} from 'formik';
import {Button, Input, Span } from "./SearchForm.styled";


export const SearchForm = ({onSubmit}) => {

  const onFormicSubmit = (values, {resetForm}) => {
    console.log(values.query);
    console.log(typeof onSubmit);
    onSubmit(values.query);
    resetForm();
  }

  return (
    <Formik initialValues={{query: ''}} onSubmit={onFormicSubmit}>

      <Form>
        <Button type="submit">
          <Span>Search</Span>
        </Button>

        <Field
          as={Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
      </Form>
    </Formik>
  );
};
