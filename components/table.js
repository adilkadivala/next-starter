import { useId } from "react";

export const Table = ({ TABLE_HEAD, TABLE_ROWS }) => {
  const elementId = useId();
  return (
    <table className="w-full min-w-max table-auto text-left" id={elementId}>
      <thead>
        <tr>
          {TABLE_HEAD.map((head) => (
            <th
              key={head}
              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map(({ id, name, message }, index) => {
          const isLast = index === TABLE_ROWS.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={id}>
              <td className={classes}>{name}</td>
              <td className={`${classes} bg-blue-gray-50/50`}>{message}</td>
              <td className={`${classes} bg-blue-gray-50/50`}>Edit</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
