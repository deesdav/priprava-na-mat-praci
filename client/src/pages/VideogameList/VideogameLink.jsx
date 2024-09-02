import { Link } from "react-router-dom"

export default function VideogameLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/videogame/${props.id}`}>
                <p>View videogame</p>
            </Link>
        </>
    )
}