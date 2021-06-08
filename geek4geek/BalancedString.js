var balanced = string => {
    if(string.length==1) return true; 
    let hashMap = {};
    [...string].forEach((x)=>{
      hashMap[x] = hashMap[x] ? hashMap[x]+1:1; 
    });
    let asterisk = hashMap['*']?hashMap['*']:0;
    delete hashMap['*'];
    let numberOfOccurance = Math.max(...Object.values(hashMap));
    debugger;
    let balanced = true;
    let notMatched = 0;
    Object.values(hashMap).forEach((x)=>{    
        if(x != numberOfOccurance){
          notMatched += (numberOfOccurance-x);
          balanced = false;
        }
      })
    let numberOfKeys = Object.keys(hashMap).length;
     if(asterisk==0){
     if(notMatched>0){
      return false;
     }else{
       return true;
     }
    }
    if(asterisk>=0 && numberOfKeys==0) return true;
    if(asterisk<notMatched) return false;
    if(asterisk==notMatched) return true;
    if(asterisk>notMatched){
    asterisk -= notMatched;
      notMatched=0
    }
    else{
      return false;
    }
    
    if(notMatched==0 && numberOfOccurance==1 && asterisk<=(52-numberOfKeys)){
      return true;
    
    } 
    if(asterisk>(52-numberOfKeys) && asterisk%numberOfKeys>0) 
    {
      return false;
    } 
    if(asterisk<(52-numberOfKeys) && asterisk%numberOfKeys==0) 
    {
      return true;
    }
   while(asterisk>=numberOfKeys){
    numberOfOccurance++;
    asterisk = asterisk-numberOfKeys;
    if(asterisk%numberOfOccurance == 0) return true; 
    }
    if(asterisk%numberOfOccurance == 0 || asterisk%numberOfKeys == 0) return true;
    
    return false;
    }
    //console.log(balanced("*C***F***R*US*R**D***YS***H"))
    //console.log(balanced("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ*"))
    
   // console.log(balanced("*C***S*L**L****S**QN*"))
   // console.log(balanced("*R*T*N*"))
   //console.log(balanced("*T*D*T*F**")+" should be true")
   
  // console.log(balanced("R*F**RY***O***D*")+" should be true")
    //console.log(balanced("***H****K*N*T***X*N*L*T*E*"))
   //console.log(balanced("ECHO*****E*V*****YAY*ZH*V*"))
  //  console.log(balanced("BP**PQ*G*GR*Q***"))
   //console.log(balanced("**HC*U*"))
   // console.log(balanced("a*aa**z**z*"))
    //console.log(balanced("*C***F***R*US*R**D***YS***H"))
    
    //console.log(balanced("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ****************************************************"))
    //console.log(balanced("aabb***"))
    //console.log(balanced("aabbc****"));
    //console.log(balanced("ab"));
    //console.log(balanced("*xx*y*"))
    //console.log(balanced("abcb**"))
    //console.log(balanced("abcb*"))