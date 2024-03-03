import React, { useState } from 'react'
import { Container, Row, Nav, Navbar, Form } from 'react-bootstrap';

const NavbarMenu = ({filterbySearch}) => {
    const [searchValue, setSearchValue] = useState('')

    const onSearch = (e) =>{
        e.preventDefault()
        filterbySearch(searchValue)
        setSearchValue('')
    }

    return (
        <Row>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/menuFood">
                        <div className='brand-color'>Menu Food</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="mx-2"
                            onChange={(e) => setSearchValue(e.target.value)}
                            value={searchValue}
                            />
                            <button onClick={onSearch} className='btn-search'>Search</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    )
}

export default NavbarMenu;
