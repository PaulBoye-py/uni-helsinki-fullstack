import Part from "./Part";

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part name={props.part1} mark={props.exercises1}/>
            <Part name={props.part2} mark={props.exercises2}/>
            <Part name={props.part3} mark={props.exercises3}/>
        </div>
    )
}

export default Content