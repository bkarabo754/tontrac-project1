import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "@/components/InputField";
import { Textarea } from "@/components/ui/textarea";
import ActionButtonGroup from "@/components/ActionButton";
import * as validations from "../lib/Validation";
import { addPost } from "@/api";
import useApiErrorHandler from "../hooks/useApiErrorHandler";
import useToastNotification from "../hooks/useToastNotificationHook";

const AddPosts = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleApiError = useApiErrorHandler();
  const showSuccessToast = useToastNotification();

  const onSubmit = async (data) => {
    try {
      const postData = {
        title: data.title,
        body: data.body,
        userId: userId,
      };
      await addPost(postData);
      showSuccessToast("Post added successfully");
      setTimeout(() => {
        navigate(`/users/${userId}/posts`);
      }, 1500);
    } catch (error) {
      handleApiError(error, "saving user");
    }
  };

  const handleCancel = () => {
    navigate(`/users/${userId}/posts`);
  };

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-text font-semibold text-3xl">Add Post</h1>
      </div>
      <InputField
        id="title"
        label="Title"
        register={register}
        error={errors.title}
        errorMessage={errors.title?.message}
        validate={validations.validateTitle}
      />
      <div>
        <p className="text-text font-semibold ">Body</p>
      </div>
      <Textarea
        id="body"
        label="Body"
        register={register}
        error={errors.body}
        errorMessage={errors.body?.message}
        validate={validations.validateBody}
        className="h-60 w-[600px]"
      />
      <div className="text-text">
        <ActionButtonGroup
          onSave={handleSubmit(onSubmit)}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default AddPosts;
