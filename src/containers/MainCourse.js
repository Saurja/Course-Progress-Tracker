import Course from "../components/Course";

import "../styles/courses/mainCourse.scss";

const Courses = () => {
    return (
        <div className="all--courses">
            <Course Title="DSA" Completed={10} Total={20} />
            <Course Title="Operating System" Completed={2} Total={30} />
        </div>
    );
};

export default Courses;
