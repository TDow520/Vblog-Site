import { useRouteError } from "react-router-dom";


function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return (
        <div id='error-page' className="flex-row text-center">
            <h1 className="font-bold text-5xl m-10">Oops!</h1>
            <p className="m-10">Sorry, an unexpected error has occured.</p>
            <p className="m-10">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;