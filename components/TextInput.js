const TextInput = ({ value, onChange , suggention }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder={`Generate a ${suggention} about:...`}
    />
  );
};

export default TextInput;