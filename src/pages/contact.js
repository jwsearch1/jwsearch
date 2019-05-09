import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout'
import contactphoto from '../images/contact2.jpeg'
import Container from '../components/layout/container'
import * as variable from '../components/variables'
import styled from 'styled-components'
import Form from '../components/form'

// const Styledlink = mixins.styledlink

// const Styledbutton = mixins.styledbutton

const ContactContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding:50px 0px;
border-bottom: thin solid #eee;
button{
  color: white;
  background-color:black;
  border-radius: 25px;
  padding: 10px 30px;
  border: 0px;
  color: white;
  font-size:22px;
  display: inline-block;
  cursor:pointer;
}
label{
  font-weight:bold;
}
input{
  padding:20px 20px;
  border-radius:30px
}
textarea{
  padding:20px 30px
  text-align:left;
  min-height:100px;
  border-radius:10px;
}
@media (max-width: ${variable.mobileWidth}) {

}
`
const ContactLeft = styled.div`
flex-basis:calc(50% - 20px);
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
}
`
const ContactRight = styled.div`
flex-basis:calc(50% - 20px);
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
}
`
export default class ContactPage extends React.Component {
  render() {

    return (
      <Layout>
              <Helmet>
      <meta charSet="utf-8" />
      <title>ugteleservices | Contact</title>
      <link rel="canonical" href="https://www.ugteleservices.com/contact"></link>
      </Helmet>
        <section className="hero" style=
        {{ backgroundImage: `url(${contactphoto})`,
           paddingTop:'150px',
           paddingBottom:'50px',
           backgroundSize:'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight:'400px',
    }}
    >
            <Container style={{
              textAlign:'center',
            }}>
            <h1>Contact</h1>

            </Container>
            </section>
            
            <Container style={{
              textAlign:'center',
            }}>
            
            <section>
          
        <ContactContainer>
        <ContactLeft>

      <div style={{fontSize:'32px'}}>
        We realize your time is valuable.<br></br>We promise not to waste it.
      </div>
        <p>P.O Box 471</p>

        <p>St. Croix Falls, WI 54024</p>

        <p>651-399-9164</p>
      
        </ContactLeft>
      <ContactRight>
      <Form>
      <form name="contact" method="post" action="/thank-you" netlify-honeypot="bot-field" data-netlify="true">
			<input type="hidden" name="form-name" value="homecontact" />
			<p hidden> <label htmlFor="bot-field">Don’t fill this out:{' '}<input name="bot-field" /> </label> </p>
								<div class="form-group">
									<label for="name" class="lb-name">NAME</label>
									<input type="text" name="name" id="name" class="form-control" data-required="true" data-interactive="true" required />
								</div>
								<div class="form-group">
									<label for="email" class="lb-email">EMAIl ADDRESS</label>
									<input type="email" name="email" id="email" class="form-control" data-required="true" data-interactive="true" required />
								</div>
								<div class="form-group">
									<label for="phone" class="lb-phone">PHONE</label>
									<input type="tel" name="phone" id="phone" class="form-control" data-required="false" data-interactive="true" required />
								</div>
								<div class="form-group text">
									<label for="textarea" class="lb-message">YOUR MESSAGE</label>
									<textarea name="textarea" id="textarea" class="textarea form-control" data-required="true" data-trim="true"/>
								</div>
								<div>
									<button type="submit" class="btn btn-submit">SEND MESSAGE</button>
								</div>
							</form>
          </Form>
          </ContactRight>

          </ContactContainer>
          
          </section>
            </Container>

        
      </Layout>
    )
  }
}