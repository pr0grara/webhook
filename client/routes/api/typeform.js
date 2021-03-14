import { createHook, requestHooks } from '../util/typeform.js';

var req = { "url": "http://localhost:9000/hook", "enabled": true }

export const makeHooks = () => {
    return createHook("AhCdegfT", req)
};