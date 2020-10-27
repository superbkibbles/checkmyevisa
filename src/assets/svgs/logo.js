import React from 'react';

export default ({ height = 30, width = 26 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9591 24.8936C16.0884 26.3688 13.9116 26.3688 13.0409 24.8936L0.306456 3.31914C-0.564274 1.84396 0.524137 -1.47518e-07 2.26559 0L27.7343 2.20697e-06C29.4758 2.35449e-06 30.5642 1.84396 29.6936 3.31914L16.9591 24.8936Z" fill="url(#paint0_linear)"/>
            <defs>
                <linearGradient id="paint0_linear" x1="15.0754" y1="-9.40426" x2="15.0754" y2="34.4084" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFA318"/>
                    <stop offset="1" stopColor="#FF41BE"/>
                </linearGradient>
            </defs>
        </svg>
    )
}