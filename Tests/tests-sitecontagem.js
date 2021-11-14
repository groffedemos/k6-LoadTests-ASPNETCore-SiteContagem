import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    duration: '10s',
    vus: 50
};

export default function() {
    let res = http.get('http://localhost:5000/', );
    check(res, {
        ' status code 200': (r) => r.status === 200
    });
    sleep(1);
};