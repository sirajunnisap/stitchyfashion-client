import React, { useEffect, useState } from 'react';
import { getpaymenteUsers } from '../../../Services/Course/courseData';
import { useParams } from 'react-router-dom';
import { UserType, courseType, paymentType } from '../../../Models/Models';

function UsersList() {
    const { id } = useParams();
    const [course, setCourse] = useState<any[] | null>(null);

    useEffect(() => {
        const courseDetails = async () => {
            const courseData = await getpaymenteUsers(id);
            setCourse(courseData);
        };
        courseDetails();
    }, []);

    return (
        <div>
            <div className='flex flex-wrap items-center mt-10 ml-48'>
                {course && course.map((courseItem: paymentType) => (
                    <div key={courseItem._id} className='flex flex-wrap items-center mt-10'>
                        <div className="max-w-sm m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
                            <a href="#">
                                <img className="rounded-t-lg w-full h-[170px] object-cover" src={courseItem.selectedCourse.image} alt="" />
                            </a>
                            <div className="p-4 pt-2 w-[300px] h-[180px]">
                                <a href="#">
                                    <h2 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{courseItem.selectedCourse.title}</h2>
                                </a>
                                <p className="mb-1 text-sm font-sans text-gray-700 dark:text-gray-400">{courseItem.selectedCourse.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UsersList;