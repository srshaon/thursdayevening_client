import './TopSpot.css';

import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import { CDBSidebar, CDBSidebarContent } from 'cdbreact';
import Khulna from '../Khulna/Khulna';
import MangroveForest from '../MangroveForest';
import Bandarban from '../Bandarban/Bandarban';

const TopSpot = () => {
    const { logOut, admin } = useAuth();
    const [control, setControl] = useState("khulna")
    console.log(admin);

    if (admin === '') {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div >

            <div className="dashboard-details-div">
                <div  >
                    <div className="h-100">
                        <CDBSidebar className="w-100" textColor="#fff" backgroundColor="#333">


                            <CDBSidebarContent className="py-5">



                                <div>
                                    <li onClick={() => setControl("khulna")}
                                        className="li py-3 px-3">
                                        Khuna Tour Spot
                                    </li>
                                    <li onClick={() => setControl("sundorbon")}
                                        className="li py-3 px-3">
                                        Sundorban Tour Spot
                                    </li>
                                    <li onClick={() => setControl("bandarban")}
                                        className="li py-3 px-3">
                                        Bandarban Tour Spot
                                    </li>

                                    <li onClick={logOut} className="li px-3 py-3">
                                        Log Out
                                    </li>
                                </div>
                            </CDBSidebarContent>

                        </CDBSidebar>
                    </div>
                </div>
                <div className="dashboard-second-container"  >

                    {control === "khulna" && <Khulna></Khulna>}
                    {control === "sundorbon" && <MangroveForest></MangroveForest>}
                    {control === "bandarban" && <Bandarban></Bandarban>}



                </div>
            </div>
        </div>
    );
};

export default TopSpot;