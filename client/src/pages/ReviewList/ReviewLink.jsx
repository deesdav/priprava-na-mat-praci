import { Link } from "react-router-dom"

export default function ReviewLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/review/${props.id}`}>
                <p>View review</p>
            </Link>
        </>
    )
}