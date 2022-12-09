import React from 'react';

const AppHeader = () => {
    return (
        <header>
            <div className="navbar navbar-dark bg-dark box-shadow">
                <div className="container d-flex justify-content-between">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <strong>POS App</strong>
                </a>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;