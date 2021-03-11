import React from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { Dialog } from '@material-ui/core';
import FormDialog from '../Dialog';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import HorizontalLinearStepper from '../Stepper';

const List = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [columns, setColumns] = React.useState([
        { title: 'Name', field: 'name' },
        { title: 'Sur Name', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        { title: 'Birth City', field: 'birthCity', lookup: { 34: 'Karachi', 63: 'Lahore' } }
    ]);
    const [data, setData] = React.useState([
        { name: 'Abeer', surname: 'Ali', birthYear: 1995, birthCity: 63 }
    ])
    return (
        <div style={{ Width: '100% !important', margin : 'auto !important' }}>
            <FormDialog open={open} handleClose={handleClose}/>
           
            {open==true?<HorizontalLinearStepper/>:(
            <MaterialTable
                title = "Registration Patient List"
                columns = {columns}
                data = {data}
                actions={[
                    {
                        icon: AddIcon,
                        tooltip: 'Add',
                        isFreeAction: true,
                        onClick: handleClickOpen,
                    },
                    // {
                    //     icon: AddIcon,
                    //     tooltip: 'Add',
                    //     onClick: handleClickOpen,
                    // }
                  ]}
                // editable={{
                    // isEditable: rowData => rowData.name === 'a', // only name(a) rows would be editable
                    // isEditHidden: rowData => rowData.name === 'x',
                    // isDeletable: rowData => rowData.name === 'b', // only name(b) rows would be deletable,
                    // isDeleteHidden: rowData => rowData.name === 'y',
                    // onBulkUpdate: changes => 
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             /* setData([...data, newData]); */

                    //             resolve();
                    //         }, 1000);
                    //     }),
                    // onRowAddCancelled: rowData => console.log('Row adding cancelled'),
                    // onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
                    // onRowAdd: newData =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             /* setData([...data, newData]); */

                    //             resolve();
                    //         }, 1000);
                    //     }),
                    // onRowUpdate: (newData, oldData) =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             const dataUpdate = [...data];
                    //             const index = oldData.tableData.id;
                    //             dataUpdate[index] = newData;
                    //             setData([...dataUpdate]);

                    //             resolve();
                    //         }, 1000);
                    //     }),
                    // onRowDelete: oldData =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             const dataDelete = [...data];
                    //             const index = oldData.tableData.id;
                    //             dataDelete.splice(index, 1);
                    //             setData([...dataDelete]);

                    //             resolve();
                    //         }, 1000);
                    //     })
                // }}
                editable={{
                    onBulkUpdate: changes =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          resolve();
                        }, 1000);
                      }),     
                    onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          resolve();
                        }, 1000);
                      }),     
                  }}
            />)}
        </div>
    )
}

export default List
