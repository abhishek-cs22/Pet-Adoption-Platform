// import React, { useState, useEffect } from "react";
// import AdminPanel from "./AdminPanel";

// const AdminLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const [showErrorMessage, setShowErrorMessage] = useState(false);
//   const [usersData, setUsersData] = useState([]);

//   useEffect(() => {
//     const fetchUsersData = async () => {
//       try {
//         const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/credentials`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch');
//         }
//         const data = await response.json();
//         setUsersData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchUsersData();
//   }, []);

//   const handleLogin = () => {
//     const user = usersData.username === username && usersData.password === password;
//     if (user) {
//       setLoginSuccess(true);
//       setShowErrorMessage(false);
//     } else {
//       setLoginSuccess(false);
//       setShowErrorMessage(true);
//     }
//   };

//   return (
//     <div>
//       {loginSuccess ? (
//         <AdminPanel />
//       ) : (
//         <div className="login-body">
//           <div className="login-container">
//             <h2>Admin Login</h2>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               />
//               {showErrorMessage && (
//                 <p className="error-message">Incorrect username or password</p>
//               )}
//             <button className="float-right" onClick={handleLogin}>Login</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminLogin;


import React, { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/credentials`);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsersData();
  }, []);

  const handleLogin = () => {
    const user = usersData.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setLoginSuccess(true);
      setShowErrorMessage(false);
    } else {
      setLoginSuccess(false);
      setShowErrorMessage(true);
    }
  };

  const styles = {
    body: {
      backgroundColor: "#f4f6f8",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Segoe UI, Roboto, sans-serif",
    },
    container: {
      backgroundColor: "#ffffff",
      padding: "40px 30px",
      borderRadius: "10px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    heading: {
      marginBottom: "20px",
      fontSize: "24px",
      color: "#1E88E5",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
      outline: "none",
      transition: "border-color 0.2s",
    },
    inputFocus: {
      borderColor: "#1E88E5",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#1E88E5",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      marginTop: "10px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#1565C0",
    },
    errorMessage: {
      color: "#e53935",
      fontSize: "14px",
      marginTop: "10px",
    },
  };

  // Input focus handling (optional)
  const [focused, setFocused] = useState({ username: false, password: false });

  return (
    <div style={styles.body}>
      {loginSuccess ? (
        <AdminPanel />
      ) : (
        <div style={styles.container}>
          <h2 style={styles.heading}>Admin Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setFocused({ ...focused, username: true })}
            onBlur={() => setFocused({ ...focused, username: false })}
            style={{
              ...styles.input,
              ...(focused.username ? styles.inputFocus : {}),
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocused({ ...focused, password: true })}
            onBlur={() => setFocused({ ...focused, password: false })}
            style={{
              ...styles.input,
              ...(focused.password ? styles.inputFocus : {}),
            }}
          />

          {showErrorMessage && (
            <p style={styles.errorMessage}>Incorrect username or password</p>
          )}

          <button
            onClick={handleLogin}
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1565C0")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1E88E5")}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
