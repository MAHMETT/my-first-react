const Label = (props) => {
    const { htmlFor , children , id} = props;
    return (
        <label
            id={id}
            htmlFor={htmlFor} 
            className="block text-slate-400 text-sm font-bold mb-2">
            {children}
        </label>
    )
}

export default Label