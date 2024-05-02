import React, { useState, useEffect } from 'react';

const Welcome = () => {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false); // Mettre showMessage à false après 5 secondes
        }, 2000); // Délai de 5 secondes
        
        return () => clearTimeout(timer); // Nettoyer le timer lors du démontage du composant
    }, []);

    const styles = {
        animation: 'mouvement 1s infinite alternate',
    };

    return (
        showMessage && (
            <div style={{
                position: 'fixed',
                top: 600}}
            >
                    <div className="sm:text-l sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 main">
                        <h1>Drag to explore !</h1>
                        🖐️
                    </div>
            </div>
        )
    );
};

export default Welcome;