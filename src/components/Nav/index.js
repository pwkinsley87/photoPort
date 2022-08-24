import React from 'react';

function Nav() {


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
        return ClipboardItem;
    };

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/"> 
                    <span role="img" aria-label="camera"> 📷</span>
                    Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick=
                         {() => handleClick("About")} >
                            About Me
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick   ('Contact')}>
                          Contact
                        </span>
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