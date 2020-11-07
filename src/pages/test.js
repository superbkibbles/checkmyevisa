import React from 'react';
import Logo from '../assets/pics/logoPic.png'
const Test = () => {
    return (
        <div>
            <div style={{
                backgroundColor: "black",
                minHeight: "5vh",
                width: "100vw",
                display: "flex",
                color: "var(--color-grey-light-1)",
                fontSize: "2rem",
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "wrap"
            }}>
                <div>
                    <p>Email: info@global-mw.com</p>
                </div>
                <a style={{
                    color: "inherit"
                }} href="tel:07504379494">Phone: 07504379494</a>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                minHeight: "95vh"
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