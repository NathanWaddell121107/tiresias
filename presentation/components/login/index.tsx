import React from 'react'
import * as Styles from './login.styles'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

interface Props {
	modalOpen: boolean
	toggleModal: () => void
}

const Login: React.FC<Props> = ({ modalOpen, toggleModal }) => {
	return (
		<Modal isOpen={modalOpen} toggle={toggleModal}>
			<ModalHeader>Login</ModalHeader>
			<ModalBody>Login content</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={toggleModal}>
					Login
				</Button>{' '}
				<Button color="secondary" onClick={toggleModal}>
					Cancel
				</Button>
			</ModalFooter>
		</Modal>
	)
}

Login.displayName = 'Login'

export default Login
