import { Link } from "react-router-dom"

export default function ProductLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/product/${props.id}`}>
                <p>View product</p>
            </Link>
        </>
    )
}