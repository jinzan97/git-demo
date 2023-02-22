const http= require('http')
const ser=http.createServer()
ser.on('request',(req,res)=>{
    console.log(req.url)
    
})
ser.listen(8080,()=>{
    console.log('服务器启动')
})