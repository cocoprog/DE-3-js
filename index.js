let button = document.getElementById("btn1");

button.addEventListener("click", () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto ha sido agregado al carrito',
        showConfirmButton: false,
        timer: 3500
      })
  });




//BORRAR DEL CARRITO

/*   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  }) */



