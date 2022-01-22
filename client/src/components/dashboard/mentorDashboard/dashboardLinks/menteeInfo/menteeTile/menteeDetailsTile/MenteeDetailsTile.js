import React from "react";

const MenteeDetailsTile = ({ mentee, semesters }) => {
    return (
        <div className="w-full p-3 rounded-md mt-2 bg-white">
            <div className="flex items-start">
                <div className="flex flex-col w-1/3">
                    <div className="flex items-center">
                        <div className="mr-7">
                            <img
                                className="w-24 h-24 rounded-full"
                                src={mentee.avatar.url}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col flex-grow gap-y-1">
                            <h5 className="font-semibold">{`${mentee.firstname} ${mentee.middlename} ${mentee.lastname}`}</h5>
                            <div className="flex items-center">
                                <h6>{mentee.email}</h6>
                                <div className="ml-2 mr-2 w-1 h-1 rounded-full bg-black"></div>
                                <h6>{mentee.phone_no}</h6>
                            </div>
                            <div className="w-full bg-gray-400 h-0.5"></div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h6 className="text-gray-400">DEPARTMENT</h6>
                                    <h6 className="font-semibold">{mentee.department}</h6>
                                </div>
                                <div>
                                    <h6 className="text-gray-400">PROGRAMME</h6>
                                    <h6 className="font-semibold">{mentee.programme}</h6>
                                </div>
                                <div>
                                    <h6 className="text-gray-400">SEMESTER</h6>
                                    <h6 className="font-semibold">{mentee.semester}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-3 gap-4">
                        <h5 className="col-span-3 font-semibold text-gray-400">PERSONAL DETAILS</h5>
                        <div>
                            <h6 className="text-gray-400">ENROLLMENT YEAR</h6>
                            <h6 className="font-semibold">{mentee.enrollment_year}</h6>
                        </div>
                        <div>
                            <h6 className="text-gray-400">ADDRESS</h6>
                            <h6 className="font-semibold">{mentee.address}</h6>
                        </div>
                        <div>
                            <h6 className="text-gray-400">GENDER</h6>
                            <h6 className="font-semibold">{mentee.gender}</h6>
                        </div>
                        <div>
                            <h6 className="text-gray-400">BLOOD GROUP</h6>
                            <h6 className="font-semibold">{mentee.blood_group}</h6>
                        </div>
                        <div>
                            <h6 className="text-gray-400">HOME PLACE</h6>
                            <h6 className="font-semibold">{mentee.home_place}</h6>
                        </div>
                        <div>
                            <h6 className="text-gray-400">FAMILY DETAILS</h6>
                            <h6 className="font-semibold">{mentee.family_details}</h6>
                        </div>
                        <div>
                            <h6 className="text-gray-400">HOBBIES</h6>
                            <h6 className="font-semibold">{mentee.hobbies}</h6>
                        </div>
                        <div>
                            <h6 className="text-gray-400">GUARDIAN NAME</h6>
                            <h6 className="font-semibold">{mentee.guardian_name}</h6>
                        </div>
                        <div>
                            <h6 className="text-gray-400">GUARDIAN PH NO</h6>
                            <h6 className="font-semibold">{mentee.guardian_ph_no}</h6>
                        </div>
                        <div>
                            <h6 className="text-gray-400">GUARDIAN ADDRESS</h6>
                            <h6 className="font-semibold">{mentee.guardian_address}</h6>
                        </div>
                        {mentee.hostel_name === "" ? (
                            <h6 className="col-span-3 text-gray-400 font-semibold">
                                NOT HOSTEL BORDER
                            </h6>
                        ) : (
                            <h6 className="col-span-3 text-gray-400 font-semibold">
                                HOSTEL BORDER
                            </h6>
                        )}
                        {mentee.hostel_name === "" ? (
                            <div>
                                <h6 className="text-gray-400">RESPONSIBLE CONTACT PERSON</h6>
                                <h6 className="font-semibold">
                                    {mentee.responsible_contact_person_at_residence}
                                </h6>
                            </div>
                        ) : (
                            <div>
                                <h6 className="text-gray-400">HOSTEL NAME</h6>
                                <h6 className="font-semibold">{mentee.hostel_name}</h6>
                            </div>
                        )}
                        {mentee.hostel_name === "" ? (
                            <div>
                                <h6 className="text-gray-400">CONTACT NO. CONTACT PERSON</h6>
                                <h6 className="font-semibold">
                                    {mentee.contact_no_of_contact_person}
                                </h6>
                            </div>
                        ) : (
                            <div>
                                <h6 className="text-gray-400">WARDEN NAME</h6>
                                <h6 className="font-semibold">{mentee.warden_name}</h6>
                            </div>
                        )}
                        {mentee.hostel_name === "" ? (
                            <div>
                                <h6 className="text-gray-400">RESIDENCE ADDRESS</h6>
                                <h6 className="font-semibold">{mentee.residence_address}</h6>
                            </div>
                        ) : (
                            <div>
                                <h6 className="text-gray-400">ASST. WARDEN NAME</h6>
                                <h6 className="font-semibold">{mentee.asst_warden_name}</h6>
                            </div>
                        )}
                        {mentee.hostel_name && (
                            <div>
                                <h6 className="text-gray-400">WARDEN PH NO.</h6>
                                <h6 className="font-semibold">{mentee.warden_ph_no}</h6>
                            </div>
                        )}
                        {mentee.hostel_name && (
                            <div>
                                <h6 className="text-gray-400">ASST. WARDEN PH NO.</h6>
                                <h6 className="font-semibold">{mentee.asst_warden_ph_no}</h6>
                            </div>
                        )}
                    </div>
                </div>
                <div className="ml-5 px-5 w-2/3 grid grid-cols-2 gap-3 border-l-2">
                    <h5 className="col-span-2 font-semibold text-gray-400">SEMESTER DETAILS</h5>
                    {semesters.map((semester) => {
                        return (
                            <div key={semester._id} className="mb-7">
                                <h5 className="mb-1 font-semibold">
                                    Semester - {semester.semester}
                                </h5>
                                <table className="items-center w-full border border-solid border-gray-200">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                                Code
                                            </th>
                                            <th className="px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                                Title
                                            </th>
                                            <th className="px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                                Credit
                                            </th>
                                            <th className="px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                                Type
                                            </th>
                                            <th className="px-6 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                                Grade
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {semester.courses.map((course, index) => {
                                            return (
                                                <tr className="border-b" key={index}>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                                        {course.code}
                                                    </td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                                        {course.title}
                                                    </td>
                                                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                                        {course.credit}
                                                    </td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                                        {course.type}
                                                    </td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                                        {course.grade}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MenteeDetailsTile;
