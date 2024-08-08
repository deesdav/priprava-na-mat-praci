import { Link } from "react-router-dom"

export default function SportteamLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/sportteam/${props.id}`}>
                <p>View sport team</p>
            </Link>
        </>
    )
}