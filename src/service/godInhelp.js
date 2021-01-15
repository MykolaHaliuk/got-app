export default class GotService{
    
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    
    getReso =  async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok){
            throw new Error("We have problem my friend");
        }
        
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getReso(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) =>{
        const res = await this.getReso(`/characters/${id}`);
        return this._transformCharacter(res);
    }
    getBook = async(id) =>{
        const res = await this.getReso(`/books/${id}`);
        return this._transformBooks(res);
    }

    getRandomCharacter = () => {
        const rand = Math.floor(Math.random()*140+25);

        return this.getCharacter(rand);
    }

    getAllHouses = async() => {
        const res = await this.getReso(`/houses/`);
        return res.map(this._transformHouse)
    }
    getHouse = async(id) => {
        const res = await this.getReso(`/houses/${id}`);
        return this._transformHouse(res);
    }
    getAllBooks = async() => {
        const res = await this.getReso(`/books/`);
        return res.map(this._transformBooks);
    }
    

    _transformHouse(house) {
        return {
            name: house.name || 'no data',
            region: house.region || 'no data',
            words: house.words || 'no data',
            titles: house.titles || 'no data',
            overlord: house.overlord || 'no data',
            ancestralWeapons: house.ancestralWeapons || 'no data',
        }
    }
    _transformBooks(book) {
        return {
            name: book.name || 'no data',
            numberOfPages: book.numberOfPages || 'no data',
            publiser: book.publiser || 'no data',
            released: book.released || 'no data'
        }
    }

   
    _transformCharacter(char) {
        return {
                name: char.name || 'no data',
                gender: char.gender || 'no data',
                born: char.born || 'no data',
                died: char.died || 'no data',
                culture: char.culture || 'no data',
                url: char.url
        }
    }
}