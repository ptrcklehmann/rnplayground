import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation';
import { PortalHost } from './src/components/primitives/portal';

export default function App() {
    return (
        <SafeAreaProvider>
            <Navigation />
            <PortalHost />
        </SafeAreaProvider>
    );
}
