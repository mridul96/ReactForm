import React from 'react';
import TextField from 'material-ui/TextField';
import { purple300, orange500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    errorStyle: {
        color: orange500,
    },
    underlineStyle: {
        borderColor: orange500,
      },
      floatingLabelStyle: {
        color: orange500,
      },
      floatingLabelFocusStyle: {
        color: purple300,
      },
    };
    

export default class Form extends React.Component{
    state = {
        EmployeeID: '',
        EmployeeIDerror:'',
        firstName: '',
        firstNameError:'',
        middleName: '',
        middleNameError:'',
        lastName: '',
        lastNameError: '',
        email: '',
        emailError:'',
        DOJ: '',
        DOJerror:'',
        DOE: '',
        DOEerror:'',
        DesignationJoining: '',
        DesignationJoiningError:'',
        SalaryCurrencyJoining: '',
        SalaryCurrencyJoiningError:'',
        AnnualCTCjoining: '',
        AnnualCTCjoiningError:'',
    };

    change = e => {
        this.props.onChange({[e.target.name]: e.target.value})
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {
            EmployeeIDerror: "",
            firstNameError: "",
            middleNameError: "",
            lastNameError: "",
            emailError: "",
            DOJerror: "",
            DesignationJoiningError: "",
            SalaryCurrencyJoiningError: "",
            AnnualCTCjoiningError: "",
        };
        if (this.state.email.indexOf("@") == -1 && this.state.email.indexOf(".")== -1)
        {
            isError = true;
            errors.emailError = "Enter valid Email";
        }    

        let alphaExp = /^[a-zA-Z]+$/;
        if (this.state.firstName.match(alphaExp)==-1)
        {
            return true;
            errors.firstNameError = 'Enter valid name';
        }    
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        const err = this.validate();
        if (!err)
        {
            this.setState({
                EmployeeID: '',
                EmployeeIDerror: '',
                firstName: '',
                firstNameError: '',
                middleName: '',
                middleNameError: '',
                lastName: '',
                lastNameError: '',
                email: '',
                emailError: '',
                DOJ: '',
                DOJerror: '',
                DOE: '',
                DOEerror: '',
                DesignationJoining: '',
                DesignationJoiningError: '',
                SalaryCurrencyJoining: '',
                SalaryCurrencyJoiningError: '',
                AnnualCTCjoining: '',
                AnnualCTCjoiningError: '',
            });
            this.props.onChange({
                EmployeeID: '',
                firstName: '',
                middleName: '',
                lastName: '',
                email: '',
                DOJ: '',
                DOE: '',
                DesignationJoining: '',
                SalaryCurrencyJoining: '',
                AnnualCTCjoining: '',
                }
            )
        }    
        this.setState({
        EmployeeID: '',
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        DOJ: '',
        DOE: '',
        DesignationJoining: '',
        SalaryCurrencyJoining: '',
        AnnualCTCjoining: ''

        });
    }

    required={
        EmployeeID: '',
        firstName: '',
        lastName: '',
        email: '',
        DOJ: '',
        DesignationJoining: '',
        SalaryCurrencyJoining: '',
        AnnualCTCjoining: ''        
    }

    render() {
        return (
            <form>
                <TextField
                    name='EmployeeID'      
                    floatingLabelText="Employee ID"
                    value={this.state.EmployeeID}
                    onChange={e => this.change(e)}
                    errorText={this.state.EmployeeIDerror}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    required
                />
                <br />
                <TextField
                    name='firstName'      
                    floatingLabelText="First Name"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                    errorText={this.state.firstNameError}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <br/>
                <TextField
                    name='middleName'      
                    floatingLabelText="Middle Name"
                    value={this.state.middleName}
                    onChange={e => this.change(e)}
                    errorText={this.state.middleNameError}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <br/>
                <TextField
                    name='lastName'      
                    floatingLabelText="Last Name"
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                    errorText={this.state.lastNameError}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <br/>

                <TextField
                    name='email'      
                    floatingLabelText="Email ID"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    errorText={this.state.emailError}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />

                <br/>
                <TextField
                    name='DOJ'      
                    floatingLabelText="Date of Joining(DD/MM/YYYY)"
                    value={this.state.DOJ}
                    onChange={e => this.change(e)}
                    errorText={this.state.DOJerror}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <br/>

                <TextField
                    name='DOE'      
                    floatingLabelText="Date of Ending(DD/MM/YYYY)"
                    value={this.state.DOE}
                    onChange={e => this.change(e)}
                    errorText={this.state.DOEerror}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />

                <br />
                <TextField
                    name='DesignationJoining'      
                    floatingLabelText="Designation at Joining"
                    value={this.state.DesignationJoining}
                    onChange={e => this.change(e)}
                    errorText={this.state.DesignationJoiningError}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
            
                <br />
                <TextField
                    name='SalaryCurrencyJoining'      
                    floatingLabelText="Salary Currency at  Joining"
                    value={this.state.SalaryCurrencyJoining}
                    onChange={e => this.change(e)}
                    errorText={this.state.SalaryCurrencyJoiningError}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />

                <br />  
                
                <TextField
                    name='AnnualCTCjoining'      
                    floatingLabelText="Annual CTC at  Joining"
                    value={this.state.AnnualCTCjoining}
                    onChange={e => this.change(e)}
                    errorText={this.state.AnnualCTCjoiningError}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <br/>
                <RaisedButton label= 'Submit' onClick={e => this.onSubmit(e)} primary/>
            </form>     
        );
    }        
}