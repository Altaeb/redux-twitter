export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUSERS(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}