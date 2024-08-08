import { Link } from "react-router-dom"

export default function PlaylistLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/playlist/${props.id}`}>
                <p>View playlist</p>
            </Link>
        </>
    )
}