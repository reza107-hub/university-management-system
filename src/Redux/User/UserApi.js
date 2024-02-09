import { baseApi } from "../api";

const userApi = baseApi.injectEndpoints({
    endpoints: build => ({
        // getPresentUserWithAdditionalInfo is in base api
        // user list collection
        getUser: build.query({
            query: () => ({
                url: `/users`,
                method: 'GET',
            }),
        }),
        // admin list get
        getAdminList: build.query({
            query: () => ({
                url: `/admin/admin-list`,
                method: 'GET',
            }),
            providesTags: ['admin-list']
        }),
        // admin delete
        deleteAnAdmin: build.mutation({
            query: (body) => ({
                url: `/admin/delete`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['admin-list']
        }),
    })
})

export const { useGetUserQuery, useGetAdminListQuery, useDeleteAnAdminMutation } = userApi