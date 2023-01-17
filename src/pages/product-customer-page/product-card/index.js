const ProductCard = (props) => {
  console.log(props.data);
  return (
    <div className='container'>
      <div className='row'>
        {props.data.length === 0 ? (
          <p>loading...</p> // kalo bisa pake react placholder
        ) : (
          props.data.map((item) => {
            return (
              <div key={item.id} className='col-xs-12 col-md-4 text-dark'>
                <div className='card border-0 shadow p-3 mb-5 bg-body rounded-costum'>
                  <div className='card-body text-center'>
                    <img src={item.product} alt='p-4' />
                    <h5 className='card-title'>{item.menu}</h5>
                    <p className='card-text py-3'>{item.price}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductCard;
