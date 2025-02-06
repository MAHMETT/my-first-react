import Label from "./Label"
import Input from "./Input"

const InputForm = (props) => {
    const {label , Name , type , placeholder} = props;
    return (
        <div className="mb-6">
            <Label htmlFor={Name}>{label}</Label>
            <Input name={Name} type={type} placeholder={placeholder}/>
        </div>
    )
    
}

export default InputForm