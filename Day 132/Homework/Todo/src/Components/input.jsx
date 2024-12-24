const InputField = ({ inputValue, handleInputValue }) => {
    const styles = {
      input: {
        padding: "10px",
        width: "200px",
        margin: "10px",
      },
    };
    return (
      <input
          value={inputValue}
          onChange={(e) => handleInputValue(e.target.value)}
          type="text"
          placeholder="Enter Task: "
          style={styles.input}
      />
    );
};
  
export default InputField