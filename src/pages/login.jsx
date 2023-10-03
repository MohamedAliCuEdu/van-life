// react component:
import {Link, useSearchParams, useNavigate} from "react-router-dom";
import {useState} from "react";

// style files:
import "../style/pages/sign.scss";

function LoginPage() {

  const searchParam = useSearchParams();
  const logMsg = searchParam.get("msg");


  const [loginForm, setLoginForm] = useState({email: "", password:""})

    function handleChange(e){
      const {name, value} = e.target;
      setLoginForm(prev => ({...prev, [name]: value}))
      // console.log(loginForm);
    }

    const navigate = useNavigate();

    function handleSubmit(e){
      e.preventDefault();
      console.log(loginForm);
      navigate("/vans")
    }
  return (
    <main className="login-page page-content">
      <h1>sign in to your account</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="feilds">
          <input type="email" name="email" id="email" onChange={handleChange} />
          <input type="password" name="password" id="password" onChange={handleChange} />
        </div>
        <input type="submit" value="sign in"/>
      </form>
      <h3>dont't have an account?
        <Link to="signup">
          create one now
        </Link>
      </h3>
      {
        logMsg? <h1>{logMsg}</h1> : null
      }
    </main>
  );
}

export default LoginPage;