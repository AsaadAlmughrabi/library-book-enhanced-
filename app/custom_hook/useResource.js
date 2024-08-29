import { useContext } from "react";
import { AuthContext } from "../context/auth";

import useSWR from "swr";

export default function useResource(){

   
    const apiUrl = `http://localhost:8000/things/`;
    console.log('url',apiUrl)
    const {tokens} = useContext(AuthContext);
    const {data, error, mutate} = useSWR([apiUrl,tokens],fetchResourse)

    async function fetchResourse(){
        if (!tokens) {
            return;
        }
        try {
            console.log("Auth data",config())
            const res = await fetch(apiUrl, config())
            const resJSON = await res.json()
            console.log(resJSON)
            return resJSON;
        }
        catch(err){
            handleError(err)
        }
    }

    async function deleteResource(id) {
        try {
           const url = apiUrl+id
           console.log(url)
           const options = config()
           options.method = "DELETE"
           console.log(options)
           await fetch(url, options)
           mutate()

        }
        catch(err){
            handleError(err)
        }
    }

    async function createResource(data){
        if(!tokens) {
            return;
        }
        try{
            const options = config()
            options.method = "POST"
            options.body = JSON.stringify(data)
            await fetch(apiUrl,options)
            mutate()

            
        }
        catch(err){
            handleError(err)
        }
    }
    async function  updateResource(data) {
        if(!tokens) {
            return;
        }
        try{
            const url = apiUrl+data.id
            const options = config()
            options.method = "PUT"
            options.body = JSON.stringify(data)
            await fetch(url,options)
            mutate()
        }
        catch(err){
            handleError(err)
        }
        
    }

    function handleError(err){
        console.log(err);
        // logout();
    }

    function config() {
        return {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + tokens.access
            }
        }
    }

    return {
        resource : data,
        deleteFun : deleteResource,
        addBook : createResource,
        updateBook : updateResource,
        loading: tokens && !error && !data
    }
}