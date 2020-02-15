import React from 'react';
import "./Users.scss";
import ico_edit from '../../assets/ico_edit.svg';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';

import usersSvg from "../../assets/ico_users.svg";
import addUserSvg from "../../assets/ico_add.svg";
import Header from "../header/Header";
import Spinner from "../common/Spinner";

class Users extends React.Component {
    state = {
        users: this.props.users
    };

    componentDidMount() {
        this.props.getUsers();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("aala motha shahana");
        return {
            users: nextProps.users,
        };
    }

    render() {
        const {users} = this.state;
        const {loading, error} = this.props;
        console.log('loading', loading);

        return (
            <div className='page-section-container'>
                <div className="page-divider"/>

                        <TableContainer component={Paper}>
                            {loading ? (
                                <Spinner/>
                            ) : (
                                <Table style={{minWidth: "650px"}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><h2><img className="add-icon" src={usersSvg}/>Users</h2>
                                            </TableCell>
                                            <TableCell/>
                                            <TableCell/>
                                            <TableCell/>
                                            <TableCell><Button
                                                variant="contained"
                                                color="primary"
                                                className="add-user-button"
                                                startIcon={<img className="add-icon" src={addUserSvg}/>}
                                            >
                                                Add User
                                            </Button></TableCell>

                                        </TableRow>

                                        <TableRow>
                                            <TableCell>NAME</TableCell>
                                            <TableCell>EMAIL</TableCell>
                                            <TableCell>ROLE TYPE</TableCell>
                                            <TableCell>MOBILE NO</TableCell>
                                            <TableCell align="right"/>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {users.map(user => (
                                            <TableRow key={user.name}>
                                                <TableCell component="th" scope="row">
                                                    {user.name}
                                                </TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{user.role}</TableCell>
                                                <TableCell>{user.mobileNumber}</TableCell>
                                                <TableCell align="right">
                                                    <img className="edit-icon" src={ico_edit}/>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>


                                </Table>)
                            }
                        </TableContainer>

            </div>
        );
    }
}

export default Users;