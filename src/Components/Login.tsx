import React, { useRef, useState } from 'react'
import { Card, Button, Form, FormGroup, Alert, Container } from 'react-bootstrap'
// import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
	const [loading, setLoading] = useState(false)
	return (
		<>
			<Container className='d-flex align-items-center justify-content-center h-100' style={{ minHeight: '100vh' }}>
				<div className='w-100' style={{ maxWidth: '400px' }}>
					<Card>
						<Card.Body>
							<h2 className='text-center mb-4'>Log In</h2>
							{/* {error && <Alert variant='danger'>{error}</Alert>} */}

							{/* <Form onSubmit={handleSubmit}> */}
							<Form>

								<FormGroup id='email'>
									<Form.Label>Email</Form.Label>
									{/* <Form.Control type='email' ref={emailRef} required /> */}
									<Form.Control type='email' required />
								</FormGroup>

								<FormGroup id='password'>
									<Form.Label>Password</Form.Label>
									{/* <Form.Control type='password' ref={passwordRef} required /> */}
									<Form.Control type='password' required />
								</FormGroup>
								<Button disabled={loading} className='w-100 mt-2' type='submit'>Log In</Button>
							</Form>
							<Button disabled={loading} className='w-100 mt-2' type='submit' > <i className="bi bi-google mx-2"></i>  Pairwise Login </Button>
							<div className='w-100 text-center mt-3'>
								<Link to='/forgot-password'>Forgot Password</Link>
							</div>
						</Card.Body>
					</Card>
					<div className='w-100 text-center mt-2'>
						Need an account? <Link to='/signup'>Sign up </Link>
					</div>
				</div>
			</Container>
		</>
	)
}
