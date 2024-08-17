import { Link } from "react-router-dom"

export default function CommentLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/comment/${props.id}`}>
                <p>View comment</p>
            </Link>
        </>
    )
}