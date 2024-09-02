import { Link } from "react-router-dom"

export default function PodcastLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/podcast/${props.id}`}>
                <p>View podcast</p>
            </Link>
        </>
    )
}