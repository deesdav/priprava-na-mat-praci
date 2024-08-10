import { Link } from "react-router-dom"

export default function CityLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/city/${props.id}`}>
                <p>View city</p>
            </Link>
        </>
    )
}