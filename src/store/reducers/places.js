import {ADD_PLACE,DELETE_PLACE} from "../actions/actionTypes"
const initialState={
    places:[],
}
const reducer=(state=initialState,action)=>{
    	switch(action.type){
            case ADD_PLACE:
                //return Object.assign({},state,{places:action.placeName});
                return {
                    ...state,
                    places: state.places.concat({
                        key: Math.random().toString(),
                        name:action.placeName,
                        image:{
                          uri:"https://www.planetware.com/photos-large/AUS/australia-beautiful-places-port-douglas.jpg"
                        },
                        location:action.location
                    })
                };
            case DELETE_PLACE:
                    return {
                        ...state,
                        places: state.places.filter(place => {
                          return place.key !== action.placeKey;
                        })
                      };
               default:
                return state;
        }
};

export default reducer;