import axios from 'axios';
import { designerAPI } from '../Constants/API';

const designerAxios = axios.create({
     baseURL : designerAPI
}) 

export default designerAxios ;


