import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from '../ducks/places/reducers';

const appPersistConfig = {
  key: 'app',
  storage,
};

const rootReducer = {
  app: persistReducer(appPersistConfig, appReducer),
};
export default rootReducer;
