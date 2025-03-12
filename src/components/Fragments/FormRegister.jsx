import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormRegister = () => {
    return (
        <form action="">
        <InputForm
            label="Fullname" 
            type="text" 
            placeholder="Insert your name here..."
            name="fullname"
        />
        <InputForm
            label="Email" 
            type="email" 
            placeholder="example@gmail.com"
            name="email"
        />
        <InputForm
            label="Password" 
            type="password" 
            placeholder="Enter your password"
            name="password"
        />
        <Button
            classname="w-full bg-blue-500"
            >
            Register
        </Button>
        </form>
    )
}

export default FormRegister;