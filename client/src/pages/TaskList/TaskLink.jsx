import { Link } from "react-router-dom"

export default function TaskLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/task/${props.id}`}>
                <p>View task</p>
            </Link>
        </>
    )
}