import React from 'react'
import {connect} from 'react-redux'
import { set_data, facebook_login } from '../../store/Action'
class Home extends React.Component{
    render(){
        console.log('home props=>',this.props)
        return(
            <div>
                <h1>Home page</h1>
                <button onClick={()=>this.props.set_data()} >check console</button>
                <button onClick={()=>this.props.facebook_login()} >Facebook Login</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.users
})
const mapDispatchToProps = (dispatch) => ({
    set_data: ()=> dispatch(set_data()),
    facebook_login: ()=> dispatch(facebook_login()),
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);