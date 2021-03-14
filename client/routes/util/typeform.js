import axios from 'axios';

export const createHook = (form_id, body) => {
    return axios.put(`https://api.typeform.com/forms/${form_id}/webhooks/{tag}`, body)
}

export const requestHooks = (form_id) => {
    return axios.get(`https://api.typeform.com/forms/${form_id}/webhooks`);
};