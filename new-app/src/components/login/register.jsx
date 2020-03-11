import React from 'react';


export class Register extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''


        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };
    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value

        });
    }
    handleSubmit(e){
        e.preventDefault();
        console.log("User name and Password: ");
        console.log(this.state)
    }

    render() {
        return (
            <div   className='base-container' ref={this.props.containerRef}>
                <div className='header'>Register</div>
                <form onSubmit = {this.handleSubmit} className='content'>

                    <div className='form' >
                        <div className='form-group'>
                            <label htmlFor="username">Username/Email</label>
                            <input type="text" name='username' value = {this.state.username} onChange = {this.handleChange} placeholder='username' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' value = {this.state.password} onChange = {this.handleChange}placeholder='password' />
                        </div>
                        <div className='footer'>
                        
                    </div>

                    <button type='submit' className='btn'>Join Us Now!</button>
                </div>
                </form>

            </div>


        )
    }


}