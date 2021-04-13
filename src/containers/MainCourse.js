import Course from "../components/Course";

import { useState } from "react";

import "../styles/courses/mainCourse.scss";

const Courses = () => {
    let [courses, setCourses] = useState([
        { id: 1, title: "DSA", completed: 10, total: 20 },
        { id: 2, title: "OS", completed: 17, total: 20 },
        { id: 3, title: "DBMS", completed: 12, total: 20 },
    ]);

    return (
        <div className="all--courses">
            <Course courses={courses} />
        </div>
    );
};

export default Courses;
