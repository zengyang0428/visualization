import express,{Express,Router,Request,Response} from 'express'
import axios from 'axios'
//获取app对象
const app:Express =express()
//子路由里安装路由
app.use('*',(req,res,next)=>{
	res.header('Access-Control-Allow-Origin',"*")
	next()
})
//创建路由
const router:Router = express.Router()

//安装路由
app.use('/api',router)
//路由处理响应				地址 		处理函数
router.get('/list',async(req:Request,res:Response)=>{
	const result = await axios.post("https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf")
	res.json({
		...result.data.data
	})
})	
//启动服务器
app.listen(3333,()=>{
	console.log("success server http://localhost:3333");
	
})

