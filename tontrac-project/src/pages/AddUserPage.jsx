import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import ActionButtonGroup from "../components/ActionButton";
import InputField from "../components/InputField";
import { Toaster } from "../components/ui/toaster";
import { useToast } from "../lib/use-toast";
import * as validations from "../lib/Validation";
import { useNavigation } from "@/context/NavigationContext";
import { getUserById, saveUser } from "../api";

function AddUserPage() {
  const { navigate } = useNavigation();
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
      fetchUserData(userId);
    }
  }, [userId]);

  const fetchUserData = async (userId) => {
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
      showSuccessToast("User added successfully");
      setTimeout(() => {
        navigate("/users");
      }, 1500);
    } catch (error) {
      handleApiError(error, "saving user");
    }
  };

  const handleApiError = (error, operation) => {
    console.error(`Error ${operation}:`, error);
    showErrorToast(
      `Error ${operation}`,
      `There was a problem ${operation.toLowerCase()} the user details.`
    );
  };

  const showSuccessToast = (title) => {
    toast({
      title,
      description: "The user details have been saved.",
      className: "bg-toast text-text",
    });
  };

  const showErrorToast = (title, description) => {
    toast({
      variant: "destructive",
      title,
      description,
      className: "bg-toast text-text",
    });
  };

  const handleCancel = () => {
    navigate("/users");
  };

  return (
    <div className='min-h-screen bg-background'>
      <div className='px-6 md:px-16'>
        <h1 className='py-8 text-text text-2xl text-center md:text-left md:ml-[-70px] md:text-3xl font-semibold'>
          Add User
        </h1>
      </div>
      <div className='mx-auto px-6 md:px-16 md:ml-[-70px]'>
        <form className='text-text' onSubmit={handleSubmit(onSubmit)}>
          <InputField
            id='name'
            label='Name'
            register={register}
            error={errors.name}
            errorMessage={errors.name?.message}
            validate={validations.validateName}
          />
          <InputField
            id='username'
            label='Username'
            register={register}
            error={errors.username}
            errorMessage={errors.username?.message}
            validate={validations.validateUsername}
          />
          <InputField
            id='email'
            label='Email Address'
            register={register}
            error={errors.email}
            errorMessage={errors.email?.message}
            validate={validations.validateEmail}
          />
          <InputField
            id='phone'
            label='Phone Number'
            register={register}
            error={errors.phone}
            errorMessage={errors.phone?.message}
            validate={validations.validatePhone}
          />
          <InputField
            id='website'
            label='Website'
            register={register}
            error={errors.website}
            errorMessage={errors.website?.message}
            validate={validations.validateWebsite}
          />
          <InputField
            id='company_name'
            label='Company Name'
            register={register}
            error={errors.company_name}
            errorMessage={errors.company_name?.message}
            validate={validations.validateCompanyName}
          />
          <InputField
            id='role'
            label='Role'
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

export default AddUserPage;
