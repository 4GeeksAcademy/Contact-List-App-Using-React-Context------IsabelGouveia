const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white"
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white"
		  }
		],
		users: [] // Initialize users array as empty
	  },
  
	  actions: {
		// Use getActions to call a function within a function
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
  
		changeColor: (index, color) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  //reset the global store
		  setStore({ demo: demo });
		},
  
		loadSomeData: () => {
		  fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
			  if (!response.ok) {
				throw Error("We will not have a User");
			  }
			  return response.json();
			})
			.then(data => {
			  setStore({ users: data.slice(0, 4).map(u => {
				u.address=u.address.street 
				return u
			  }) }); // Store only the first four users
			})
			.catch(error => {
			  console.log(error);
			});
		},
  
		// addUser
		addUser: (user) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const newUsers = store.users.concat(user);
  
		  //reset the global store
		  setStore({ users: newUsers });
  
		},
  
		updateUser: (index, updatedUser) => {
			// Get the current state
			const store = getStore();
			
			// Update the user with the new data
			const updatedUsers = store.users.map((user, i) => {
				if (i === index) {
				  return {
					...user,
					...updatedUser
				  };
				}
				return user;
			  });
	
			// Reset the global store with the updated users array
			setStore({ users: updatedUsers });
		  },
  
		//deleteUser
		deleteUser: (index) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const newUsers = store.users.filter((user, i) => {
			return index !== i;
		  });
  
		  //reset the global store
		  setStore({ users: newUsers });
  
		}
	  }
	};
  };
  
  export default getState;
  