export function checkLoginUnique(value) {
  let logins = []
  for(let i = 0; i < this.$store.state.users.length; i++) {
    if(this.$store.state.users[i].logIn) {
      logins.push(this.$store.state.users[i].logIn) 
    }
  }

  if(!logins.includes(value)){
    return true
  }
  return false
}