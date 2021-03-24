const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false,
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    const prodId = req.params.productId;
    if (!editMode) {
        return res.redirect('/');
    }
    req.user.getProducts({where:{
        id:prodId
    }}).then(product=>{
        if(!product){
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product[0],
        });
    }).catch(err=>console.log(err));
};

exports.postEditProduct = (req, res, next) => {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    Product.findByPk(id).then(product=>{
        product.title=title;
        product.description=description;
        product.imageUrl=imageUrl;
        product.price=price;
        return product.save();
    }).then(response=>{
        res.redirect('/admin/products');
    }).catch(err=>console.log(err));
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    req.user.createProduct({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description,
    }).then((product) => {
       res.redirect('/');
    }).catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
    req.user.getProducts().then(products=>{
        res.render('admin/products', {
            prods: products,
            pageTitle: products.title,
            path: '/admin/products',
        });
    }).catch(err=>console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.id;
  Product.findByPk(prodId)
    .then(product => {
      return product.destroy();
    })
    .then(result => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};