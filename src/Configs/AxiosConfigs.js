import axios from 'axios';
import {Platform} from 'react-native';

export const API = axios.create({
  baseURL: `http://${Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'}:8001/`,
  headers: {'Content-type': 'application/json'},
});
