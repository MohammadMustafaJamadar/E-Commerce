import UserInfo from "../Form/UserInfo";

export default function  User(props) {
 
 const {user , setUseronLogin , setChecked , Checked} = props

  return (
    <>
    
    <UserInfo user={user} setUseronLogin={setUseronLogin} setChecked={setChecked} Checked={Checked} />

    </>
      );
}
