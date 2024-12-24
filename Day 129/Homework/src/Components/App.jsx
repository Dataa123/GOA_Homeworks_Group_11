import ProfileCard from "./ProfileCard.jsx";
import ProfileList from "./ProfileList.jsx";

const App = () => {
  return (
    <>
      <ProfileList users={[
        {name: "Data", age: 17, occupation: "Self Improvement"}, 
        {name: "Erekle", age: 14, occupation: "Singing"},
        {name: "Andria", age: 16, occupation: "Erekle"},
        {name: "Atuka", age: 16, occupation: "Me"},
        ]} />
    </>
  )
}

export default App;