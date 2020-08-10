import {
    GET_ARTIST_ALL
} from '../types';

import axios from 'axios';
const URL = 'http://localhost:3004';

export function artistListAll(){

    const request = axios.get(`${URL}/artists`)
                    .then( response => response.data );

    return {
        type: GET_ARTIST_ALL,
        payload: request
    }
}