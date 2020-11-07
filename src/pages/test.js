import React from 'react';
import Logo from '../assets/pics/logoPic.png'
const Test = () => {
    return (
        <div style={{
            height: '100vh',
            display: "flex",
            flexDirection: "column",
        }}>
            <div style={{
                backgroundColor: "black",
                // minHeight: "5%",
                padding: '1.7rem',
                width: "100vw",
                display: "flex",
                color: "var(--color-grey-light-1)",
                fontSize: "2rem",
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "10rem"
            }}>
                <div>
                    <p>Email: info@global-mw.com</p>
                </div>
                <p>
                    Phone: <a style={{
                    color: "inherit",
                    borderBottom: "1px solid white",
                    paddingBottom: ".2rem"
                }} href="tel:07504379494">07504379494</a>

                </p>

            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    flexWrap: "wrap"
                }}>
                    <img
                        style={{
                            width: "50%",
                            height: "50%"
                        }}
                        src={ Logo }

                        alt="Logo"/>

                    <div style={{
                        width: "400px",
                        height: "500px",
                        // wordBreak: "break"
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",

                    }}>
                        <h1 style={{
                            fontSize: "5rem",
                            boxDecorationBreak: "clone"
                        }}>
                      <span style={{
                          color: "#ec9338"
                      }}>Website</span> is in development
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;