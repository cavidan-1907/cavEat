import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showRegister, setShowRegister] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (showRegister) {
            if (formData.password !== formData.confirmPassword) {
                toast.error('Parollar uyğun gəlmir.');
                return;
            }

            try {
                const existingUsersResponse = await axios.get('ttps://irradiated-silicon-antler.glitch.me/user');
                const existingUser = existingUsersResponse.data.find(u => u.email === formData.email);
                if (existingUser) {
                    toast.error('Bu email ilə qeydiyyatdan keçmiş istifadəçi artıq var.');
                    return;
                }

                const response = await axios.post('ttps://irradiated-silicon-antler.glitch.me/user', {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    fav: [],
                    basket:[]
                });

                if (response.status === 201) {
                    toast.success('Qeydiyyat uğurlu oldu!');
                    localStorage.setItem('currentUser', JSON.stringify(response.data));
                    setShowRegister(false); // Qeydiyyatdan sonra giriş formasını göstər
                    setFormData({
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    });
                } else {
                    toast.error('Qeydiyyat uğursuz oldu. Yenidən cəhd edin.');
                }
            } catch (error) {
                toast.error(error.response?.data?.message || 'Qeydiyyat alınmadı.');
            }
        } else {
            try {
                const response = await axios.get('ttps://irradiated-silicon-antler.glitch.me/user');
                const user = response.data.find(u => u.email === formData.email && u.password === formData.password);
                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    toast.success('Giriş uğurlu oldu!');
                    window.location.href = "/";
                } else {
                    toast.error('Yanlış məlumatlar. Yenidən cəhd edin.');
                }
            } catch (error) {
                toast.error('Giriş alınmadı. Yenidən cəhd edin.');
            }
        }
    };

    const toggleForm = () => {
        setShowRegister(!showRegister);
    };

    return (
        <div
            className="w-full relative h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://preview.colorlib.com/theme/feliciano/images/bg_1.jpg)'
            }}
        >
            <div className="bg-custom-yellow p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-6">{showRegister ? 'Qeydiyyat' : 'Giriş'}</h2>
                <form onSubmit={handleSubmit}>
                    {showRegister && (
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">Ad</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Adınızı daxil edin"
                            />
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email ünvanı</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email daxil edin"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Parol</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Parol daxil edin"
                        />
                    </div>

                    {showRegister && (
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Parolu təsdiq edin</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Parolu yenidən daxil edin"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600"
                    >
                        {showRegister ? 'Qeydiyyatdan keç' : 'Giriş'}
                    </button>

                    <button
                        type="button"
                        onClick={toggleForm}
                        className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-400"
                    >
                        {showRegister ? 'Giriş' : 'Qeydiyyatdan keç'}
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AuthPage;
