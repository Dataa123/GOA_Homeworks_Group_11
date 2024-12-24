function ProfileCard(props){
    return (
      <div style={
        {
          display: "flex",
          flexDirection: "column"
        }
      }>
        <div style={
          {
            borderRadius: "8px",
            padding: "16px",
            width: "200px",
            textAlign: "center",
            boxShadow: "0 0px 10px #1a1a1a",
          }
        }>
          <p>{props.name}</p>
          <p>{props.age}</p>
          <p>{props.occupation}</p>
        </div>
      </div>
      
    )
}
  
export default ProfileCard;