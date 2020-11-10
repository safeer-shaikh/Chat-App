import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import logoImage from '../../images/logo.jpg'
import sideImage from '../../images/sideimage.JPG'
import {connect} from 'react-redux'
import { set_data, facebook_login } from '../../store/Action'
class Home extends React.Component{
    render(){
        // console.log('home props=>',this.props)
        return(
            <div className='body'>
                <div className='sub-body'>
                    <div className='heading'>
                        <Link to='/'><img src={logoImage} alt='logo' width='60' height='60' /></Link>
                        <h3>Talkie Web</h3>
                    </div>
                    {/* <button onClick={()=>this.props.set_data()} >check console</button> */}
                    <div className='content'>
                        <div className='sub-content1'>
                            <p>To use Talkie App on your computer: </p>
                            <button onClick={()=>this.props.facebook_login(this.props.history)}>
                                <i class="fa fa-facebook-f"></i>
                                Login with Facebook
                            </button>
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