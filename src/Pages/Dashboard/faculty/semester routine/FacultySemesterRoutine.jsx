import Loader from '../../../../Components/Loader/Loader'
import useAuth from '../../../../Hooks/useAuth'
import { useGetPresentUserWithAdditionalInfoQuery } from '../../../../Redux/features/User/UserApi'
import {
  useGetFacultyListQuery,
  useGetFacultySemesterRoutineQuery,
} from '../../../../Redux/features/faculty/FacultyApi'

const FacultySemesterRoutine = () => {
  const { user } = useAuth()
  const { data: currentUser } = useGetPresentUserWithAdditionalInfoQuery(
    user?.email,
  )
  const { data: facultyLists } = useGetFacultyListQuery(undefined)
  const currentFaculty = facultyLists?.data?.find(
    (result) => result?.userAdditionalInfoId?._id === currentUser?.data?._id,
  )

  const { data: offeredCourses } = useGetFacultySemesterRoutineQuery(
    currentFaculty?._id,
  )
  if (!offeredCourses || !offeredCourses?.data?.length) {
    return <Loader/>
  }
  const singleCourse = offeredCourses?.data?.find(
    (result) => result?.facultyId === currentFaculty?._id,
  )
  const semesterTitle = singleCourse?.academicSemesterId

  const reducedData = offeredCourses?.data?.reduce((acc, course) => {
    const { routine, courseId, sectionId } = course
    const { title } = courseId
    const { name } = sectionId

    routine.forEach((item) => {
      acc.push({
        days: item.days,
        startTime: item.startTime,
        endTime: item.endTime,
        courseTitle: title,
        sectionName: name,
      })
    })

    return acc
  }, [])
  return (
    <div>
      <p className="text-center text-primary font-bold text-2xl mt-3 mb-10">
        Your {semesterTitle?.name} {semesterTitle?.year} routine
      </p>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Days
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Start Time - End Time
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Course
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Batch `(Section)`
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {reducedData &&
            reducedData.map((result) => (
              <tr
                key={result?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">{result?.days}</td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.startTime} - {result?.endTime}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.courseTitle}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.sectionName}
                </td>

                <td className="px-6 py-4">
                  <select
                    className="rounded-md"
                    id="actions-select"
                    // onClick={(e) => {
                    //   if (e.target.value === 'update') {
                    //     updateModal(result?._id)
                    //     e.target.selectedIndex = 0
                    //   } else if (e.target.value === 'delete') {
                    //     handleDelete(result?._id)
                    //     e.target.selectedIndex = 0
                    //   } else if (e.target.value === 'offer') {
                    //     openModalForOfferCourse(result?._id)
                    //     e.target.selectedIndex = 0
                    //   }
                    // }}
                  >
                    <option>Actions</option>
                    <option value="offer">Offer The Course</option>
                    <option value="update">Update The Course</option>
                    <option value="delete">Delete The Course</option>
                  </select>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default FacultySemesterRoutine
