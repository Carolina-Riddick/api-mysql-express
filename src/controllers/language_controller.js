import {getConnection} from "./../database/database.js"


const getLanguage = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM languages");
        res.json(result);
    } catch(err){
        res.statusCode(500)
    }    
};

const getLanguageId = async (req, res) => {
    try{
        console.log(req.params);
        const id = req.params.id; // const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM languages WHERE ID = ?", id )
        res.json(result);
    } catch(err){
        res.statusCode(500).json("Error")
    }    
};


const addLanguage = async (res, req) => {
    try{
        const {name, programmers}= req.body;
        if(name === undefined || programmers === undefined) {
            res.statusCode(400).json({message:"Bad Request. Please feill all the fileds"})
        }
        const languages = {name, programmers};
        const connection = await getConnection();
        await connection.query("INSERT INTO languages SET ?", languages )
        res.json({message: "Language added!"});
    } 
    catch(err){
        res.statusCode(500).send(err.message);
    }
}


const deleteLanguage = async (req,res) => {   
    try{
        const {id} = req.params;
        const connection = await getConnection();
        await connection.query("DELETE FROM languages WHERE id = ?", id);
    }catch(err){
        res.statusCode(404).json({message:"the ID wasnt found"})
    }
}

const updateLanguage = async (res,req) => {
    try{
        const {id} = req.params
        const {name , programmers} = req.body

        if(id === undefined || name === undefined || programmers === undefined ){
            const language = {id, name, programmers}
            const connection = await getConnection();
            await connection.query("UPDATE language SET ? WHERE id = ? " , language)
        }
    } catch(err) {
        res.statusCode(404).json({mensaje:"The language wasnt found"})
    }
}


export const methods = {
    getLanguage,
    getLanguageId,
    deleteLanguage,
    updateLanguage,
    addLanguage
}