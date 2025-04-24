import iconechat from "../assets/chaticon.png"
const Header = () => {
  return (
    <header className="hreader-container">

            <div className="d-flex align-items-center gap-2 justify-content-center p-2">
                <div className="p-1 fs-6">
                    <img width="30" height="30" src={iconechat} alt="." />
                </div>
                <div className="p-1 fs-6 fw-bold text-body-tertiary" style={{fontFamily: "'Georgia', serif" , letterSpacing: "1px"}}>
                    ChatM
                </div>
            </div>
            
    </header>
  )
}

export default Header