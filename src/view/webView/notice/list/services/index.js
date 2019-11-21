import {_GET} from '../../../../utils/axios'
export const query = (params) => {
    return _GET('/api/base/notice/digests', params)
}