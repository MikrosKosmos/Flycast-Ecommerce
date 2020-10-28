import { environment } from 'src/environments/environment';

export const url = {
    Login: environment.api_url + '/auth',
    RegisterUser: environment.api_url + '/users',
    GetUserDetails: environment.api_url + '/users?user_id=',
}

export const apiKey = {
    key: 'bGN5YXNI'
}