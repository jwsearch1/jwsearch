import React from "react";
import styled from "styled-components";
import * as variable from '../../variables';
import Form from "../../form";


const SectionFormStyle = styled.section`
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
`;



const SectionForm = ({object}) => {
	const {markdown} = object
	return(
<SectionFormStyle className="section-form">
<Form>
<h3>{markdown}</h3>
<form name="homecontact" method="post" action="/thank-you" netlify-honeypot="bot-field" data-netlify="true">
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
</SectionFormStyle>
	)

}

export default SectionForm