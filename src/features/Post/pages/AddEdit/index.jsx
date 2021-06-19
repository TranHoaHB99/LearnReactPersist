import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Container } from "reactstrap";
import InputField from "../../../../custom-field/InputField";
import {getPost} from '../../postSlice';

const AddEditPost = (props) => {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();


  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost(props.match.params.productId))
    },[dispatch])



  const onSubmit = (data) => console.log(data, errors);
  console.log(props);
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="name"
          label="Title"
          control={control}
          errors={errors}
        />
        <InputField
          name="body"
          label="Body"
          control={control}
          errors={errors}
        />
        <Button type="submit" color="primary">Submit</Button>
      </form>
    </Container>
  );
};

export default AddEditPost;
