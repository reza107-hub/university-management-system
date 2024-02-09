const Table = ({ Content, children }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
        <tr>
          {Content?.map((item) => (
            <th key={item.name} scope="col" className="px-6 py-3 text-center">
              {item.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-center">{children}</tbody>
    </table>
  );
};

export default Table;
