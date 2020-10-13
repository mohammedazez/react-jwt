// Import middleware di redux
import { createStore, applyMiddleware} from 'redux';
// Import redux thunk
import thunk from 'redux-thunk';
// Import logger
import logger from 'redux-logger';


// Buat variabel unutk create storenya
const store = createStore(applyMiddleware(thunk, logger));

// Ekspor
export default store;