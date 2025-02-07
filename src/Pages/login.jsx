import AuthLayout from "../components/Layouts/AuthLayout"
import FormLogin  from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return(
        <AuthLayout title='Login'>
            <FormLogin />
            <p
                className="w-full justify-center text-sm">
                Dont have an account?{" "}
                <Link
                    className="font-bold text-blue-300" 
                    to="/register">
                    Register
                </Link>
                </p>
        </AuthLayout>
    )
}

export default LoginPage