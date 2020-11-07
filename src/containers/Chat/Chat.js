import React from 'react'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
class Chat extends React.Component{

    componentDidMount(){
        this.props.get_users()
    }

    render(){
        console.log('props==>',this.props)
        let user = this.props.current_user
        return(
            <div>
                <h3>Welcome {user.name} !<img src={user.profile} alt='profile picture' width='30' height='30' /></h3>
                <div>
                    <div>
                        <h3>Chat Users:</h3>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.current_user
})

const mapDispatchToProps = (dispatch) => ({
    get_users: ()=> dispatch(get_users())
})

export default connect(mapStateToProps,mapDispatchToProps)(Chat);