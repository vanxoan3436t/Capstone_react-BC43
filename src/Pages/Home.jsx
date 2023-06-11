//rafce
// import React from 'react'

// const Home = () => {
// 	return (
// 		<div className='container'>

// 		</div>
// 	)
// }

// export default Home

import React, { Component } from 'react'
import { connect } from 'react-redux'

//Thêm thư viện local để test hiển thị.
// import { arrProduct } from '../assets/data/data'

export class Home extends Component {
	render() {
		return (
			<div className='container'>
				<div className='d-flex'>
					<img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." />
					<div>
						<h3>Product name</h3>
						<p>Product description</p>
						<button className='btn btn-warning mx-2'>Buy now</button>
					</div>
				</div>

				<div className='custom_feature w-50 text-white'>
					<h3>Product Feature</h3>
				</div>
				<div className='row'>
					<div className='col-3  custom_shoes mx-2 my-2'>
						<img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." className='w-100' />
						<h4>Adidas Prophere</h4>
						<p>short descript...</p>
						<div className='d-flex'>
							<button className='btn btn-success'>Buy now</button>
							<p> 85 $</p>
						</div>
					</div>

					<div className='col-3  custom_shoes mx-2 my-2'>
						<img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." className='w-100' />
						<h4>Adidas Prophere</h4>
						<p>short descript...</p>
						<div className='d-flex'>
							<button className='btn btn-success'>Buy now</button>
							<p> 85 $</p>
						</div>
					</div>

					<div className='col-3  custom_shoes mx-2 my-2'>
						<img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." className='w-100' />
						<h4>Adidas Prophere</h4>
						<p>short descript...</p>
						<div className='d-flex'>
							<button className='btn btn-success'>Buy now</button>
							<p> 85 $</p>
						</div>
					</div>

					<div className='col-3  custom_shoes mx-2 my-2'>
						<img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." className='w-100' />
						<h4>Adidas Prophere</h4>
						<p>short descript...</p>
						<div className='d-flex'>
							<button className='btn btn-success'>Buy now</button>
							<p> 85 $</p>
						</div>
					</div>

					<div className='col-3  custom_shoes mx-2 my-2'>
						<img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." className='w-100' />
						<h4>Adidas Prophere</h4>
						<p>short descript...</p>
						<div className='d-flex'>
							<button className='btn btn-success'>Buy now</button>
							<p> 85 $</p>
						</div>
					</div>

					<div className='col-3  custom_shoes mx-2 my-2'>
						<img src="https://svcy3.myclass.vn/images/adidas-prophere-black-white.png" alt="..." className='w-100' />
						<h4>Adidas Prophere</h4>
						<p>short descript...</p>
						<div className='d-flex'>
							<button className='btn btn-success'>Buy now</button>
							<p> 85 $</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Home)