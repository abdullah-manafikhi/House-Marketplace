import {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import {ReactComponent as ArrowToRightIcon} from '../../assets/svg/keyboardArrowRightIcon.svg'
import OAuth from './OAuth';
import visibilityIcon from '../../assets/svg/visibilityIcon.svg'

function SignIn() {

  const [showPassword, setshowPassword] = useState(false)
  const [formData, setformData] = useState({
    email:'',
    password:''
  })

  const onChange = (e) => {
    setformData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }

  const {email , password} = formData 
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    console.log(email + password)
    e.preventDefault()
    try{
      const auth = getAuth()

    const userCredential = await signInWithEmailAndPassword(auth , email , password)
    if(userCredential){
      navigate('/profile')
    }
    }
    catch(error){
      toast.error('bad user credential')
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
                type="email"
                className='emailInput'
                placeholder='Email'
                id='email'
                defaultValue={email || ""}
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

              <div className="signInBar">
                <p className="signInText">
                  Sign In
                </p> 
                <button className='signInButton'>
                  <ArrowToRightIcon fill='#ffffff' width='34px' height='34px  ' />
                </button>
              </div>
            </form>
            <OAuth />
            <Link to='/sign-up' className='registerLink'>Sign Up Instead</Link>

          </main>
        </div>
      </>
    )
  }
  
  export default SignIn