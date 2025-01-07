/* eslint-disable react/prop-types */

function ResultTable({results}) {
  return (
    <div className="result__container">
      <table border={1} className="result__table">
        <thead>
          <th className="result__table--cell">Mouse Click Number</th>
          <th className="result__table--cell">Reaction Time (s)</th>
        </thead>
        <tbody>
          {results?.map((result, index) => (
            <tr key={index}>
              <td>{result?.clickNo}</td>
              <td>{parseFloat(result?.time/1000).toFixed(2)}s</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable