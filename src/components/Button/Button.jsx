export default function Button({type, classNames, onClick, children}){

    return(
        <button
            onClick={onClick}
            className={classNames}
            type={type}
        >
            {children}
        </button>
    )
}