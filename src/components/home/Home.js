import React from 'react';
import "./Home.scss";

import axios from 'axios';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'NAME',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'EMAIL',
        selector: 'email',
        sortable: true
    },
    {
        name: 'ROLE TYPE',
        selector: 'role',
        sortable: true,
    },
    {
        name: 'MOBILE NO',
        selector: 'mobileNumber'
    }
];


class Home extends React.Component{
    state = {
        users:[]
    };

    componentDidMount(){
        this.getUsers();
    }

    getUsers = () => {
        //http://localhost:3000/users
        axios.get(`http://localhost:3000/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    };

    render(){
        return(
            <div className='page-section-container'>
                <div className="page-divider" />
                <DataTable
                    title="Users"
                    columns={columns}
                    data={this.state.users}
                    className="users-table"
                />
            </div>
        );
    }
}

export default Home;