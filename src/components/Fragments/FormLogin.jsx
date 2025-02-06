import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormLogin = () => {
    return (
        <form action="">
          <InputForm
            label="Email" 
            type="email" 
            placeholder="example@gmail.com"
            Name="email"
          />
          <InputForm
            label="Password" 
            type="password" 
            placeholder="Enter your password"
            Name="password"
          /><InputForm
          label="email" 
          type="email" 
          placeholder="example@gmail.com"
          Name="email"
        />
          <Button
            classname="w-full bg-blue-500"
            >
              Login
              </Button>
        </form>
    )
}

export default FormLogin;