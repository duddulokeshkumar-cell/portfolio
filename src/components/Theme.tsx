import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react"


const Theme = () => {
    const [dark,setDark] = useState(false);

    useEffect(()=>{
        document.documentElement.classList.toggle('dark',dark);
    },[dark]);

    const toggleTheme = () =>{
        setDark((prev) => !prev);
    }

  return (
    <button onClick={toggleTheme}
    className="rounded-full bg-white px-3 py-2.5 dark:bg-black
     dark:text-white border-gray-500 border cursor-pointer">
        {dark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>
  )
}

export default Theme