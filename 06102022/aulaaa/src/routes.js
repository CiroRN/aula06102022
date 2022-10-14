import LoginForm from "./components/LoginForm";


const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginForm/>}></Route>
        </Routes>
    );
}

export default Router;