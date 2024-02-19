const CourseTable = ({ CourseData }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
        <tr>
          <th scope="col" className="px-6 py-3 text-center">
            Course Title
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Course Code
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Course Credits
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Pre Requisite Courses
          </th>
        </tr>
      </thead>
      <tbody className="text-center">
        {CourseData?.data.map((result) =>
          CourseData.data ? (
            <tr
              key={result?._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-bold text-lg">
                {result?.batchNumber}
              </td>

              <td className="px-6 py-4">
                <button className={`btn-primary`}>Button</button>
              </td>
            </tr>
          ) : (
            <tr key={result._id}></tr>
          ),
        )}
      </tbody>
    </table>
  )
}

export default CourseTable
