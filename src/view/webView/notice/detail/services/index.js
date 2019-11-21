import {_GET} from '../../../../utils/axios'
export const get = (params) => {
    return _GET('/api/base/notice/detail', params)
}