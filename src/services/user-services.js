import { createStore } from "redux"
import auth from "../tools/firebase"

let user = auth.currentUser

const addFriend = () => {
    return {
        type : "ADD_FRIEND"
    }
}

const removeFriend = () => {
    return {
        type : "REMOVE_FRIEND"
    }
}

const userService = (state = 0, action) =>{
    switch(action.type){
        case "ADD_FRIEND":
        return "deneme"
        
    }
}

const store = createStore(userService)

store.subscribe(() => console.log(store.getState()))

export default store