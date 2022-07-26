import UserInfo from "../Form/UserInfo";

export default function  User(props) {
 
 const {user , setUseronLogin} = props

  return (
    <>
    
    <UserInfo user={user} setUseronLogin={setUseronLogin} />

    </>
      );
}
