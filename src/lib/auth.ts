import jwt from 'jsonwebtoken';
export function sign(payload:any){return jwt.sign(payload, process.env.JWT_SECRET||'dev-secret',{expiresIn:'7d'})}
export function verify(token:string){try{return jwt.verify(token,process.env.JWT_SECRET||'dev-secret')}catch{return null}}
