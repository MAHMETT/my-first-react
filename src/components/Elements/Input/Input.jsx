const Input = (props) => {
    const { type , placeholder , Name} = props;
    return (
        <input 
            type={type}
            className="text-sm border rounded w-full py-2 px-3 text-slate-200 placeholder:opacity-50" 
            placeholder={placeholder}
            name={Name}
        />
    )
}

export default Input