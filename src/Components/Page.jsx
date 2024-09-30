import React, { useState } from 'react';
import Search from '../assets/SearchOutline.png';

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [profile, setProfile] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [department, setDepartment] = useState('');
    const [members, setMembers] = useState([]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSave = () => {
       
        const newMember = {
            name,
            profile,
            email,
            role,
            department,
        };
        setMembers([...members, newMember]);
        setName('');
        setProfile('');
        setEmail('');
        setRole('');
        setDepartment('');
        toggleModal(); 
    };

    return (
        <>
            <div className='-mt-60 ml-60'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold text-3xl'>Team</h1>
                    <div className='mr-32 flex gap-10 cursor-pointer text-lg'>
                        <h1
                            className='w-auto bg-green-500 p-1 rounded-md text-white'
                            onClick={toggleModal}
                        >
                            + Add Members
                        </h1>
                        <div className='flex items-center w-64 p-1 rounded-md bg-gray-400 text-white '>
                            <img src={Search} alt="Search Icon" />
                            <h1 className='ml-5'>Search Members</h1>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-[600px] p-8 rounded-lg shadow-lg">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-2xl font-bold mb-4">Add User</h2>
                            <button
                                className="mt-4 text-red-500 hover:text-red-600"
                                onClick={toggleModal}
                            >
                                X
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='text-black text-xl outline-none'
                            required
                        />
                        <hr />

                        <h2 className='text-gray-400 mt-5'>Profile Picture</h2>
                        <input type="file" className='text-black text-xl outline-none' placeholder='Upload Profile Picture'
                         value={profile}
                         onChange={(e) => setProfile(e.target.value)}
                         required
                        />
                        <h2 className='mt-5'>Email</h2>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='text-black mt-2 text-xl outline-none border p-1'
                            placeholder='examplemail'
                        />

                        <h2 className='mt-5'>Department</h2>

                            <div className='flex gap-10 mt-5'
                            type="text"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            >
                            <h2 className='w-20 rounded p-1 bg-green-400 cursor-pointer  '>Finance</h2>
                            <h2  className='w-20 rounded p-1 bg-green-400 cursor-pointer '>R&D</h2>
                            <h2  className='w-20 rounded p-1 bg-green-400 cursor-pointer '>IT</h2>
                            <h2  className='w-20 rounded p-1 bg-green-400 cursor-pointer '>Operations</h2>
                            <h2  className='w-20 rounded p-1 bg-green-400 cursor-pointer '>Marketing</h2>
                            </div>

                            <h2>{department}</h2>

                        <h2 className='mt-5'>Roles</h2>
                        <input
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className='text-black mt-2 text-xl outline-none border p-1'
                            placeholder='Employee'
                        />

                        <button
                            className='bg-green-500 mt-5 ml-40 p-2 rounded text-white'
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}

            <div className='mt-20 ml-60'>
                <div className='flex justify-between mr-36'>
                    <h1>Profile</h1>
                    <h1>Name</h1>
                    <h1>Department</h1>
                    <h1>Role</h1>
                    <h1>Email</h1>
                </div>
                {members.length > 0 && members.map((member, index) => (
                    <div key={index} className='flex justify-between mr-36 mt-2'>
                        <h1>{member.name}</h1>
                        <img src={member.profile} alt="" />
                        <h1>{member.department}</h1>
                        <h1>{member.role}</h1>
                        <h1>{member.email}</h1>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Page;
