import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
// import logoImage from '../../Assets/images/logo.png'
import sideImage from '../../Assets/images/sideimage.JPG'
import {connect} from 'react-redux'
import Particles from 'react-particles-js';
import Button from '@material-ui/core/Button';
import { set_data, facebook_login } from '../../store/Action'
class Home extends React.Component{
    render(){
        // console.log('home props=>',this.props)
        return(
            <div className='body'>
                <Particles
                    style={{position: 'absolute', zIndex: -1,}}
                    params={{
                        "particles": {
                            "number": {
                                "value": 100
                            },
                            "size": {
                                "value": 4
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        },
                    }} 
                    />
                <div className='sub-body'>
                    <div className='heading'>
                        {/* <Link to='/'><img src={logoImage} alt='logo' width='60' height='60' /></Link> */}
                        <h2>Talkie Web</h2>
                    </div>
                    {/* <button onClick={()=>this.props.set_data()} >check console</button> */}
                    <div className='content'>
                        <div className='sub-content1'>
                            <p>To use Talkie App on your computer: </p>
                            <button onClick={()=>this.props.facebook_login(this.props.history)}>
                                <i class="fa fa-facebook-f"></i>
                                Login with Facebook
                            </button>
                            <Button variant="contained" disabled className='disabled_btn'>
                                Phone
                            </Button>
                            <Button className='disabled_btn' variant="contained" disabled >
                                Google
                            </Button>
                            <p style={{fontSize: 16,marginTop: 50, textAlign: "center", color: "gray"}}>We Will never share your personal Data to anyone</p>
                        </div>
                        <div className='sub-content2'>
                            <img src={sideImage} alt='Chatting Gallery' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.users
})
const mapDispatchToProps = (dispatch) => ({
    // set_data: ()=> dispatch(set_data()),
    facebook_login: (history)=> dispatch(facebook_login(history)),
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);