import { useNavigate, useParams } from 'react-router-dom'
import userAxios from '../../Axios/userAxios';

function MailVerification() {
   const id= useParams()
   console.log(id);
   
 const  navigate = useNavigate()
const login=()=>{
    
    userAxios.post(`/verifyEmail/${id.id}`)
    navigate('/login')
}
    
  return (
    <div>
       <div className='h-screen w-fulltop-0 flex items-center justify-center' >
            <section className="signUp "  >
                <div className="container_login ">
                    <div className="signUp-content  ">
                        <div className="signUp-form ">
                            <h2 className="form-title text-lavender">Your mail is successfully verified  </h2>
                            <h3>Thank you for verify your mail with us this site is best plat form for you and no data drain issue so dont scare about that</h3>
                            <div className='flex justify-center items-center mt-7'>
                            <button onClick={login} className="bg-lavender hover:bg-blue-700 text-green font-bold py-2 px-4 rounded-full  ">
                               Login
                            </button>
                            </div>
                            

                        </div>
                        <div className="signUp-image">
                            <figure>
                                <img src='https://i.pinimg.com/564x/ac/4c/b7/ac4cb75d1ee332212a369aebffe2abd4.jpg' alt="sing up image" />
                            </figure>
                           
                        </div>
                    </div>
                </div>
                
            </section>
            </div>
    </div>
  )
}

export default MailVerification
    
