import axios from 'axios';


const api_key = 1;
const baseURL = `https://www.thecocktaildb.com/api/json/v1/${api_key}/`;

const instance = axios.create({
    baseURL
});

const dataService = {
    randomDrinks() {
        return new Promise(resolve => {
            instance.get('/random.php').then(res => {
                resolve(res.data.drinks);
            });
        });
    }
};

export default dataService;