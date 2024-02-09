import { baseApi } from "../../api";

const adminApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUserIsAdmin: build.query({
            query: (email) => ({
                url: `/admin/${email}`,
                method: 'GET',
            })
        })
    })
})

export const { useGetUserIsAdminQuery } = adminApi