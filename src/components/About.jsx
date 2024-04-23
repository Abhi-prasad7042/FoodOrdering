import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className=" px-10 mx-auto pt-5">
                <h1 className="text-2xl">About FoodOrdering Project</h1>
                <hr className="border-gray-300 my-1"/>
                <p className="pt-2">Welcome to FoodOrdering, my first React project! Over the past two months, I've dedicated my free time outside of work to develop this project, drawing inspiration from the popular Swiggy web app. FoodOrdering is a platform where I've implemented various advanced React concepts to create a seamless and interactive user experience.</p>
                
                <h1 className="text-xl mt-4">Project Overview</h1>
                <hr className="border-gray-300 my-1"/>
                <p className="pt-2">FoodOrdering is a web application aimed at providing users with a convenient way to order their favorite meals from a variety of restaurants. Taking inspiration from Swiggy, this project incorporates advanced React concepts to deliver a responsive and dynamic user interface.</p>

                <h1 className="text-xl mt-4">Technologies Used</h1>
                <hr className="my-1 border-gray-300"/>
                <ol className="ml-10 list-disc">
                    <li className="mt-2">React:- <span>The entire frontend of the FoodOrdering project is built using React, a powerful JavaScript library for building user interfaces.</span></li>
                    <li className="mt-2">Redux:- <span>To manage the application's state, I've employed Redux, a predictable state container for JavaScript apps.</span></li>
                    <li className="mt-2">React Router:- <span>Routing is implemented with React Router, allowing for smooth navigation between different pages.</span></li>
                    <li className="mt-2">Hooks and Custom Hooks:- <span>Leveraging the power of React hooks, I've optimized the project's components for efficiency and reusability. Custom hooks have been created to encapsulate common functionality.</span></li>
                    <li className="mt-2">API Integration:- <span> The project utilizes a live API from Swiggy to fetch restaurant data, menu items, and other necessary information. This ensures that users have access to up-to-date content.</span></li>
                </ol>

                <h1 className="text-xl mt-4">Project Development</h1>
                <hr className="my-1 border-gray-300"/>
                <p className="pt-2">Throughout the development process, I've learned and applied a multitude of React concepts and best practices. From structuring components to managing global state with Redux, each aspect of the project has been carefully crafted to deliver a smooth and intuitive user experience.</p>

                <h1 className="text-xl mt-4">Future Plans</h1>
                <hr className="my-1 border-gray-300"/>
                <p className="pt-2">As FoodOrdering continues to evolve, I plan to further enhance its features and user interface. This project serves as a learning journey for me in the realm of React development, and I'm excited to continue exploring new possibilities and optimizations.</p>
            
                <h1 className="text-xl mt-4">Explore the Code</h1>
                <hr className="my-1 border-gray-300"/>
                <p className="pt-2">If you're interested in diving into the codebase, feel free to check out the project on GitHub: <a href="https://github.com/Abhi-prasad7042/FoodOrdering" className="text-blue-500">FoodOrdering GitHub Repository</a> </p>

                <p className="pt-2 mb-10">Thank you for visiting FoodOrdering, and I hope you enjoy exploring the platform as much as I've enjoyed building it!</p>
                <hr />
            </div>
        )

    }
}

export default About;