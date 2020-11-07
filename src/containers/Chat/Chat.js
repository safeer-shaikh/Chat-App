import React from 'react'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
class Chat extends React.Component{

    constructor(){
        super()
        this.state = {
            chat_with: {},
            chats: []
        }
    }

    chat=(user)=> {
        this.setState({
            chat_with: user
        })
    }

    componentDidMount(){
        this.props.get_users()
    }

    render(){
        // console.log('props==>',this.props)
        console.log('fireabase users==>',this.props.users)
        let user = this.props.current_user
        return(
            <div>
                <h3>Welcome {user.name} !<img src={user.profile} alt='profile picture' width='30' height='30' /></h3>
                <div style={{display:'flex'}}>
                    <div style={{backgroundColor:'grey'}}>
                        <h3>Chat Users:</h3>
                        <div>
                            <ul>
                                {this.props.users.map((v,i)=>{
                                    return(
                                        v.uid !== user.uid &&
                                        <li key={i}>
                                            <img src={v.profile}  alt='profile' width='20' height='20'/>
                                            {v.name}
                                            <button onClick={()=>this.chat(v)}>Chat</button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div style={{backgroundColor:"yellow", width: 350}}>
                        <h3>Chat</h3>
                        {
                            Object.keys(this.state.chat_with).length ? 
                            <div>
                                <h4>
                                    <img src={this.state.chat_with.profile}  alt='profile' width='20' height='20'/>
                                    {this.state.chat_with.name}
                                </h4>
                                <input type='text' placeholder='type your message...' />
                                <button>Send</button>
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.current_user,
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    get_users: ()=> dispatch(get_users())
})

export default connect(mapStateToProps,mapDispatchToProps)(Chat);