import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import 'react-table/package.json';

class Table extends React.Component {
    render() {
        const data = [
            {
                name: 'Tanner Linsley',
                email: 'tanner@gmail.com',
                organization: 'test org',
                team: 'test team',
                id: 26,
            },
            {
                name: 'Navid Shekoufa',
                email: 'navid@heyorca.com',
                organization: 'HeyOrca',
                team: 'HeyOrca Dev',
                id: 30,

            }
        ];
        const columns = [
            {
                Header: 'HeyOrca ID',
                accessor: 'id',
                Cell: props => <span className="number">{props.value}</span>
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Organization',
                accessor: 'organization'

            },
            {
                Header: 'Team',
                accessor: 'team'

            },
            {
                Header: 'Actions'
            }

        ];

        return (
            <ReactTable data={data} columns={columns}/>
        );
    }
}
export default Table;
