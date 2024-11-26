import Admindb from "./Admindb";
import Dashboard from "./Dashboard";


const Order = () => {

    return (
        <>
            {/* <Dashboard /> */}
            {/* <div className="category-main">


                <div className='container-fluid'>
                    <div className='row'>
                        <div className=" col-10 bg-dark p-1 text-center text-light">
                            <h1>Order</h1>
                        </div>
                        <div className='col-2 text-center p-3 '>
                            <button className="btn btn-primary">Logout</button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-9">
                            <div class="container-fluid text-end">
                                <a href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#myModal">Add New Order
                                </a>
                            </div>
                            <div class="modal" id="myModal">
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        <div class="modal-header">
                                            <h4 class="modal-title">Admin Order</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>

                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>

                                                        <th>order No </th>
                                                        <th>Name</th>
                                                        <th>Model</th>
                                                        <th>Shopping Adress</th>
                                                        <th>Amount</th>
                                                        <th>Order Date</th>
                                                        <th>States</th>
                                                        <th>Example</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Anna</td>
                                                        <td>Pitt</td>
                                                        <td>lucknow</td>
                                                        <td>3000</td>
                                                        <td>8/06/2024</td>
                                                        <td>Up</td>
                                                        <td>
                                                            <button>
                                                                <div class="container-fluid text-end">
                                                                    <a 
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#myModal">Details
                                                                    </a>
                                                                </div>
                                                                <div class="modal" id="myModal">
                                                                    <div class="modal-dialog">
                                                                        <div class="modal-content">

                                                                       



                                                                            <table className="table table-bordered">
                                                                                <thead>
                                                                                    <tr>

                                                                                        <th>order No </th>
                                                                                        <th>Name</th>
                                                                                        <th>Model</th>
                                                                                        <th>Shopping Adress</th>
                                                                                        <th>Amount</th>
                                                                                        <th>Order Date</th>
                                                                                        <th>States</th>
                                                                                        <th>Example</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>1</td>
                                                                                        <td>Anna</td>
                                                                                        <td>Pitt</td>
                                                                                        <td>lucknow</td>
                                                                                        <td>3000</td>
                                                                                        <td>8/06/2024</td>
                                                                                        <td>Up</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </td>

                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>sohan</td>
                                                        <td>Pitt</td>
                                                        <td>lucknow</td>
                                                        <td>3000</td>
                                                        <td>8/06/2024</td>
                                                        <td>Up</td>
                                                        <td>
                                                            <button>Details

                                                            </button>
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container mt-3">
                            <h2>Category</h2>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>S.in</th>
                                        <th>Category</th>
                                        <th>Achivement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Yasir</td>
                                        <td>

                                            <button className="m-2">Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Moe</td>
                                        <td>
                                            <button className="m-2">Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Dooley</td>
                                        <td>
                                            <button className="m-2">Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div> */}
            <Admindb/>
        </>
    )
}
export default Order;