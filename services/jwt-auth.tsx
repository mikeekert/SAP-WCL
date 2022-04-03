import axios from "axios";
import { Secret, verify } from 'jsonwebtoken';

export type WCLResp = {
    "token_type": string,
    "expires_in": number,
    "access_token": string
}

export function setWCLToken(token: string) {
    sessionStorage.setItem('wcl', token)
}

export function checkWCLTokenValidity(token: string) {
    const secret = process.env.WCL as Secret;
    try {
        const decoded = verify(token, secret);
        return true;
    } catch (err) {
        return false;
    }
}

export async function fetchGetWCLToken(): Promise<WCLResp> {
    return await axios.post('https://www.warcraftlogs.com/oauth/token',
        {
            'grant_type': 'client_credentials'
        },
        {
            auth: {
                username: '95f5ed07-e161-4de3-b090-d94cbaa75fb2',
                password: 'tDUa35Wv8qL9H1YGuP4QYU1cH7ZLjJD7D0yhtSUl'
            }
        }
    )
}
