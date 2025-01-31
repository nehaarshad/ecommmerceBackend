import express from 'express';
import productControllers from '../controllers/productControllers.js';
import upload from '../MiddleWares/uploadimage.js';
const { addproduct, findproductbyid,getallproducts,getuserproducts,getshopproducts,updateproduct, deleteproduct } = productControllers;
const productRouter = express.Router();

productRouter.post("/addproduct/:id",upload.array('image',8),addproduct);
productRouter.get("/getallproducts",getallproducts);
productRouter.get("/getproducts/:id",findproductbyid);
productRouter.get("/getuserproducts/:id",getuserproducts);
productRouter.get("/getshopproducts/:id",getshopproducts);
productRouter.put("/updateproduct/:id",upload.array('image',8),updateproduct);
productRouter.delete("/deleteproduct/:id",deleteproduct);

export default productRouter;