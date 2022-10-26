import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (        
        <header>
            <div>
                <nav>
                    <NavLink>
                        Toan Nguyen Tat
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}