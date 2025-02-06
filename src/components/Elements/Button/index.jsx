// Membuat Component Menggunakan Arrow Function
const Button = (props) => {
    const { children = '...', classname = 'bg-black'} = props;
    return (
    <button
        className={`flex justify-center p-3 ${classname} border border-white rounded-2xl text-white`}
        >
        {children}
        </button>
    )
}


export default Button;