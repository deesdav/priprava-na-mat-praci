import { Link } from "react-router-dom"

export default function RestaurantLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/restaurant/${props.id}`}>
                <p>View restaurant</p>
            </Link>
        </>
    )
}