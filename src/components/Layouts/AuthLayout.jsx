import { Link } from "react-router-dom";
import "../../App.css"

const AuthLayout = (props) => {
  const { children , title , type } = props;
    return (
    <div className="flex justify-center min-w-screen items-center gap-4">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">
          {title}
          </h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
          </p>
          {children}
        
        {/* conditional ?: hanya dapat merender 2 */}
        {/* {type === 'Login' 
          ? 'Dont have an account?' 
          : 'Already have an account?'} */}

        {/* conditional && dapat merender lebih dari 2 */}
        {/* {type === 'Register' && (
          <Link
            className="font-bold text-blue-300" 
            to="/login">
              Login
          </Link>
        )}
        {type === 'Login' && (
          <Link
            className="font-bold text-blue-300" 
            to="/register">
              Register
        </Link>
        )} */}

        <Navigation type={type} />
      </div>
    </div>
    )
}

// Membuat component baru dan menggunakan conditional if else
const Navigation = ({type}) => {
    if (type === "Login") {
      return (
        <p
        className="w-full justify-center text-sm">
        Dont have an account?{" "}

          <Link
            className="font-bold text-blue-300" 
            to="/register">
              Register
          </Link>
        </p>
        )
      } else {
        return (
          <p
        className="w-full justify-center text-sm">
          Already have account?{" "}
        <Link
            className="font-bold text-blue-300" 
            to="/login">
              Login
        </Link>
        </p>
        )
      }
    }


export default AuthLayout