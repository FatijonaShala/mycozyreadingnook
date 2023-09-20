// import React, { createContext, useContext, useState, useEffect } from "react";

// // Create a context
// const DarkModeContext = createContext();

// // Create a custom hook to use the context
// export const useDarkMode = () => {
//   return useContext(DarkModeContext);
// };

// // Create a DarkModeProvider component
// export const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     // Load dark mode preference from local storage
//     const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
//     if (storedDarkMode !== null) {
//       setDarkMode(storedDarkMode);
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     const newDarkMode = !darkMode;
//     setDarkMode(newDarkMode);
//     // Save the user's preference to local storage
//     localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
//   };

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {" "}
//       {children}{" "}
//     </DarkModeContext.Provider>
//   );
// };


// import React, { createContext, useContext, useState, useEffect } from "react";

// // Create a context
// const DarkModeContext = createContext();

// // Create a custom hook to use the context
// export const useDarkMode = () => {
//   return useContext(DarkModeContext);
// };

// // Create a DarkModeProvider component
// export const DarkModeProvider = ({ children }) => {
//   // Initialize the dark mode state from local storage or default to false
//   const [darkMode, setDarkMode] = useState(() => {
//     // Load dark mode preference from local storage
//     const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
//     return storedDarkMode !== null ? storedDarkMode : false;
//   });


//   useEffect(() => {
//     // Save the user's preference to local storage whenever it changes
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//     console.log("Dark mode state updated:", darkMode);
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     // Toggle the dark mode state
//     setDarkMode((prevDarkMode) => !prevDarkMode);
//     console.log("Dark mode toggled:", !darkMode);
//   };

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };



import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context
const DarkModeContext = createContext();

// Create a custom hook to use the context
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

// Create a DarkModeProvider component
export const DarkModeProvider = ({ children }) => {
  // Initialize the dark mode state from local storage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    // Load dark mode preference from local storage
    const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    return storedDarkMode !== null ? storedDarkMode : false;
  });

  useEffect(() => {
    // Save the user's preference to local storage whenever it changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    // Add or remove the .dark-mode class from the body element based on the darkMode state
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    // Toggle the dark mode state
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};







