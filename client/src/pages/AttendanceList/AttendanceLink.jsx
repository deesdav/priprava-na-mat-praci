import { Link } from "react-router-dom"

export default function AttendanceLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/attendance/${props.id}`}>
                <p>View attendance</p>
            </Link>
        </>
    )
}