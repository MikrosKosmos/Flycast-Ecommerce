import { environment } from 'src/environments/environment';

export const url = {
    Login: environment.api_url + '/auth',
    RegisterUser: environment.api_url + '/users',
    GetUserDetails: environment.api_url + '/users?user_id=',
    GetStates: environment.api_url + '/city/state',
    GetCity: environment.api_url + '/city?state_id=',
    AddOrUpdateAddress: environment.api_url + '/users/address',
    GetUserAddress: environment.api_url + '/users/address?user_id=',
    GetAllAssetsByCategory: environment.api_url + '/asset/product?category_id=',
    GetSKUs: environment.api_url + '/sku?sku=',
    AddToCart: environment.api_url + '/cart',
    UpdateRating: environment.api_url + '/sku/rating',
    CreateOrder: environment.api_url + '/order',
    GetOrderDetails: environment.api_url + '/order',
}

export const apiKey = {
    key: 'bGN5YXNI'
}