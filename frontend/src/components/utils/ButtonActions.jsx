import Swal from 'sweetalert2';
import axios from 'axios';

export const deleteConfirmation = (id, records, setRecords, setFilterItems) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        const updateRecords = records.filter(row=>row.id !== id);
        setRecords(updateRecords);
        setFilterItems(updateRecords);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      })
      .catch(err=>console.log(err))
    }
  })
}

