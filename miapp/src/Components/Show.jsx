import {useState} from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {collection, getDocs, deleteDoc, doc} from "@firebase/firestore";
import {db} from "../firebaseConfig/firebase.js";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)



const Show = ()=>
{const [products, setProducts] = useState ([]);
const productsCollection = collection (db, "TiendaLibros");

const getProducts = async () => 
{const data = await getDocs (productsCollection);
console.log (data.docs);
setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
console.log()
};

const deleteProduct = async (id) =>
{const productDoc = doc (db,"TiendaLibros",id );
await deleteDoc (productDoc);
getProducts()};

const confirmDelete =(id)=>
{Swal.fire({
    title: 'Estas seguro de que querés eliminar?',
    text: "Este proceso no es reversible!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borrar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        deleteProduct(id),
        'Borrado!',
        'El elemento ha sido borrado.',
        'success'
      )
    }
  })}

useEffect(()=>{getProducts()},[])

return (
   <div className="container">
    <div className="row">
        <div className="col">
            <div className="d-grid gap-2">
                <Link to="/create"> CREAR </Link>
            </div>

            <table className="table table-dark table hover">
                <thead>
                    <tr>
                        <th>Descripcion</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product)=>
                    <tr key= {product.id}>
                        <td>{product.description}</td>
                        <td>{product.stock}</td>
                        <td><Link to={'/edit/${product.id}'} className="btn btn-light"> <i className="fa-solid fa-pencil"></i> </Link></td>
                        <button onclick={()=>{confirmDelete(product.id)}}><i className="fa-solid fa-trash"></i></button>

                    </tr>)}
                </tbody>

            </table>
        </div>
    </div>
  </div>)

}

export default Show