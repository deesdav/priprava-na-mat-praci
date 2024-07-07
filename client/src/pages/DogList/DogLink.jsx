import { Link } from "react-router-dom"

export default function DogLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/dog/${props.id}`}>
                <p>View dog</p>
            </Link>
        </>
    )
}