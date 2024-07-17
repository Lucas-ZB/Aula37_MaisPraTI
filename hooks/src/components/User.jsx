import { useState, useEffect } from "react";

function UserProfile() {
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1'); // Assuming you want the first user
            const userData = await response.json();
            setUser(userData);
        };

        fetchUserData();

        return () => {
            setUser(null);
        };
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.name}</h1> {/* Corrected user object access */}
                    <h1>{user.email}</h1>
                </div>
            ) : (
                <p>Carregando dados do usuário</p> // Added loading fallback
            )}
        </div>
    );
}

export default UserProfile;