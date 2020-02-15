import Users from "./Users";
import { connect } from "react-redux";
import {getUsers} from "./UsersActions";


const mapStateToProps = (state) => ({
    users: state.usersReducer.users,
    loading:state.usersReducer.loading,
    error:state.usersReducer.error
});

const mapDispatchToProps = dispatch => ({
        getUsers: () => dispatch(getUsers())
      //  addUser: user => dispatch(addUser(user))
    });


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
