import { useGetOngoingSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'

const SixtyMarksOfRunningSemesterCourse = () => {
  const { data: ongoingSemesterRegistration } =
    useGetOngoingSemesterRegistrationQuery(undefined)
  console.log(ongoingSemesterRegistration)
  return <div>This is SixtyMarksOfRunningSemesterCourse</div>
}

export default SixtyMarksOfRunningSemesterCourse
