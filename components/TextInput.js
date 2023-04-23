const TextInput = ({ value, onChange, suggention }) => {
  return (
    <input
      autoComplete="false"
      type="text"
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder={`What do you want to generate about...?`}
    />
  );
};

export default TextInput;
