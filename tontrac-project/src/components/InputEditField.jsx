const InputField = ({ id, label, register, error, errorMessage, validate }) => (
  <div className="flex flex-col mb-3">
    <label htmlFor={id} className="mb-1">
      {label}
    </label>
    <input
      id={id}
      type="text"
      {...register(id, { required: `${label} is required`, validate })}
      className={`border py-2 px-3 rounded-md w-full md:w-[600px] ${
        error ? "border-destructive" : "border-white"
      } text-text bg-background-light`}
    />
    {error && <span className="text-destructive">{errorMessage}</span>}
  </div>
);

export default InputField;
