const Customers = require('./customers.controller');


module.exports = (router)=>{
    router.post('/add', Customers.createCustumer);
    router.get('/customers', Customers.getCustumers);
    router.get('/customers/:name',Customers.getCustumer);
    router.put('/update/:id',Customers.updateCustumer);
    router.delete('/remove/:id',Customers.removeCustumers);
    router.get('/find/:name/:firsLastName/:secondLastName',Customers.findCustumer);
}