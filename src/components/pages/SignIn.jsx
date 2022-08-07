import {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowToRightIcon} from '../../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../../assets/svg/visibilityIcon.svg'

function SignIn() {

  const [showPassword, setshowPassword] = useState(false)
  const [formData, setformData] = useState({
    email:'',
    password:''
  })

  const onChange = (e , prevState) => {
    setformData({
      ...prevState,
      [e.target.id] : e.target.value
    })
  }

  const {email , password} = formData 
  const navigate = useNavigate()

    return (
      <>
        <div className="pageContainer">
          <header>
            <p className="pageHeader">Welcome Back</p>
          </header>
          <main>
            <form> 
              <input 
                type="email"
                className='emailInput'
                placeholder='Email'
                id='email'
                value={email}
                onChange={onChange}
              />

              <div className='passwordInputDiv'>
                <input
                  type={(showPassword)?'text' : 'password' }
                  className='passwordInput'
                  placeholder='password' 
                  id='password'
                  value={password}
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

            <Link to='/sign-up' className='registerLink'>Sign Up Instead</Link>

          </main>
        </div>
      </>
    )
  }
  
  export default SignIn