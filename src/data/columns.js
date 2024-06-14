const columns = [
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'otherInfo',
    headerName: 'Other Info',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: ({ row }) => {
      console.log(row)
      return (<>{row?.otherInfo?.otherInfo?.additionalInfo?.moreInfo?.episodes?.join(', ')}</>)
    },
    valueGetter: (value) => JSON.stringify(value),
  },
];

export default columns;