import CardProduct from '../../../components/card-product';

const AllMenu = () => {
  return (
    <>
      <br />
      <div className='row p-2'>
        <div className='col-sm-3 p-2 m-2 '>
          <CardProduct />
        </div>
        {/* <div className='col-sm-3 p-1 m-1 bg-primary'>
          <CardProduct />
        </div>
        <div className='col-sm-3 p-1 m-1 bg-success'>
          <CardProduct />
        </div>
        <div className='col-sm-3 p-1 m-1 bg-success'>
          <CardProduct />
        </div> */}
      </div>
    </>
  );
};

export default AllMenu;
