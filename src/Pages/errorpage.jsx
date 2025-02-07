import { useRouteError } from "react-router-dom";

const ErrorPgae = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center min-w-screen items-center gap-4 flex-col">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-2">Sepertinya halaman kamu tuju tidak ada.</p>
            <p className="text-2xl">{error.statusText || error.message}</p>
        </div>
    ) 
}

export default ErrorPgae 