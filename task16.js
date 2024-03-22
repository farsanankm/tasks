function fetchuser(){
 
    return new Promise((resolve,reject)=>{
   
       setTimeout(()=>{
           const data={id:1,name:"hello"}
           resolve(data)
       },1000)
   
   
   
               })
    
   
   }
   
    
   function fetchuserpost(){
    
       return new Promise((resolve,reject)=>{
   
          setTimeout(()=>{
              const data=[
               {id:1,name:"kzkjskjz"}
              ]
              resolve(data)
          },1000)
   
   
   
                  })
   
   
      }
   
   
   fetchuser()
   
   
   .then(userdata =>
       {
           console.log(userdata);
           console.log("ftching user post ...................");
           return fetchuserpost()
       })
   
   .then(userid =>{
       console.log(userid);
       return 
   
   })
   