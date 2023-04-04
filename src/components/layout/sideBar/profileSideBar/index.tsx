
import Avatar from "components/Avatar";
import { useSelector } from "react-redux";
import classes from "./profileSideBar.module.scss";
  
interface RootState {
  user: {
    profile: any
  
  };

}


const ProfileSideBar: React.FC = (): JSX.Element => {
  const profile = useSelector((state:RootState)=>state)?.user?.profile
console.log(profile , "profile")
  return <div className={classes.SideBar}>
     {   profile ?  (  profile.profile   ?   <img
                            alt="profile"
                            className={classes.profile}
                            src={process.env.BASE_URL + profile.profile}  />  : <Avatar char={profile.username.slice(0, 1)} />) : "" }
                 
    <h2>{profile?.username}</h2>
    </div>
};

export default ProfileSideBar;
