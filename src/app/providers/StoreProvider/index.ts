import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StateSchema,
    createReduxStore,
    StoreProvider,
};
