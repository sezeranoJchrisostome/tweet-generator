const TextInput = ({ value, onChange, suggention }) => {
  return (
    <input
      autoComplete="false"
      type="text"
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder={`What do you want to tweet about...?`}
    />
  );
};

export default TextInput;
