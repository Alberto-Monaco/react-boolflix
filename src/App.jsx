import { GlobalProvider } from './context/GlobalContext'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

function App() {
	return (
		<GlobalProvider>
			<AppHeader />
			<AppMain />
		</GlobalProvider>
	)
}
export default App
