import React from 'react'

function ResultTable({ data, rows, cols, sqrs, status }) {


    return (
        <div className="container">
            <table>
                <tbody>
                    {data.map((item, index) => {
                        return (<tr key={index}>
                            {item.map((internalItem, ind) => <td key={index + ind}>{internalItem}</td>)}
                        </tr>);
                    })}
                </tbody>
            </table>
            {data && data.length > 0 ? (
                <>
                    <div className="result">
                        Rows result {status.rows ? " OK" : " NOT OK"}
                        <div>{rows.map((item, index) => " row " + index + ":" + item)}</div>
                    </div>
                    <div className="result">
                        Columns result {status.cols ? " OK" : " NOT OK"}

                        <div>{cols.map((item, index) => " col " + index + ":" + item)}</div>
                    </div>
                    <div className="result">
                        Squares result {status.sqrs ? " OK" : " NOT OK"}

                        {sqrs.map((item, index) => " sqr " + index + ":" + item)}
                    </div>
                </>)
                : <div>Please press check to get the result</div>
            }
        </div>);
}

export default ResultTable
