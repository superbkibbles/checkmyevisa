import React, { useRef } from 'react';

import DropDownIcon from '../assets/svgs/DropDownIcon';

const DropDown = ({
                      placeholder,
                      filteredCountries,
                      selectedCountry,
                      inputClick,
                      iconClick,
                      changeHandler,
                      listClick
}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const inputRef = useRef();
    const groupRef = useRef();

    const focusHandler = (e) => {
        if ( window.innerWidth < 565) {
            const i = inputRef.current;
            const g = groupRef.current;

            i.style.position = "absolute";
            i.style.top = "0";
            i.style.width = "100vw";
            g.style.borderRadius = "0";
        }
    }

    const focusOut = () => {
        if ( window.innerWidth < 566) {
            setTimeout(() => {
                const i = inputRef.current
                const g = groupRef.current

                i.style.position = "relative";
                i.style.width = "35rem";
                g.style.borderRadius = " 1rem 1rem 0 0";
            }, 1)
        }
    }
    return (
        <form ref={ inputRef } className="dropdown" onSubmit={ handleSubmit }>
            <div className='dropdown__search'>
                <div ref={ groupRef } className='dropdown__search__group' style={{
                    backgroundColor: filteredCountries.length > 0 ? "#fff": 'transparent', borderRadius: '1rem 1rem 0 0'
                }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <input
                        onClick={ () => {
                            inputClick()
                            focusHandler()
                        }}
                        onBlur={ focusOut }
                        // onFocus={ focusHandler }
                        value={ selectedCountry }
                        onChange={ changeHandler } type="text"
                        placeholder={ placeholder }
                        className='dropdown__search__input'
                    />
                    <button className='dropdown__search__icon' onClick={ iconClick }>
                        <DropDownIcon />
                    </button>
                </div>

            </div>


            <div className='dropdown-result'>
                <div className='dropdown-result__list'>
                    <ul className='dropdown__list'>
                        { filteredCountries.map(country => (
                            <li
                                key={ country }
                                className='dropdown__list__item'
                                onClick={ () => listClick(country) }
                            >{ country }</li>
                        )) }
                    </ul>
                </div>
            </div>

        </form>
    );
};

export default DropDown;