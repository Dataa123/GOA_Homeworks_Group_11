const Button = ({ handleClick }) => {
    const styles = {
      button: {
        padding: "10px 20px",
        background: "#007BFF",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
      },
    };
    return (
      <button onClick={handleClick} style={styles.button}>
        Add Task
      </button>
    );
};
  
export default Button