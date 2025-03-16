const User = ({ name, email, user_id }) => {
    return (
        <div style={{
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            textAlign: "center",
            borderBottom: "2px solid black",

          }}>
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>ID: {user_id}</p>
      </div>
    );
  };
  
  export default User;
  