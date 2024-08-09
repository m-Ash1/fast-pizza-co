function InputField({ type, name, label }) {
  return (
    <div className="flex">
      <label className="text-lg">{label}</label>
      <div>
        <input
          className="
          type={type}
          name={name}
          required
        />
      </div>
    </div>
  );
}

export default InputField;
