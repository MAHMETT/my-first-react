import AuthLayout from "../components/Layouts/AuthLayout"
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return(
        <AuthLayout title='Register'>
            <FormRegister />
            <p
                className="w-full justify-center text-sm">
                Have an account?{" "}
                <Link
                    className="font-bold text-blue-300" 
                    to="/login">
                    Login
                </Link>
                </p>
        </AuthLayout>
    )
}

export default RegisterPage