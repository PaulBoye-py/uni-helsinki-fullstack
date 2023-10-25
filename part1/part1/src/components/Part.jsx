const Part = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.name} {props.mark}</p>
        </div>
    )
}

export default Part