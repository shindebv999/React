import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function ReactStreapExp() {
	return (
		<div>
			<Form>
				<FormGroup>
					<Label for="exampleEmail">
						Email
					</Label>
					<Input
						id="exampleEmail"
						name="email"
						placeholder="Enter Your email"
						type="email"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="examplePassword">
						Password
					</Label>
					<Input
						id="examplePassword"
						name="password"
						placeholder="Enter your unique password"
						type="password"
					/>
				</FormGroup>
				<Button>
					Submit
				</Button>
			</Form>
           
		</div>
	)
}

export default ReactStreapExp;
