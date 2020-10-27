import React from 'react';

import LogoBackground from '../assets/svgs/LogoBackground';
import LogoName from "../assets/svgs/LogoName";
import Logo from '../assets/svgs/logo';
import Plane from '../assets/svgs/Plane';

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
                {/*<Moon />*/}
            </div>

            <div className="form" style={{ position: "absolute", top: '50%', left: '50%', transform: 'translateX(-50%)' }}>
                <div style={{ width: "400px", height: '50px', backgroundColor: "white" }}></div>
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