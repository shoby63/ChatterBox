import { useContext } from 'react';
import {SettingsContext} from '../contexts/settingsContext.js';

// ----------------------------------------------------------------------

const useSettings = () => useContext(SettingsContext);

export default useSettings;