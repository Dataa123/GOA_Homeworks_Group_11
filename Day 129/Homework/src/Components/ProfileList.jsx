import ProfileCard from "./ProfileCard";

function ProfileList(props){
    return (
      <div>
        {
            props.users.map((obj, i) => {
                return (
                    <ProfileCard key={i} {...obj} />
                );
            })
        }
      </div>
    );
}
  
export default ProfileList;