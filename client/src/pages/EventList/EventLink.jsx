import { Link } from "react-router-dom"

export default function EventLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/event/${props.id}`}>
                <p>View event</p>
            </Link>
        </>
    )
}