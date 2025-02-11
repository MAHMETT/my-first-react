// Membuat Component Menggunakan Arrow Function
const Button = (props) => {
    const { children = '...', className = 'bg-black'} = props;
    return (
    <button
        className={`flex justify-center p-3 ${className} border border-white rounded-2xl text-white`}
        >
        {children}
        </button>
    )
}


export default Button;