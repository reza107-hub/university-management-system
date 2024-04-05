import { useState } from "react";
import { useGetOfferedCourseQuery } from "../../../../Redux/features/offeredCourse/offeredCourse.api";
import SearchName from './../../../../Components/Search/SearchName';


const OfferedCourseTable = () => {
    // const [programmeName, setProgrammeName] = useState('')


  const [params, setParams] = useState('')

  const { data } = useGetOfferedCourseQuery(params)
  const SearchPlaceHolderName = 'offered course'
  console.log(data?.data)
 
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <label className="sr-only">Search</label>
 
        <SearchName
          setParams={setParams}
          SearchPlaceHolderName={SearchPlaceHolderName}
          searchTerm='name'
        />

      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              code
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              credit
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data?.data.map((result) =>
            data.data ? (
              <tr
                key={result?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">{result?.courseId?.title}</td>
                <td className="px-6 py-4 font-bold text-lg">{result?.courseId?.code}</td>
                <td className="px-6 py-4 font-bold text-lg">{result?.courseId?.credits}</td>
                 
              </tr>
            ) : (
              <tr key={result._id}></tr>
            ),
          )}
        </tbody>
      </table>
    </div>
    );
};

export default OfferedCourseTable;