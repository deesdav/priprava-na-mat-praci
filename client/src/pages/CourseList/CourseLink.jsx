import { Link } from "react-router-dom"

export default function CourseLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/course/${props.id}`}>
                <p>View course</p>
            </Link>
        </>
    )
}