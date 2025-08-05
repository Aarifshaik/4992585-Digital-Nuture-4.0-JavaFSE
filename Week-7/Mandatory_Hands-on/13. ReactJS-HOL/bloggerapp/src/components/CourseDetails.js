import React from 'react';

const courses = [
    {CourseName:"Learn to lead a Peaceful Life",Tutor: "SAW"},
    {CourseName:"Accomplish your Fardh",Tutor:"SAW"},
    {CourseName:"Learn New Skills",Tutor:"Life"},
]

const CourseDetails = () => (
  <div>
    <h2>🎓 Course Details</h2>
    {courses.map((course)=>
        <div>
            <h4>Course Name: {course.CourseName}</h4>
            <h4>Tutor: {course.Tutor}</h4>
        </div>
    )}
  </div>
);

export default CourseDetails;
