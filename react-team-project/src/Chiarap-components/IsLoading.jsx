import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import "./LoadingSpinner.css"
import React, { useState, useEffect } from 'react';


const Loading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            {loading ? (
                <div className="loading-spinner-container">
                    <div className="loading-spinner">
                        <FontAwesomeIcon icon={faDumbbell} className="dumbbell-icon" spin />
                    </div>
                </div>
            ) : (
                <div>Contenuto caricato!</div>
            )}
        </div>
    );
}; 
export default Loading