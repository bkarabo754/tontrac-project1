import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getPostById, updatePost } from "../api";
import ActionButtonGroup from "../components/ActionButton";
import InputField from "../components/InputField";
import { Toaster } from "../components/ui/toaster";
import useApiErrorHandler from "../hooks/useApiErrorHandler";
import * as validations from "../lib/Validation";
import { Toast } from "@/components/ui/toast";
import { useToast } from "react-toastify";

const EditPosts = () => {
  const { postId, userId } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { toast } = useToast();
  const handleApiError = useApiErrorHandler();

  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const fetchPostDetails = useCallback(
    async (postId) => {
      try {
        const postData = await getPostById(postId);
        setFormData(postData);
        reset(postData);
      } catch (error) {
        handleApiError(error, "fetching post details");
      }
    },
    [reset, handleApiError]
  );

  useEffect(() => {
    if (postId) {
      fetchPostDetails(postId);
    }
  }, [postId, fetchPostDetails]);

  const onSubmit = async (data) => {
    try {
      await updatePost(postId, data);
      Toast({
        title: "Post updated successfully",
        description: "The post details have been saved.",
        className: "bg-toast text-text",
      });
      setTimeout(() => {
        navigate(`/users/${userId}/posts`);
      }, 1500);
    } catch (error) {
      handleApiError(error, "saving post");
    }
  };

  const handleCancel = () => {
    navigate(`/users/${userId}/posts`);
  };

  return (
    <div className="min-h-screen bg-background ml-5">
      <div className="px-6 md:px-16">
        <h1 className="py-8 text-text text-2xl text-center md:text-left md:ml-[-70px] md:text-3xl font-semibold">
          Edit Post
        </h1>
      </div>
      <div className="mx-auto px-6 md:px-16 md:ml-[-70px]">
        <form className="text-text" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            id="title"
            label="Title"
            register={register}
            error={errors.title}
            errorMessage={errors.title?.message}
            validate={validations.validateTitle}
          />
          <InputField
            id="body"
            label="Body"
            register={register}
            error={errors.body}
            errorMessage={errors.body?.message}
            validate={validations.validateBody}
          />
          <ActionButtonGroup
            onSave={handleSubmit(onSubmit)}
            onCancel={handleCancel}
          />
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default EditPosts;
