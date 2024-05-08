import { baseApi } from '../../api'

const facultyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFaculty: build.mutation({
      query: (body) => ({
        url: `/faculty/create-faculty`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user', 'admin', 'faculty', 'admin-list'],
    }),
    // faculty list get
    getFacultyList: build.query({
      query: (params) => ({
        url: `/faculty/faculty-list`,
        method: 'GET',
        params,
      }),
      providesTags: ['admin-list', 'user', 'faculty', 'admin'],
    }),
    //  faculty delete
    deleteFaculty: build.mutation({
      query: (body) => ({
        url: `/faculty/delete-faculty`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['admin-list', 'user', 'admin', 'faculty'],
    }),
    // get is user is faculty
    getUserIsFaculty: build.query({
      query: (email) => ({
        url: `/faculty/${email}`,
        method: 'GET',
      })
    }),
    // faculty class routine
    getFacultySemesterRoutine: build.query({
      query: (facultyId) => {
        return {
          url: `/offered-course/facultyRoutine/${facultyId}`,
          method: 'GET',
        }
      }
    })
  }),
})

export const {
  useCreateFacultyMutation,
  useGetFacultyListQuery,
  useDeleteFacultyMutation,
  useGetUserIsFacultyQuery,
  useGetFacultySemesterRoutineQuery
} = facultyApi
