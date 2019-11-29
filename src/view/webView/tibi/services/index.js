import { _GET, _POST } from '@/utils/axios'

export const withdraw_data = (json) => {
    return _GET('/api/comm/withdraw/data', json)
}
export const withdraw_transfer = (json) => {
    return _POST('/api/comm/withdraw/transfer', json)
}
export const account_accountTransferUUID = () => {
    return _GET('/api/account/accountTransferUUID')
}