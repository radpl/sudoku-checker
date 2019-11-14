import React from 'react'

function ResultTable({ data, rows, cols, sqrs, status }) {


    return (
        <div className="container">
            <table>
                {data.map((item) => {
                    return (<tr>
                        {item.map(internalItem => <td>{internalItem}</td>)}
                    </tr>);
                })}
            </table>
            <div className="result">Rows result {status.rows ? " OK" : " NOT OK"}</div>
            {rows.map((item, index) => " row " + index + ":" + item)}
            <div className="result">Columns result {status.cols ? " OK" : " NOT OK"}</div>
            {cols.map((item, index) => " col " + index + ":" + item)}
            <div className="result">Squares result {status.sqrs ? " OK" : " NOT OK"}</div>
            {sqrs.map((item, index) => " sqr " + index + ":" + item)}
        </div>
    );
}

export default ResultTable
