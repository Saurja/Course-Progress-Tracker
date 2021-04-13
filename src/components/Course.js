import "../styles/courses/courses.scss";

const Course = ({ courses }) => {
    return (
        <>
            {courses.map((course) => (
                <div className="course" key={course.id}>
                    <div className="left">
                        <h2>{course.title}</h2>
                        <p>
                            [{course.completed}/{course.total}]
                        </p>
                        <a href="/course">
                            <button>Go to Tracker</button>
                        </a>
                    </div>
                    <div className="right">
                        <h1>{(course.completed / course.total) * 100}%</h1>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Course;
