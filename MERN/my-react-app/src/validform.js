
import react from 'react'
import './index.css'
export default class UserForm extends react.Component {

    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            spouseName: '',
            kidsCount: '',
            errors: {
                fullName: '',
                spouseName: '',
                kidsCount: ''
            }
        }
    }





    render() {
        return <div>
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Enter  Details</h2>
                    <form onSubmit={this.doValidation}  >
                        <div className='fullName'>
                            <label htmlFor="fullName">Full  Name</label>
                            <input type="text" name="fullName" onChange={this.doValidation}></input>
                            < span className="error">{this.state.errors.fullName}</span>
                        </div>
                        <div className='spouseName'>
                            <label htmlFor="fullName">Spouse  Name</label>
                            <input type="text" name="spouseName" onChange={this.doValidation}></input>
                            < span className="error">{this.state.errors.spouseName}</span>
                        </div>
                        <div className='kidsCount'>
                            <label htmlFor="fullName">no of kids</label>
                            <input type="text" name="kidsCount" onChange={this.doValidation}></input>
                            < span className="error">{this.state.errors.kidsCount}</span>
                        </div>
                        <div className='submit'>
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div >
        </div >
    }


    doValidation = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        // destructing
        let errors = this.state.errors;
        switch (name) {
            case 'fullName':
                errors.fullName = value.length < 3 ? 'Full Name must be of atleast three characters' : '';
                break;
            case 'spouseName':
                errors.spouseName = value.length < 5 ? 'Spouse Name must be of atleast five characters' : '';
                break;
            case 'kidsCount':
                errors.kidsCount = parseInt(value) <=2  ? 'You Must have two kids to attend the training' : '';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value });
    }



}