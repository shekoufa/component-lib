import ReactTable from 'react-table';

import 'react-table/package.json';

render()
{
    const data = [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23
        },
        name: 'Navid Shekoufa',
        age: 30,
        friend: {
            name: 'David Tanner',
            age: 31
        }
    }];
    const columns = [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className="number">{props.value}</span>
        },
        {
            id: 'friendName',
            Header: 'Friend Name',
            accessor: d => d.friend.name
        },
        {
            Header: props => <span>Friend Age</span>,
            accessor: 'friend.age'
        }

    ];

    <ReactTable minRows = {3} data = {data} columns = {columns} />
}
export default Table;