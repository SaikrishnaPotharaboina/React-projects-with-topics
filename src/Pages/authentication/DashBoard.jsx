import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Dashboard = () => {
    const { isLogin } = useContext(UserContext);
    return (
        <div className="dashboard">
            {isLogin ? (
                <h2>This is Your Dashbord</h2>
            ) : (
                <h2>Please login to access your dashboard</h2>
            )};
        </div>
    );
};

export default Dashboard;
