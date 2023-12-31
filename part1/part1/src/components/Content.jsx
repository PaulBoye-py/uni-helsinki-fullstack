import Part from "./Part";

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part name={props.parts[0].name} mark={props.parts[0].exercises}/>
            <Part name={props.parts[1].name} mark={props.parts[1].exercises}/>
            <Part name={props.parts[2].name} mark={props.parts[2].exercises}/>
        </div>
    )
}

export default Content