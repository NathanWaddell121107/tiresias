import React, { useState } from 'react'
import * as Styles from './signup.styles'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

interface Props {
	modalOpen: boolean
	toggleModal: () => void
}

const Signup: React.FC<Props> = ({ modalOpen, toggleModal }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [checked, setChecked] = useState(false)
	return (
		<Modal isOpen={modalOpen} toggle={toggleModal} style={{ margin: '20% auto' }}>
			<ModalHeader style={{ display: 'flex', justifyContent: 'center' }}>Signup</ModalHeader>
			<ModalBody>
				<Form>
					<FormGroup>
						<Label for="exampleEmail">Email</Label>
						<Input
							type="email"
							name="email"
							id="exampleEmail"
							placeholder="user@email.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="examplePassword">Password</Label>
						<Input
							type="password"
							name="password"
							id="examplePassword"
							placeholder="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FormGroup>
					<FormGroup>
						<Label>Remember me</Label>
						<Input
							style={{ marginLeft: '0.5rem' }}
							type="checkbox"
							name="rememberMe"
							checked={checked}
							onChange={(e) => setChecked(e.target.checked)}
						/>
					</FormGroup>
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={toggleModal}>
					Signup
				</Button>{' '}
				<Button color="secondary" onClick={toggleModal}>
					Cancel
				</Button>
			</ModalFooter>
		</Modal>
	)
}

Signup.displayName = 'Signup'

export default Signup
