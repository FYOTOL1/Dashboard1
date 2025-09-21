import Header from "./components/Header"
import Main from "./components/main/Main"

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#f6f8fa]">
      <div className=" max-w-[1440px] mx-auto">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App