import {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import {getAuth , createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
import {db} from '../../firebase.config'
import {setDoc , doc , serverTimestamp} from 'firebase/firestore'
import { toast } from 'react-toastify'
import {ReactComponent as ArrowToRightIcon} from '../../assets/svg/keyboardArrowRightIcon.svg'
import OAuth from './OAuth'
import visibilityIcon from '../../assets/svg/visibilityIcon.svg'

function SignUp() {

  const [showPassword, setshowPassword] = useState(false)
  const [formData, setformData] = useState({
    name:'',
    email:'',
    password:''
  })

  const {name ,email , password} = formData 
  const navigate = useNavigate()

  const onChange = (e , prevState) => {
    setformData({
      ...formData ,
      [e.target.id] : e.target.value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(name + password + email)
    try{
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth , email , password)
      const user = userCredential.user

      updateProfile(auth.currentUser , {
        displayName: name
      })

      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timeStamp = serverTimestamp()

      await setDoc(doc(db , 'users' , user.uid) , formDataCopy)


      navigate('/') 
    }
    catch(error){
      toast.error('something went wrong with registeration')
    }
  }



    return (
      <>
        <div className="pageContainer">
          <header>
            <p className="pageHeader">Welcome Back</p>
          </header>
          <main>
            <form onSubmit={onSubmit}> 
            <input 
                type="text"
                className='nameInput'
                placeholder='Name'
                id='name'
                defaultValue={name || ""}
                onChange={onChange}
              />
              <input 
                type="email"
                className='emailInput'
                placeholder='Email'
                id='email'
                defaultValue={email || " "}
                onChange={onChange}
              />

              <div className='passwordInputDiv'>
                <input
                  type={(showPassword)?'text' : 'password' }
                  className='passwordInput'
                  placeholder='password' 
                  id='password'
                  defaultValue={password || ""}
                  onChange={onChange}
                />
                <img 
                  src={visibilityIcon}
                  alt="show password"
                  className='showPassword'
                  onClick={() => setshowPassword((prevState) => !prevState)}
                />
              </div>

              <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>

              <div className="signUpBar">
                <p className="signUpText">
                  Sign Up
                </p> 
                <button className='signUpButton'>
                  <ArrowToRightIcon fill='#ffffff' width='34px' height='34px  ' />
                </button>
              </div>

            </form>
            <OAuth />
            <Link to='/sign-in' className='registerLink'>Sign in Instead</Link>

          </main>
        </div>
      </>
    )
  }
  
  export default SignUp