import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import { useFormik } from "formik"
import * as Yup from "yup"

const FormLogin = () => {


  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
    password: Yup.string()
      .min(8,"Password minimal 8 karakter")
      .required("Password harus diisi")
  })

  const formik = useFormik({
    onSubmit: (values) => {

      localStorage.setItem("email" , values.email)
      localStorage.setItem("password" , values.password)

      console.log("Data : " , values)

    },
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
  })
  
    return (
        <form onSubmit={formik.onSubmit}>
          <InputForm
            label="Email" 
            type="email" 
            placeholder="example@gmail.com"
            name="email"
            values={formik.values.email}
            onChange={formik.handleChange}
          />
          <InputForm
            label="Password" 
            type="password" 
            placeholder="Enter your password"
            name="password"
            values={formik.values.password}
            onChange={formik.handleChange}
          />
          <Button
            className="w-full bg-blue-500"
            type="submit"
            >
              Login
              </Button>
        </form>
    )
}

export default FormLogin