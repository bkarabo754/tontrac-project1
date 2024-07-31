import React from "react";
import { Label } from "./ui/label";

const InputField = ({ id, label, register, error, errorMessage, ...rest }) => {
  return (
    <div className="flex flex-col mb-4">
      <Label htmlFor={id} className="mb-1 text-text">
        {label}
      </Label>
      <input
        type="text"
        id={id}
        {...register(id, {
          required: `${label} is required`,
          validate: rest.validate,
        })}
        className={`border py-2 px-3 rounded-md w-full md:max-w-[600px] ${
          error ? "border-destructive" : "border-accent"
        } text-text bg-background-light focus:outline-none focus:ring focus:border-accent`}
        {...rest}
      />
      {error && (
        <span className="text-sm text-destructive mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
