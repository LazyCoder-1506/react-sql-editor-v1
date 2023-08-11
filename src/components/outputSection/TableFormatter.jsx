const getTableHeadersFromData = (data) => {
  const keys = Object.keys(data[0]);
  return (
    <tr className="bg-blue-500">
      {keys.map((i) => (
        <td className="uppercase font-medium text-sm text-white p-2">{i}</td>
      ))}
    </tr>
  );
};

const getTableRowsFromData = (data) => {
  const keys = Object.keys(data[0]);
  return data.map((i) => (
      <tr className="border-t border-gray-300 hover:bg-blue-200/20">
        {keys.map((a) => {
          return <td className="border-x border-gray-300 p-2">{i[a]}</td>
        })}
      </tr>
    )
  )
}

export { getTableRowsFromData, getTableHeadersFromData };