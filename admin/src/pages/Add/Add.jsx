import { assets } from '../../assets/assets'
import './Add.css'
const Add = () => {
    return (
        <div className='add'>
            <form action="" className="flex-col">
                <div className="add-img-upload flex-col">
                    <p>Upload image</p>
                    <label htmlFor="image">
                        <img src={assets.upload_area} alt="" />

                    </label>
                    <input type="file" id='image' required hidden />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input type="text" name="name" placeholder='Type here' />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea name="description" rows={6} placeholder='Write content here' required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select name="category" id="">
                            <option value="salad">Salad</option>
                            <option value="rolls">Rolls</option>
                            <option value="deserts">Deserts</option>
                            <option value="sandwich">Sandwich</option>
                            <option value="cake">Cake</option>
                            <option value="pure veg">Pure Veg</option>
                            <option value="pasta">Pasta noddles Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input type="Number" name="price" placeholder='$10' />
                    </div>
                </div>
                <button type="submit" className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default Add