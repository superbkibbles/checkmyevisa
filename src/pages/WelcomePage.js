import React from 'react';

import Moon from '../assets/svgs/moon';
import LogoBackground from '../assets/svgs/LogoBackground';
import LogoName from "../assets/svgs/LogoName";
import Logo from '../assets/svgs/logo';

const WelcomePage = () => {
    return (
        <div className="welcome">
            <div className='welcome__logo'>
                <LogoBackground />
                <div className='welcome__logo__container'>
                    <div className='welcome__logo__container-image'>
                        <Logo width={50} height={45} />
                    </div>
                    <div className="welcome__logo__container-name">
                        <LogoName />
                    </div>
                </div>
            </div>
            <div className="welcome__moon">
                <Moon />
            </div>
        </div>
    );
};

export default WelcomePage;