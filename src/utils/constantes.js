import ChoozPage from "@/components/pages/ChoozPage";
import TestPage from "@/components/pages/TestPage";
import WelcomePage from "@/components/pages/WelcomePage";

const PAGES = {
    1: (props) => <WelcomePage {...props}/>,
    2: (props) => <ChoozPage {...props}/>,
    3: (props) => <TestPage {...props}/>
}

export {PAGES}