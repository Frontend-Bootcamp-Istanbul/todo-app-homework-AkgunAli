export const todoReducer = (state= [], action)  => {
       switch (action.type) {
           case 'ADD_TODO':
                return [...state, {
                    id: Math.random(),
                    completed: false,
                    content: action.payload
                }];
           case "TOGGLE_TODO":
               return state.map((todo) => {
                   if(todo.id === action.payload){
                       return {...todo, completed: !todo.completed}
                   }
                   return todo;
               })

               case "DELETE_TODO":

                
                        return  state.filter(todo => todo.id !== action.payload)
                  



           default:
               return state;




               
       }
};