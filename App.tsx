import { ScreenContent } from 'components/ui/ScreenContent';
// eslint-disable-next-line import/order
import { GameCard } from 'components/ui/game-card';

import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <ScreenContent title="Homejhgkkgjk" path="App.tsx">
        <GameCard />
      </ScreenContent>
      <StatusBar style="auto" />
    </>
  );
}
