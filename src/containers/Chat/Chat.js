import React from 'react'
import './chat.css'
import emptyDivPic from '../../images/emptyDivPic.JPG'
import {get_users} from '../../store/Action'
import {connect} from 'react-redux'
import firebase from '../../config/firebase'
class Chat extends React.Component{

    constructor(){
        super()
        this.state = {
            chat_with: {},
            chats: [],
            message: ''
        }
    }

    chat=(user)=> {
        this.setState({
            chat_with: user
        })
        let current_user = this.props.current_user
        let merge_uid = this.merge_uid(current_user.uid,user.uid)
        console.log(merge_uid)
        this.get_message(merge_uid)
        
    }

    send_message = () => {
        let user = this.props.current_user
        let chat_with = this.state.chat_with
        let merge_uid = this.merge_uid(user.uid,chat_with.uid)

        firebase.database().ref('/').child(`chats/${merge_uid}`).push({
            message: this.state.message,
            name: user.name,
            uid: user.uid
        })
    }

    get_message = (uid) => {
        firebase.database().ref('/').child(`chats/${uid}`).on("child_added",(messages)=>{
            console.log("message===>",messages.val())
            this.state.chats.push(messages.val())
            this.setState({
                chats: this.state.chats
            })
        })
    }

    merge_uid(uid1,uid2){
        if(uid1 < uid2){
            return uid1 + uid2
        }else{
            return uid2 + uid1
        }
    }

    componentDidMount(){
        this.props.get_users()
    }

    render(){
        // console.log('props==>',this.props)
        // console.log('fireabase users==>',this.props.users)
        // console.log('firebase messages==>',this.props.message)
        let user = this.props.current_user
        return(
            <div style={{height:550}}>
                <div style={{display:'flex'}}>
                    <div className='left-div'>
                        <div className='left-upper-div'>
                            <img className='user-profile' src={user.profile} alt='profile picture' width='30' height='30' />
                            <span>{user.name}</span>
                        </div>
                        <h3>Users Online:</h3>
                        <div className='left-lower-div'>
                            <ul>
                                {this.props.users.map((v,i)=>{
                                    return(
                                        v.uid !== user.uid &&
                                        <button onClick={()=>this.chat(v)}>
                                            <li style={{display: "flex"}} key={i}>
                                                <img src={v.profile}  alt='profile' width='20' height='20'/>
                                                <span>
                                                    {v.name}
                                                </span>
                                            </li>
                                        </button>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='right-div'>
                        {/* <h3>Chat</h3> */}
                        {
                            Object.keys(this.state.chat_with).length ? 
                            <div>
                                <h4>
                                    <img src={this.state.chat_with.profile}  alt='profile' width='20' height='20'/>
                                    {this.state.chat_with.name}
                                </h4>
                                <div className='chat-content'>
                                    <ul>
                                    {
                                        this.state.chats.map((v,i)=>{
                                            return(
                                                <li key={i} style={{color: v.uid === user.uid ? 'red' : "green", textAlign: v.uid === user.uid ? 'right' : 'left'}}>{v.message}</li>
                                            )
                                        })
                                    }
                                    </ul>
                                    <input value={this.state.message} onChange={(e)=>this.setState({message: e.target.value})} type='text' placeholder='type your message...' />
                                    <button onClick={()=>this.send_message()}>Send</button>
                                </div>
                            </div>
                            :
                            <div>
                                <div className='not-selected-div1'>
                                    <center>
                                        <img src={emptyDivPic} alt='chatting' />
                                        <p>Stay connected to the world</p>
                                        <div>________________________</div>
                                        <span>You have connected Using Facebook Authentication,<br /> We will never share your personal data with anyone!</span>
                                    </center>
                                </div>
                            </div>
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