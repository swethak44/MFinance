import React from 'react';
import './home.css';

import { Row , Col} from 'react-bootstrap';



export default function Home() {
  return (
    <div>
        <div className='background'>
            <div class='text'>
                <h1>Expert Financial Planning Services</h1>
                <p>
                    Get expert financial advice in Bangalore with personalized planning for investments, wealth investments<br/>
                    management, and securing your financial futureGet expert financial advice in Bangalore with personalized<br />
                    planning for investments.
                </p>
            </div>
            
        </div>
        <div class="container">
            <h2>Best Financial Advisor in Bangalore</h2>
            <p className='mt-4'>
                To achieve your financial goals in life, having a financial planner by your side is the best decision you can make. Financial planners assist
                you in overcoming financial obstacles for you to reach your financial goals. By people’s choice, we are the best financial advisor in
                Bangalore. It’s no secret that financial planners are on the rise, but what makes us the best financial services company in Bangalore? 
            </p>
            <br />
            <p>
               Here what you need to know! 
            </p>
            
        </div>
        <div className="container">
            <Row>
                <Col lg={12}>
                    <div className='box'>
                    <h2 >Financial Planning Services Offered by Fincart in Bangalore</h2>
                        <ul>
                            <li className='fw-medium fs-5'>Investment Planning Services</li>
                            <p >
                                Investment Planning Services are aimed at helping you create a robust investment portfolio that aligns with your risk tolerance, 
                                time horizon, and financial objectives. Whether you're looking to invest in mutual funds, stocks, bonds, or other financial instruments,
                                our expert advisors will guide you in making informed decisions to maximize your returns.
                            </p>
                            <li className='fw-medium fs-5'>Retirement Planning Services</li>
                            <p>
                                Planning for retirement is crucial to ensuring a comfortable and secure future. At Fincart, our Retirement Planning Services
                                focus on creating a detailed plan that helps you accumulate the necessary funds for your post-retirement life. We consider factors such as 
                                inflation, life expectancy, and your desired lifestyle to develop a strategy that ensures you won't outlive your savings.
                            </p>
                            <li className='fw-medium fs-5'>Tax Optimization Services</li>
                            <p>
                                Effective tax planning can significantly enhance your wealth accumulation. Our Tax Optimization Services are designed to help
                                you minimize your tax liabilities while staying compliant with the law. We analyze your financial situation and advise you on 
                                tax-saving investments, deductions, and exemptions that can reduce your overall tax burden.
                            </p>
                            <li className='fw-medium fs-5'>Insurance Analysis Services</li>
                            <p>
                                Having the right insurance coverage is essential for protecting your financial well-being. Our Insurance Analysis Services 
                                involve a thorough review of your current insurance policies and identifying any gaps in coverage. We provide recommendations on the 
                                types and amounts of insurance you need to safeguard your assets and provide financial security for your loved ones.
                            </p>
                        </ul> 
                        <button className=' fs-5'>
                            Get Your Financial Plan
                        </button> 
                    </div>
                </Col>
                
            </Row>
        </div>
        <div class='section'>
            {/* <img  className='d-block w-100'style={{height:"550px", width:"100vh", opacity:"0.35",marginTop:"50px" }} src={bimage} alt=''/> */}
           
            <div className='container '>
                <h2 className='fw-semibold text-white p-4 fs-1'>Benefits of financial planning services in bangalore</h2>
                <ol className=' fs-5 text-white' style={{textAlign:"left"}} >
                    <li className='p-2' > Financial planning services help individuals and businesses define their short-term and long-term financial goals. They provide a structured approach to goal setting and help clients gain clarity on their financial aspirations.</li>
                    <li className='p-2'>Income, expenses, assets, and liabilities are examined by financial planners to determine a clients current financial situation. They consider various factors such as risk tolerance, time horizon, and financial commitments to provide a holistic view of the clients financial health.</li>
                    <li className='p-2'>Based on the analysis of the client’s financial situation and goals, financial planners develop personalized strategies to help achieve those goals. They consider investment options, tax implications, retirement planning, estate planning, and risk management to create a tailored financial roadmap.  </li>
                    <li className='p-2'> They help clients identify and mitigate financial risks. They evaluate insurance needs, assess risk tolerance, and recommend appropriate insurance coverage to protect against unforeseen events such as accidents, disability, illness, or loss of income. </li>
                    <li className='p-2'>Financial planners assist clients in making informed investment decisions. They consider factors such as risk appetite, investment horizon, and financial goals to create an investment portfolio aligned with the clients objectives. They also monitor and review investments regularly, making adjustments as needed. </li>
                </ol>

            </div>
        </div>
       {/* <footer >
            <Container>
                <Row>
                    <Col lg={3}>
                    <h5 className="fs-4" style={{marginTop:"50px", color:"white",fontFamily:"sans-serif"}}>FINANCIAL PLANS</h5>
                    <ul className="fs-6 p-2"style={{listStyleType:"none",color:"white"}}>

                        <li>Financial Planning</li>
                        <li>Investment Planning</li>
                        <li>Goal Planning</li>
                        <li>Risk Management</li>
                        <li>Tax Saving And Planning</li>
                        
                    </ul>
                    </Col>
                    <Col lg={3}>
                        <h5 className="fs-4" style={{marginTop:"50px", color:"white",fontFamily:"sans-serif"}}>INVESTMENT PLANS</h5>
                        <ul className="fs-6 p-2"style={{listStyleType:"none",color:"white"}}>
                            <li>Mutual Funds</li>
                            <li>SIP</li>
                            <li>Income Returns</li>
                            <li>Protfolio Management Services</li>
                            <li>Gold</li>
                        
                        </ul>

                    </Col>
                    <Col lg={3}>
                        <h5 className="fs-4" style={{marginTop:"50px", color:"white",fontFamily:"sans-serif"}}>LOAN HUB</h5>
                        <ul className="fs- p-2"style={{listStyleType:"none",color:"white"}}>
                            <li>Home Loan</li>
                            <li>Business Loan</li>
                            <li>Personal Loan</li>
                            
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h5 className="fs-4" style={{marginTop:"50px", color:"white",fontFamily:"sans-serif"}}>CONTACT INFO</h5>
                        <ul className="fs-6 p-2"style={{listStyleType:"none",color:"white"}}>
                            <li>
                                <i class="fa-solid fa-location-dot"></i> NCPL Tower Ground & 2nd Floor, A-4,A Block, Sector 9
                            </li>
                            <li><i class="fas fa-phone"></i> +91 1234567890</li>
                            <li><i class="fas fa-envelope"></i> finance@gmail.com</li>
                            
                        </ul>
                    </Col>
                    <Row>
                        <Col lg={3}>
                            <h5 className="fs-4" style={{marginTop:"50px", color:"white",fontFamily:"sans-serif"}}>PLAN FOR TOMORROW</h5>
                            <ul className="fs-6 p-2"style={{listStyleType:"none",color:"white"}}>
                                <li>Workshop</li>
                                <li>Corporate NPS</li>
                                <li>Group Health Insurance</li>
                            </ul>

                        </Col>
                        <Col lg={3}>
                            <h5 className="fs-4" style={{marginTop:"50px", color:"white",fontFamily:"sans-serif"}}>INSURANCE</h5>
                            <ul className="fs-6 p-2"style={{listStyleType:"none",color:"white"}}>
                                <li>Health Insurance</li>
                                <li>Term Insurance</li>
                                <li>Critical Insurance</li>
                                <li>Asset Insurance</li>
                            </ul>

                        </Col>
                        <Col lg={3}>
                        </Col>
                        <Col lg={3}>
                            <ul className="fs-6 p-2"style={{listStyleType:"none",color:"white"}}>

                                <li>Terms and Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Disclosuers</li>
                                <li>Career</li>
                                
                                <i class="fa-brands fa-square-facebook fs-3"></i>
                                <i class="fa-brands fa-square-instagram fs-3"></i>
                                <i class="fa-brands fa-square-youtube fs-3"></i>
                                <i class="fa-brands fa-linkedin fs-3"></i>
                                <i class="fa-brands fa-square-twitter fs-3"></i>
                            </ul>
                           
                        </Col>
                    </Row>
                </Row>
            </Container>
       </footer>
       <div className='footsec'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h6 className='lead fs-6 text-white mt-5'>Copyright © 2024 Fincart | Powered By Fincart |</h6>
                        <p className="fs-6" style={{color:"gold",fontFamily:"sans-serif",textAlign:"left"}}>Virtual Financial Advisory Across India: Serving Major clientele in these cities</p>
                        <p className="fs-6" style={{color:"white",fontFamily:"sans-serif",textAlign:"left"}}>
                            financial planning services offer the advantages of professional expertise,objective guidance, and personalized strategies to help individuals<br/>
                            and businesses achieve financial success. 
                        </p>
                    </Col>
                </Row>
            </Container>
       </div> */}
        
    </div>
    
  )
}
