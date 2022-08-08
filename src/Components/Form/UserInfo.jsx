import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Profile.css'

export default function UserInfo(props) {
  const { title , user , setUseronLogin , setChecked , IsUserLoggedIn   } = props;

  const NavigateUser = useNavigate();

  useEffect(()=>{

    if(IsUserLoggedIn === false){
      NavigateUser("/login");
    }
  
   } , [IsUserLoggedIn ,NavigateUser])
  
  const HandelClick = async()=>{
    
    
   await setChecked((localStorage.setItem("PreviousUser" , JSON.stringify( user))));
    
    
  }

  

  return (
    <>
    
    <div>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          className="img-radius"
                          alt="User-Profile"
                        />
                      </div>
                      <h6 className="f-w-600">{title}</h6>
                      <p>Web Designer</p>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16">
                        {user.name}
                      </i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">
                            {user.email}
                          </h6>
                        </div>
                      </div>
                      <div className='mb-3 for-check'>
                      <input type="checkbox"  onClick={HandelClick} className="form-check-input" id="SaveInfo"/>
                     <label className="form-check-label"  htmlFor="SaveInfo">Save Info</label>
                      </div>
                      <button className="btn btn-primary" onClick={()=>{
                        setUseronLogin(localStorage.removeItem("Logginuser") || {})
                        NavigateUser("/login")
                      }}>LogOut</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </>
  )
}
