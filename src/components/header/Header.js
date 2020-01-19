import React from "react";
import './Header.scss';

import logo from '../../assets/Logo.svg';
import dashboard from '../../assets/ico_dashboard.svg';
import users from '../../assets/ico_users.svg';
import user from '../../assets/ico_user.svg';
import sessionManager from '../../assets/ico_sessionmanager.svg';
import ico_notification from '../../assets/ico_notification.svg';

import TopAppBar, {
    TopAppBarRow,
    TopAppBarSection
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

const Header = () => {
    return (
        <div>
            <TopAppBar>
                <TopAppBarRow>
                    <TopAppBarSection align='start'>
                        <div className="header-nav-item locus-logo">
                            <img src={logo}/>
                        </div>
                        <div className="header-nav-item">
                            <img className="icon" src={dashboard}/>
                            <span className="nav-item-heading">
                                        Dashboard
                                    </span>
                        </div>
                        <div className="header-nav-item">
                            <img className="icon" src={users}/>
                            <span className="nav-item-heading">
                                        Users
                                    </span>
                        </div>
                        <div className="header-nav-item">
                            <img className="icon" src={sessionManager}/>
                            <span className="nav-item-heading">
                                        Session Manager
                            </span>
                        </div>
                    </TopAppBarSection>
                    <TopAppBarSection align='end' role='toolbar'>
                        <div className="header-nav-item">
                            <img className="icon" src={ico_notification}/>
                        </div>
                        <div className="header-nav-item">
                            <img className="icon" src={user}/>
                            <span className="nav-item-heading">
                                John Doe
                            </span>
                            <MaterialIcon icon='keyboard_arrow_down' />
                        </div>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
        </div>
    );
};

export default Header;