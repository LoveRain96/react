import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {
    Container,
    Table,
    Label,
    Input

} from "reactstrap";

import {Button} from 'antd'
import {deleteCompany, editCompany} from "./action";

const mapDispatchToProps = function (dispatch) {
    return {
            editCompany : function (id , name, phoneManager, nameManager, emailManager, address, key_edit) {
                dispatch(editCompany(id, name, phoneManager, nameManager, emailManager, address, key_edit))
            },

            deleteCompany : function (id, key_delete) {
                dispatch(deleteCompany(id, key_delete))
            }


        }
};

const mapStateToProps = function (state) {
    return {
        companies : state.companyReducer
    }
};


class ListCompany extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phoneManager :'',
            emailManager : '',
            nameManager  : '',
            address      : '',
            modalIsOpen: false,
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal(company, key) {
        this.setState({
            modalIsOpen: true,
            name: company.name,
            phoneManager: company.phoneManager,
            emailManager: company.emailManager,
            nameManager: company.nameManager,
            address: company.address,
            id: company.id,
            key_edit: key
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }
    nameChange(event) {
        this.setState({name: event.target.value})
    }

    phoneManagerChange(event) {
        this.setState({phoneManager: event.target.value})
    }

    nameManagerChange(event) {
        this.setState({nameManager: event.target.value})
    }

    emailManagerChange(event) {
        this.setState({emailManager: event.target.value})
    }

    addressChange(event) {
        this.setState({address: event.target.value})
    }
    onEdited (e) {
        e.preventDefault();
        this.props.editCompany(this.state.id, this.state.name, this.state.phoneManager, this.state.emailManager,
            this.state.nameManager, this.state.address, this.state.key_edit);
        this.closeModal();
    }

    onDeleted (e) {
        const nameCompany = e.currentTarget.getAttribute('name');
        let id = e.currentTarget.getAttribute('data-company-id');
        let index =  e.currentTarget.getAttribute('index');
        this.setState.key_delete = index;
        if (window.confirm('Do you want to delete this : '.concat(nameCompany))) {
            this.props.deleteCompany(id,index)
            /* axios.delete('/course/'.concat(courseId)).then(() => {
                 store.dispatch(deleteCourse(courseId, index));
                 this.closeModalDelete();*/
        }
    }
    render() {
        return (
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <th> STT </th>
                        <th> NAME </th>
                        <th> PHONE MANAGER </th>
                        <th> EMAIL MANAGER </th>
                        <th> NAME MANAGER </th>
                        <th> ADDRESS </th>
                        <th> AREA </th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.props.companies.map((company, index) =>
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{company.name}</td>
                            <td>{company.phoneManager}</td>
                            <td>{company.emailManager}</td>
                            <td>{company.nameManager}</td>
                            <td>{company.address}</td>
                            <td>
                                {company.area.name}
                            </td>
                            <td><Button  className={"btn-delete"} data-company-id={company.id} index={index} name={company.name}
                                        onClick={this.onDeleted.bind(this)}> Delete </Button>
                            </td>
                            <td><Button companyid={company.id} onClick={() => this.openModal(company, index)}
                                        style={{marginBottom: '1rem'}}>Edit</Button>
                            </td>

                                                        {/** MODAL **/}
                            <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
                                <Label>Name</Label>
                                <Input name="name" type="text" onChange={this.nameChange.bind(this)}
                                       placeholder="Enter name company" value={this.state.name}/>
                                <Label>Phone Manager</Label>
                                <Input onChange={this.phoneManagerChange.bind(this)} value={this.state.phoneManager} placeholder="Enter phone manager" name="phoneManager" />
                                <Label>Email Manager</Label>
                                <Input onChange={this.emailManagerChange.bind(this)} value={this.state.emailManager} placeholder="Enter email manager" name="emailManager" />
                                <Label>Name Manager</Label>
                                <Input onChange={this.nameManagerChange.bind(this)} value={this.state.nameManager} placeholder="Enter name manager" name="nameManager" />
                                <Label>Address</Label>
                                <Input onChange={this.addressChange.bind(this)} value={this.state.address} placeholder="Enter address" name="address"/>
                                <br/>
                                <Button onClick={this.onEdited.bind(this)}>SAVE</Button>
                            </Modal>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListCompany);