import React, { Component } from 'react';
import GotService from '../../../service/godInhelp';
import ItemDetails, {Field} from '../../itemDetails'; 
import ItemsLIst from '../../itemsList';
import ErrorMasage from '../../error';

export default class CharacterPage extends Component {

    GotService = new GotService();

    state = {
        selectedChar: null,
        error: false
    }

    componentDidCatch() {
        console.log('Error');
        this.setState({
            error: true
        })
    }
    onCharSeelected = (id) =>{
        this.setState({
            selectedChar: id + 41
        })
        
    }

    render() {
     
        if(this.state.error) {
            return <ErrorMasage/>
        }
        const itemList = (
            <ItemsLIst 
            getData={this.GotService.getAllCharacters}
            onCharSeelected={this.onCharSeelected}
            renderItem={(item) => `${item.name} (${item.gender})`}
            />
        )
        
        return (
            <>
                {itemList}
                <ItemDetails 
                    charId={this.state.selectedChar}
                    getData={this.GotService.getCharacter}>
                    <Field field="gender" label="Gender" />
                    <Field field="born" label="Born" />
                    <Field field="died" label="Died" />
                    <Field field="culture" label="Culture" />
                </ItemDetails>
            </>

        )
    }
    
}
