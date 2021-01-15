import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import './actor.css';
import nextId from "react-id-generator";


import GotService from '../../service/godInhelp';

const Field = ({char, field, label}) => {
    return(
        <tr key={nextId()}>
            <td>{label}</td>
            <td>{char[field]}</td>
        </tr>
    )
}
export {
    Field
}
export default class ItemDetails extends Component{

    GotService = new GotService();

    state = {
        char: null
    }
    componentDidMount(){
        this.updateChar();
    }
    updateChar(){
        const {charId, getData} = this.props;
        
        if(!charId) {
            return;
        }
        getData(charId)
            .then(char => {
                this.setState({char})
            })

    }
    componentDidUpdate(prevProps){
        if(this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }
    render(){
        const {char} =this.state;

        if(!char) {
            return <span className="text">Please select a character</span>
        }
        const {name} = char;
        
        return(
            <>
                <Table className="table">
                <thead>
                    <tr>
                    <th>{name}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char})
                        })
                    }
                </tbody>
                </Table>
        </>
      );
    }
}