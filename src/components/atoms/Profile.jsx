import IconUser from "../../assets/header/my-profile.svg";

export default function Profile() {
  return (
    <div className="flex items-center ">
      <img src={IconUser} />
      <span>My profile</span>
    </div>
  );
}
