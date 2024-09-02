import { Link } from "react-router-dom"

export default function PhotoLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/photo/${props.id}`}>
                <p>View photo</p>
            </Link>
        </>
    )
}