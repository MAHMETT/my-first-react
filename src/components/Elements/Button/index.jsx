// Membuat Component Menggunakan Arrow Function
const Button = ({ children = '...', className = 'bg-black', onClick, type = 'button'}) => {
    const handleClick = typeof onClick === 'function' ? onclick : () => {};
    return (
    <button
        className={`flex justify-center p-3 ${className} border border-white rounded-2xl text-white`}
        onClick={handleClick}
        type={type}
        >
        {children}
        </button>
    )
}


export default Button;