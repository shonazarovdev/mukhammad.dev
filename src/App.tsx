import { Footer, Header } from '@components/index';
import { menuList } from '@helpers/data';

function App() {
    return (
        <div className="wrapper">
            <Header data={menuList} />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
