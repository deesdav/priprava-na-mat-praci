import { Link } from "react-router-dom"

export default function PrescriptionLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/prescription/${props.id}`}>
                <p>View prescription</p>
            </Link>
        </>
    )
}