import react from "react";
function Footer() {
    return (
        <div>
            <div class="card text-center" style={{ background: "#f23a3a", color: "white" }}>
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-muted" style={{background:  "black"}}>
                    <span>
                        <a href="privacyandpolicy.html" style={{color: "whitesmoke"}}> Privacy Policy </a>
                    </span>
                    <span style={{color:  "whitesmoke"}}> | Copyright © 2021 | All Rights Reserved |
                        Made with <i class="fa fa-heart" style={{color:"red"}} aria-hidden="true"></i> by BARKHA SHARMA
                      
                    </span>
                   
                </div>
            </div>
        </div>
    );
}
export default Footer;