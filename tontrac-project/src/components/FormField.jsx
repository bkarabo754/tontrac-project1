import React from 'react';
import { Label } from '../components/ui/label';

const InputField = ({ id, label, register, error, errorMessage, validate }) => {
  return (
    <div className="flex flex-col mb-3">
      <div className="mb-1">
        <Label htmlFor={id}>{label}</Label>
      </div>
      <input
        type="text"
        id={id}
        {...register(id, { required: `${label} is required`, validate })}
        className={`border py-2 px-3 rounded-md w-full md:w-[600px] ${error ? 'border-destructive' : 'border-white'} text-text bg-background-light`}
      />
      {error && <span className="text-destructive">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
