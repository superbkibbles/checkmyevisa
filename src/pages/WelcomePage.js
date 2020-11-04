import React from 'react';

import LogoBackground from '../assets/svgs/LogoBackground';
import LogoName from "../assets/svgs/LogoName";
import Logo from '../assets/svgs/logo';
import Plane from '../assets/svgs/Plane';
import DropDown from "../components/DropDown";

const WelcomePage = () => {
    return (
        <div className="welcome">
            <div className='welcome__logo'>
                <LogoBackground />
                <div className='welcome__logo__container'>
                    <div className='welcome__logo__container-image'>
                        <Logo width={45} height={40} />
                    </div>
                    <div className="welcome__logo__container-name">
                        <LogoName />
                    </div>
                </div>
            </div>
            <div className="welcome__moon" />

            {/*<div style={{ position: "absolute", top: '35%', left: '50%', transform: 'translateX(-50%)' }}>*/}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <DropDown placeholder='Type country...' />
            </div>

            <div className="welcome__plane-1">
                <Plane width={ 200 } height={ 100 } />
            </div>

            <div className="welcome__plane-2">
                <Plane width={ 1000 } height={500} />
            </div>
        </div>
    );
};

export default WelcomePage;