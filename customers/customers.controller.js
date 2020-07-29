const  Customers =  require('./customers.dao');
exports.createCustumer = (req, res, next ) =>{
    const customers = {
        name: req.body.name,
        firsLastName: req.body.firsLastName,
        secondLastName: req.body.secondLastName,
        email: req.body.email,
        phone: req.body.phone,
        phone2: req.body.phone2,
        profetion: req.body.profetion
    };
    Customers.create(customers, (err, customers)=> {
        if(err) res.json({error:err});
        res.json({message: 'Customer created succesfully'});
    });
} 

exports.getCustumers = (req, res, next)=>{  
    Customers.get({},(err, customers)=>{
       if(err) res.json({error: err});
       res.json({Customers:customers});

    });
    
}

exports.getCustumer = (req, res, next)=>{    
    Customers.getByName({name:req.params.name},(err, customer)=>{
       if(err) res.json({error: err});
       res.json({Customer: customer});

    });
}

exports.updateCustumer = (req, res, next)=>{   
    const customer = {
        name: req.body.name,
        firsLastName: req.body.firsLastName,
        secondLastName: req.body.secondLastName,
        email: req.body.email,
        phone: req.body.phone,
        phone2: req.body.phone2,
        profetion: req.body.profetion
    }; 
    Customers.update({_id:req.params.id},customer,(err, customer)=>{
       if(err) res.json({error: err});
       res.json({message:'Customer update succesfully'});
    });
}

exports.removeCustumers = (req, res, next)=>{  
    Customers.delete({_id:req.params.id},(err, customers)=>{
       if(err) res.json({error: err});
       res.json({message:'Customer deleted succesfully'});

    });
    
}