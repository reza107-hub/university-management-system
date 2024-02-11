import { baseApi } from "../../api";

const admissionApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createAdmissionRequest: build.mutation({
            query: (body) => ({
                url: `/admission-request`,
                method: 'POST',
                body
            })
        }),
        getAdmissionRequest: build.query({
            query: () => ({
                url: `/admission-request`,
                method: 'GET',
            })
        }),
    })
})


export const { useCreateAdmissionRequestMutation, useGetAdmissionRequestQuery } = admissionApi