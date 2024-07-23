import { Link } from "react-router-dom"

export default function MovieLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/movie/${props.id}`}>
                <p>View movie</p>
            </Link>
        </>
    )
}