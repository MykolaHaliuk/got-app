import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';
import './randomChar.css';
import GotService from '../../service/godInhelp'; 
import Spiner from '../spiner';
import ErrorMasage from '../error';

export default class RandomChar extends Component{
    

    GotService = new GotService();
    
    state = {
        char: {},
        loading: true,
        error: false
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        this.GotService.getRandomCharacter()
            .then(this.onCharLoaded)
            .catch(this.onError);
    }
    componentDidMount(){
        this.updateChar();
        this.timerID = setInterval(this.updateChar, this.props.interval);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render() {  
        const {char, loading, error} = this.state;

        const errorMasage = error ? <ErrorMasage/> : null;
        const spinner = loading ? <Spiner/> : null;
        const status = !(loading || error) ? <InfoTable char={char}/> : null;
            return (
                <>  
                    
                    <div className="table-random">
                        {errorMasage}
                        {spinner}
                        {status}
                    </div>
                    
                </>
                
              );
        
        
    }
}
RandomChar.defaultProps = {
    interval: 15000
}
RandomChar.propTypes = {
    interval: (props, propName, componentName) => {
        const value = props[propName];

        if(typeof value === 'number' && !isNaN(value)){
            return null
        }

        return new TypeError(`${componentName}: ${propName} must be number`);
    }
}
const InfoTable = ({char}) => {
    const {name, gender, born, died, culture}  = char;
    return ( 
        <Table className="tableR">
            <thead>
                <tr>
                <th className="center">Random Character: {name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Gender</td>
                <td>{gender}</td>
                </tr>
                <tr>
                <td>Born</td>
                <td>{born}</td>
                </tr>
                <tr>
                <td>Died</td>
                <td>{died}</td>
                </tr>
                <tr>
                <td>Culture</td>
                <td>{culture}</td>
                </tr>
            </tbody>
        </Table>
    )
}

