

export function catchAsync(fn:Function){
  return function (req,res,next){
    fn(req,res,next).catch((e:Error)=>next(e));
  }
}








