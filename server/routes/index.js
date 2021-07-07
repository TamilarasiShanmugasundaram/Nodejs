const express = require('express');
const controller = require('../controller/controller');
const route = express.Router(); 
let cors = require('cors');

route.use(cors());
console.log('i am router'); 
route.get('/get',controller.getCategories);
route.post('/add',controller.addCategory);
route.post('/login',controller.checkUser);
module.exports = route;





// console.log("i am router")
// const express = require('express');
// const router = express.Router();
// let cors = require('cors');
// const controller = require('../controller/categoryController');
// router.use(cors());
// // send category details
// router.get('/getCategoryList', controller.get_category_list);
// //addCategory details
// router.post('/addCategory', controller.add_category);
// //delete request
// router.delete("/deleteCategory/:id", controller.delete_category);
// //render html page
// router.get("/check", (req, res) => {
//     fs.readFile('../pages/mainPage.html', function(err, data){
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     })
//   }); 
// module.exports = router;

// router.get('/', async (req, res, next) =>  {
// console.log('route')
//     try {
//         console.log('try')
//         if(req.baseUrl == '/get') {
//             console.log('get')
//             db.getCategories(res);
//         } else if(req.baseUrl == '/login') {
//             console.log('login')
//             db.checkUser(res);
//         } else if(req.baseUrl == 'add') {
//             console.log('add')
//             db.addCategory(req,res);
//         }
         
//         //console.log(req.baseUrl)
//         // let results = await 
//         // res.json(results);
//     } catch {
//         console.log('catch')
//         res.sendStatus(50);
//     }

// });

// module.exports = router;