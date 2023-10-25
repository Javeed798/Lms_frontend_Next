import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Set mounted to true after the component has mounted
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex items-center justify-center mx-4">
            {theme === "light" ? (
                <BiMoon
                    className="cursor-pointer"
                    fill="black"
                    onClick={() => setTheme("dark")}
                    size={25}
                />
            ) : (
                <BiSun
                    className="cursor-pointer"
                    onClick={() => setTheme("light")}
                />
            )}
        </div>
    );
};

export default ThemeSwitcher;
