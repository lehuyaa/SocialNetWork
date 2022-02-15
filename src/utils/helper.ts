
import AsyncStorage from '@react-native-community/async-storage';


export function generatePersistConfig(key: string, whitelist: string[]) {
    return {
        key,
        whitelist,
        storage: AsyncStorage,
    };
}