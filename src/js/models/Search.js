import axios from 'axios';

export default class Search {
    constructor(query) {        
        this.query = query;        
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'a9be2a5d628b7c4eb90d208f9a14f4e7';
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}

