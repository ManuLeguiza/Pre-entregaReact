import spinner from "./spinner.gif"

export const Spinner = () => {
    return (
        <div>
            <img
             src={spinner} 
             alt="loading.."
             style={{width: "400px", margin: "auto", display: "block"}}
             />
        </div>
    )
}