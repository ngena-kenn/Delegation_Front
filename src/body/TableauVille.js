import DataTable from 'react-data-table-component';

const columns = [
    {
        name:'insptt',
        selector: row => row.insptt,
    },
    {
        name:'local',
        selector: row => row.local,
    },
    {
        name:'codePostal',
        selector: row => row.codePostal,
    },
    {
        name:'cdeuo',
        selector: row => row.cdeuo,
    },
]
const data = [
    {
        insptt: '01001',
        local: 'L ABERGEMENT CLEMENCIAT',
        codePostal: '01400',
        cdeuo: 'C043601',
    },
    {
        insptt: '01002',
        local: 'L ABERGEMENT DE VAREY',
        codePostal: '01640',
        cdeuo: 'C043601',
    },
    {
        insptt: '01001',
        local: 'AMBERIEU EN BUGEY',
        codePostal: '01500',
        cdeuo: 'C043601',
    },
]
const paginationComponentOptions = {
    rowsPerPageText: 'File de pagination',
    rangeSeparatorText: 'de',
    selectAllRowsItem: false,
    selectAllRowsItemText: 'Todos',
};

function  MyComponent() {
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination 
            paginationComponentOptions={paginationComponentOptions}
        />
    );
}
export default MyComponent;