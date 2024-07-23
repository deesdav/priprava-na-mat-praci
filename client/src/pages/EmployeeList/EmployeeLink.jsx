import { Link } from "react-router-dom"

export default function EmployeeLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/employee/${props.id}`}>
                <p>View employee</p>
            </Link>
        </>
    )
}