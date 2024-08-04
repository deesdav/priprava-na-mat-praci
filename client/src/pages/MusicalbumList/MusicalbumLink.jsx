import { Link } from "react-router-dom"

export default function MusicalbumLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/musicalbum/${props.id}`}>
                <p>View music album</p>
            </Link>
        </>
    )
}