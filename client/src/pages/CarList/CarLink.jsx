import { Link } from "react-router-dom"

export default function CarLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/car/${props.id}`}>
                <p>View car</p>
            </Link>
        </>
    )
}