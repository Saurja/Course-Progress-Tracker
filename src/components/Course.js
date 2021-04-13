import "../styles/courses/courses.scss";

const Course = ({ Title, Completed, Total }) => {
    let progress = (Completed / Total) * 100;
    console.log(progress);
    return (
        <div className="course">
            <div className="left">
                <h2>{Title}</h2>
                <p>
                    [{Completed}/{Total}]
                </p>
                <a href="/course">
                    <button>Go to course</button>
                </a>
            </div>
            <div className="right">
                <h1>{Math.ceil(progress)}%</h1>
            </div>
        </div>
    );
};

export default Course;
