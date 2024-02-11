const AdmissionRequests = () => {
  return (
    <div>
      {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              email
            </th>
            <th scope="col" className="px-6 py-3">
              Applied Dept.
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {lists?.map((list) => (
            <>
              <tr
                key={list?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={list?.image}
                    alt={`Profile of ${list?.name}`}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {list?.name?.firstName + " " + list?.name?.lastName}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{list?.email}</td>
                <td className="px-6 py-4">{list?.department}</td>
                <Link
                  to={`/dashboard/admission-requests-lists/details/${list?.email}`}
                >
                  <td className="px-6 py-4 text-primary hover:underline">
                    See Details
                  </td>
                </Link>
              </tr>
            </>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default AdmissionRequests;
