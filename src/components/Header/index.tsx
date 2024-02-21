import React, { useEffect, useState } from 'react';
import logo from "../../assests/images/logo/logo.png";
const Header = () => {
    const [userAvatar, setUserAvatar] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);



    const handleLogout = () => {
        // Xóa accessToken và user khỏi localStorage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");

        // Đặt trạng thái đăng nhập thành false
        setLoggedIn(false);

    };
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const userData = JSON.parse(user);
            setUserAvatar(userData.avatar.url);
            setLoggedIn(true);
        }
    }, []);
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-xl navbar-light bg-transparent">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <img
                                src={logo}
                                alt="Logo"
                                className="img-fluid"
                            />
                        </a>
                        <button className="menu-icon-container">
                            <span className="menu-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse d-none d-xl-block d-none d-xl-block"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href={`/`}>
                                        Home
                                    </a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href={`/listcourses`}>
                                        Course
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href={`/instructor`}>
                                        Instructor
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href={`/mylearning`}>
                                        About
                                    </a>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center justify-content-between rightContent">
                                <a
                                    href={`/cart`}
                                    className="cart-nav border-0 bg-transparent mx-3"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.87778 2.51099L2.77634 2.50038C2.40716 2.48688 2.07562 2.74796 2.01087 3.12209L2.00026 3.22354C1.98676 3.59272 2.24784 3.92426 2.62197 3.98901L4.13098 4.25L5.04551 15.1457L5.06443 15.3095C5.24843 16.5519 6.31708 17.486 7.58988 17.486H18.5019L18.6662 17.4808C19.8626 17.4044 20.8545 16.4996 21.0291 15.2978L21.9781 8.73941L21.9945 8.58877C22.0819 7.38969 21.132 6.349 19.9089 6.349H5.81198L5.57725 3.54727L5.55956 3.43641C5.49112 3.14809 5.25673 2.92273 4.95778 2.87099L2.87778 2.51099ZM7.47394 15.9797C6.97867 15.9255 6.58258 15.5277 6.54028 15.0207L5.93798 7.849H19.9089L19.997 7.85548C20.3128 7.90242 20.5409 8.19769 20.4936 8.52465L19.5446 15.0826L19.5208 15.1998C19.4005 15.6584 18.985 15.986 18.5019 15.986H7.58988L7.47394 15.9797ZM5.90828 20.5853C5.90828 19.7492 6.58595 19.0703 7.42228 19.0703C8.25849 19.0703 8.93728 19.7491 8.93728 20.5853C8.93728 21.4216 8.25838 22.0993 7.42228 22.0993C6.58606 22.0993 5.90828 21.4215 5.90828 20.5853ZM17.1597 20.5853C17.1597 19.7491 17.8385 19.0703 18.6747 19.0703C19.5109 19.0703 20.1897 19.7491 20.1897 20.5853C20.1897 21.4216 19.5108 22.0993 18.6747 22.0993C17.8386 22.0993 17.1597 21.4216 17.1597 20.5853ZM17.6484 10.795C17.6484 10.3808 17.3126 10.045 16.8984 10.045H14.1254L14.0236 10.0518C13.6575 10.1015 13.3754 10.4153 13.3754 10.795C13.3754 11.2092 13.7112 11.545 14.1254 11.545H16.8984L17.0001 11.5382C17.3662 11.4885 17.6484 11.1747 17.6484 10.795Z"
                                            fill="#35343E"
                                        ></path>
                                    </svg>
                                </a>
                                {loggedIn ? (
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href={`/user/profile`}>
                                                <img style={{ objectFit: "cover" }} src={userAvatar} alt="Avatar" />
                                            </a>
                                            <div className="nav-item--dropdown">
                                                <ul>
                                                    <li><a href="" onClick={handleLogout}>Logout</a></li>

                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                ) : (
                                    <div>
                                        <a href={`/login`} className="button button--text">
                                            Sign in
                                        </a>
                                        <a href={`/register`} className="button button--dark">
                                            Sign Up
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;