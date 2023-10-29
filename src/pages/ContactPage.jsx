import React, {Component} from 'react';
import contactIll from '../assets/images/contact.svg';
import Swal from 'sweetalert2'; // Import SweetAlert
import emailjs from 'emailjs-com';
import {Form, Button} from 'reactstrap';
import {TextField} from '@mui/material';
import '../styles/contactPage.css';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      phone: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message, phone } = this.state;

    if (!name || !email || !message || !phone) {
      // Check if any of the required fields is empty
      Swal.fire('Error', 'Please fill out all the fields.', 'error');
      return; // Exit the function without making the API call
    }

    emailjs
      .send(
        'service_j1dp93q',
        'template_tpi8eu9',
        {
          to_email: 'recipient@example.com', // Replace with the recipient's email
          from_name: name,
          from_email: email,
          from_phone: phone,
          message: message,
        },
        '2-E011kpHafscnFGM'
      )
      .then((response) => {
        console.log('Email sent successfully', response);
        Swal.fire('Success!', 'Your Message has been sent.', 'success').then(() => {
          this.setState({
            name: '',
            email: '',
            message: '',
            phone: '',
          });
        });
      })
      .catch((error) => {
        console.error('Failed to send email', error);
        Swal.fire('Error', 'Failed to send email', 'error');
      });
  };

  render() {
    const { name, email, message, phone } = this.state;

    return (
      <div className='outer_Box'>
          <div className='contactPage'>
              <div className='ill_sec'>
                  <img src={contactIll} alt="" />
              </div>
              <div className='form_sec'>
                  <h1>Contact</h1>
                  <Form className='form_contact' onSubmit={this.handleSubmit}>
                  <TextField
                  fullWidth
                  placeholder="Your Name"
                  name="name"
                  variant="outlined"
                  margin="normal"
                  value={name}
                  onChange={this.handleInputChange}
                />
                <TextField
                  fullWidth
                  placeholder="Your Email"
                  name="email"
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={this.handleInputChange}
                />
                <TextField
                  fullWidth
                  placeholder='Your Phone Number'
                  name="phone"
                  variant="outlined"
                  margin="normal"
                  value={phone}
                  onChange={this.handleInputChange}
                />
                <TextField
                  className='msg'
                  fullWidth
                  placeholder="Message"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  value={message}
                  onChange={this.handleInputChange}
                />
                  <Button className='submit_btn' type='submit'>Send</Button>
                </Form>
              </div>
          </div>
      </div>
    )
  }
}

export default ContactPage;