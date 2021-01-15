import React, { Component } from 'react';
import GotService from '../../../service/godInhelp';
import ItemDetails, {Field} from '../../itemDetails'; 
import ItemsLIst from '../../itemsList';
import ErrorMasage from '../../error';

export default class HousesPage extends Component {

    GotService = new GotService();

    state = {
        selectedItem: null,
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
            selectedItem: id + 1
        })
        
    }

    render() {
        
        if(this.state.error) {
            return <ErrorMasage/>
        }
        const itemList = (
            <ItemsLIst 
            getData={this.GotService.getAllHouses}
            onCharSeelected={this.onCharSeelected}
            renderItem={(item) => `${item.name}`}
            />
        )
        
        return (
            <>
                {itemList}
                <ItemDetails 
                    charId={this.state.selectedItem}
                    getData={this.GotService.getHouse}>
                    <Field field="region" label="Region" />
                    <Field field="words" label="Words" />
                    <Field field="titles" label="Titles" />
                    <Field field="overlord" label="Overlord" />
                    <Field field=" ancestralWeapons" label=" ancestral Weapons" />
                </ItemDetails>
            </>

        )
    }
    
}
