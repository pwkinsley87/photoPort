import React from 'react';

const categories = [
    {
        name: "Commercial",
        description: 
            "Photos of grocery stores, food trucks, and other commercial projects.",
    },
    { name: "Portraits", description: "Portraits of the people in my life." },
    { name: "Food", description: "Delicious delicacies." },
    { name: "Landscapes", description: "The beauty of nature." },
];

function categorySelected(name) {
    console.log(`${name} clicked`)
};

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"></span>Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li classname="mx-1" key={category.name} >
                            <span onClick={() => categorySelected(category.name)} >{category.name} 
                            </span> 
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}



export default Nav;