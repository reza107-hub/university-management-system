import { baseApi } from "../api";

const userApi = baseApi.injectEndpoints({
    endpoints: build => ({
        // getPresentUserWithAdditionalInfo is in base api
        // uselist collection
        getUser: build.query({
            query: () => ({
                url: `/users`,
                method: 'GET',
            }),
        }),
    })
})

export const { useGetUserQuery } = userApi