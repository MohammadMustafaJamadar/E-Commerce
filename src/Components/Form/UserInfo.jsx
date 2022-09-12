import { useNavigate } from 'react-router-dom';
import '../Css/Profile.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
axios.defaults.withCredentials = true

async function fetchDataOfuserFromBackEnd(){
  try {
   return await axios.get('http://localhost:9000/user',  { withCredentials: true });
  } catch (error) {
    throw error;
  }
  
} 


export default function UserInfo(props) {
  const { title,  } = props;
  const NavigateUser = useNavigate();
  const [user , setUser] = useState({})
  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetchDataOfuserFromBackEnd().then(async (res)=>{
      const loginedUser = await res.data;
      console.log(loginedUser,'react ke userke page me')
      dispatch({
        type : 'user_loggined',
        payload : true
      })
      setUser(loginedUser)
    }).catch((error)=>{
      console.log(error)
      NavigateUser('/login')
    })
  },[setUser, NavigateUser ])


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
                      </div>
                      <button className="btn btn-primary" onClick={(e)=>{
                        e.preventDefault();
                        axios.post('http://localhost:9000/logout',  { withCredentials: true });
                        setUser({})
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
