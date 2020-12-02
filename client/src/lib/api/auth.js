import client from './client';

export const login = ({ id, passwd }) => client.post('/api/auth/login', { id, passwd });

export const register = ({ type, id, passwd, email, name, addressBasic, addressDetail, latitude, longitude, certifiNumber }) => 
    client.post('/api/auth/register', { type, id, passwd, email, name, addressBasic, addressDetail, latitude, longitude, certifiNumber });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');