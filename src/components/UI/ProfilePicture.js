import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ProfilePicture.module.css";

const ProfilePicture = (props) => {
  return (
    <div className={classes.userProfileImg}>
      {props.hasProfilePicture ? (
        <img alt="user-img" src="/" />
      ) : (
        <FontAwesomeIcon icon="user" size="lg" color="gray" />
      )}
    </div>
  );
};

export default ProfilePicture;
