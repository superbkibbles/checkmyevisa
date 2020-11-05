import React from 'react';

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

    return (
        <form className="dropdown" onSubmit={ handleSubmit }>
            <div className="dropdown__search">
                <div className="dropdown__search__group" style={{
                    backgroundColor: filteredCountries.length > 0 ? "#fff": "transparent", borderRadius: "1rem 1rem 0 0"
                }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <input value={ selectedCountry } onClick={ inputClick } onChange={ changeHandler } type="text" placeholder={ placeholder } className="dropdown__search__input"/>
                    <button className="dropdown__search__icon" onClick={ iconClick }>
                        <DropDownIcon />
                    </button>
                </div>

            </div>


            <div className="dropdown-result">
                <div className="dropdown-result__list" >
                    <ul className="dropdown__list">
                        { filteredCountries.map(country => (
                            <li
                                key={ country }
                                className="dropdown__list__item"
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