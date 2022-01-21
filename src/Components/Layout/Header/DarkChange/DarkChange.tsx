import { useState } from "react";

export const DarkChange = () => {
    const [ darkMode, setDarkMode ] = useState<boolean>(true);

    const handleClick = (e : any) => {
        e.preventDefault();
        setDarkMode(!darkMode)

        if (darkMode) {
            document.getElementById("main_html")?.classList.remove("dark");
        } else {
            document.getElementById("main_html")?.classList.add("dark");
        }
    }

    return (
        <a href="" onClick={handleClick} className="hover:bg-theme-primary px-2 py-2 font-medium text-md rounded-md">
            <i className={`dark:bg-theme-dark bg-theme-light dark:text-theme-light light:text-theme-dark fas fa-${darkMode ? 'sun' : 'moon'}`}></i>
        </a>
    )
}
