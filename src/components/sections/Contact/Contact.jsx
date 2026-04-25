import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        teamSize: '',
        location: '',
        message: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_khlgwhh', // Service ID
                'template_9xnnz1u', // Template ID
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    contactNumber: formData.contactNumber,
                    emailid: formData.email,
                    age: formData.teamSize, // assuming teamSize corresponds to age group
                    location: formData.location,
                    Message: formData.message,
                },
                'HzY2gy6e4jQWysvRr' // User ID
            )
            .then(
                () => {
                    alert('Your message has been sent successfully!');
                    setFormData({
                        firstName: '',
                        lastName: '',
                        contactNumber: '',
                        email: '',
                        teamSize: '',
                        location: '',
                        message: '',
                    });
                },
                (error) => {
                    alert('Failed to send message, please try again.');
                    console.error('EmailJS Error:', error);
                }
            );
    };

    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.2" className="flex mx-2 sm:h-screen w-full bg-transparent items-center justify-between">
            <div className="h-[90%] hidden sm:flex  rounded-r-xl bg-zinc-50 w-[25%]">
                <img src="./contact.png" className="object-cover w-full h-full" alt="" />
            </div>
            <div className="sm:h-[90%] justify-center mb-3 flex rounded-xl sm:rounded-l-xl bg-[#F7F7F7] sm:w-[73%]">
                <div className="flex flex-col p-10 rounded-2xl w-full max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">We’d love to help</h2>
                    <p className="text-gray-500 mb-8">Reach out and we’ll get in touch within 24 hours.</p>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    className="mt-1 block p-2 text-black w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    className="mt-1 block p-2 text-black w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-600">
                                Contact Number
                            </label>
                            <input
                                type="tel"
                                id="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                placeholder="+1 234 567 890"
                                className="mt-1 block p-2 text-black w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                className="mt-1 block p-2 text-black w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-600">
                                    Age Group
                                </label>
                                <select
                                    id="teamSize"
                                    value={formData.teamSize}
                                    onChange={handleChange}
                                    className="mt-1 block p-2 text-black w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                >
                                    <option>-</option>
                                    <option>-18 </option>
                                    <option>18-32</option>
                                    <option>32-56 </option>
                                    <option>57+</option>

                                </select>
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-600">
                                    Location
                                </label>
                                <select
                                    id="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="mt-1 block p-2 text-black w-full rounded-lg border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                >
                                    <option>Australia</option>
                                    <option>Brazil</option>
                                    <option>Canada</option>
                                    <option>China</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                    <option>India</option>
                                    <option>Italy</option>
                                    <option>Japan</option>
                                    <option>Mexico</option>
                                    <option>Netherlands</option>
                                    <option>Russia</option>
                                    <option>South Korea</option>
                                    <option>Spain</option>
                                    <option>Sweden</option>
                                    <option>Switzerland</option>
                                    <option>United Kingdom</option>
                                    <option>United States</option>
                                    <option>Argentina</option>
                                    <option>Belgium</option>
                                    <option>Egypt</option>
                                    <option>Greece</option>
                                    <option>Indonesia</option>
                                    <option>Saudi Arabia</option>
                                    <option>Turkey</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Leave us a message..."
                                rows="4"
                                className="mt-1 block p-2 text-black w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>
                        <div className="w-full flex justify-center">
                            <button
                                type="submit"
                                className="w-3/5 py-3 px-6 mb-2 bg-black text-white font-medium rounded-lg shadow-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
