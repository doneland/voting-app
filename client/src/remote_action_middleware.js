
export default socket => store => nextDispatch => action => {
  console.log(action); 
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return nextDispatch(action);
}
