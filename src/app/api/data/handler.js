
export default function handler(req, res){
    if (req.method === 'GET') {
        res.status(200).json({name:"dj"});
    }
    else{
        res.status(300).json({message:"this is other request"});
    }
}