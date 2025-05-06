export default function InputTexto({label, id, ...rest}) {
    return (
        <div>
            {label}
            <input type="text" id={id} {...rest}/>
        </div>
    )
}