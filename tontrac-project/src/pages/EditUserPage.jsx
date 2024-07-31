// src/pages/EditUserPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getUserById, saveUser } from "../api";
import ActionButtonGroup from "../components/ActionButton";
import InputField from "../components/InputField";
import { Toaster } from "../components/ui/toaster";
import { useToast } from "../lib/use-toast";
import * as validations from "../lib/Validation";


function EditUserPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company_name: "",
    role: "",
  });

  useEffect(() => {
    if (userId) {
      getUserDetails(userId);
    }
  }, [userId]);

  const getUserDetails = async (userId) => {
    try {
      const userData = await getUserById(userId);
      setFormData(userData);
      reset(userData);
    } catch (error) {
      handleApiError(error, "fetching user details");
    }
  };

  const onSubmit = async (data) => {
    try {
      await saveUser(data, userId);
      toast({
        title: "User updated successfully",
        description: "The user details have been saved.",
        className: "bg-toast text-text",
      });
      setTimeout(() => {
        navigate("/users");
      }, 1500);
    } catch (error) {
      handleApiError(error, "saving user");
    }
  };

  const handleApiError = (error, operation) => {
    console.error(`Error ${operation}:`, error);
    toast({
      variant: "destructive",
      title: `Error ${operation}`,
      description: `There was a problem ${operation.toLowerCase()} the user details.`,
      className: "bg-destructive text-text",
    });
  };

  const handleCancel = () => {
    navigate("/users");
  };

  return (
    <div className="ml-3">
    
      <h1 className="py-8 text-text text-2xl text-center md:text-left md:ml-[-5px] md:text-3xl font-semibold">
        Edit User
      </h1>
      <div className="container mx-auto px-6 md:px-16 md:ml-[-70px]">
        <form className="text-text" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            id="name"
            label="Name"
            register={register}
            error={errors.name}
            errorMessage={errors.name?.message}
            validate={validations.validateName}
          />
          <InputField
            id="username"
            label="Username"
            register={register}
            error={errors.username}
            errorMessage={errors.username?.message}
            validate={validations.validateUsername}
          />
          <InputField
            id="email"
            label="Email Address"
            register={register}
            error={errors.email}
            errorMessage={errors.email?.message}
            validate={validations.validateEmail}
          />
          <InputField
            id="phone"
            label="Phone Number"
            register={register}
            error={errors.phone}
            errorMessage={errors.phone?.message}
            validate={validations.validatePhone}
          />
          <InputField
            id="website"
            label="Website"
            register={register}
            error={errors.website}
            errorMessage={errors.website?.message}
            validate={validations.validateWebsite}
          />
          <InputField
            id="company_name"
            label="Company Name"
            register={register}
            error={errors.company_name}
            errorMessage={errors.company_name?.message}
            validate={validations.validateCompanyName}
          />
          <InputField
            id="role"
            label="Role"
            register={register}
            error={errors.role}
            errorMessage={errors.role?.message}
            validate={validations.validateRole}
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
}

export default EditUserPage;
