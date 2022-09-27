import React, { useEffect } from 'react';

const Mouse = () => {

    useEffect(() => {
        const cursor = document.querySelector('.cursor')
        // Ajoute un événement à la fenetre, à chaque fois que la souris bouge
        window.addEventListener('mousemove', (e) => {
            // Update les valeurs de sytle de l'éléménet cursor
            cursor.style.top = e.y + 'px'
            cursor.style.left = e.x + 'px'
        })

        // Selection tous les éléments qui ont la classe .hover
        document.querySelectorAll('.hover').forEach((link) => {
            // Quand tu survoles un élément, ajoute la classe .hovered
            link.addEventListener('mouseover', () => {
                cursor.classList.add('hovered')
            })
            // Quand la souris quittes l'élément, retire lui la classe .hovered
            link.addEventListener('mouseleave', () => {
                cursor.style.transition = '.3s ease-out'
                cursor.classList.remove('hovered')
            })

            console.log(link);
        })
    }, [])

    return (
        <span className="cursor"></span>
    );
};

export default Mouse;