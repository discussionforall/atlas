import { useEffect, useState } from "react";
import dateFormat from 'dateformat';
import logo_img from "../images/logo.png";
import "../styles/PDF.css"

const Home2_PDF = ({
    totalHOIPremium,
    totalPrepaidInterest,
    totalPrepaidTaxes,
    totalHOI,
    totalPropertyTaxes,
    sale_Price_OR_Payoffs,
    secondMortgage,
    estimatedEscrow,
    Atlas_Loan_Scenario, 
    totalLoanAmount, 
    principalInterest,
     estimatedCashToClose,
     governmentFundingFee,
        blockA,
        blockB,
        blockC,
        blockD,
        blockE,
        blockF,
        blockG,
        blockH,
        blockI,
        blockJ,
        contactDetails,
        user}) => {

    const numberWithCommas = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    return (
    <html>
        <body>
            <div>
                <table>
                    <tbody>
                        <tr className="border-bottom">
                            <td className="leftCol border-left-0">
                                <img src={logo_img} style={{"padding":"5px 5px 5px 0px"}} />
                            </td>
                            <td className="rightCol border-left-0" style={{"lineHeight": "20px"}}>
                            <span className="line-height"> Prepared For: {contactDetails.firstName + " " + contactDetails.lastName}<br/></span>
                            <span className="line-height"> Prepared By: {user.firstName + " " + user.lastName}, NMLS #{user.nmlsId}<br/></span>
                            <span className="line-height"> Phone: {user.phone}<br/></span>
                            <span className="line-height"> Preparation Date: {dateFormat(Atlas_Loan_Scenario.dateUpdated,"mmmm d, yyyy")}
                                <br/></span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="border-right-0" style={{"padding":"5px"}}>
                                <span className="line-height">The fees listed below are estimates, and your rate varies with market conditions until locked. Your actual rate, payment, and costs could be higher. Get an official Loan Estimate before choosing a loan.</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td  className="td-heading" colSpan="2">ASSUMPTIONS</td>
                    </tr>
                    <tr>
                        <td className="leftCol border-right-0">Loan Purpose:</td>
                        <td className="rightCol">
                            {
                              Atlas_Loan_Scenario.loanPurpose === "Refinance" ?
                                Atlas_Loan_Scenario.isCashout === 1 ? "Refinance- Cash Out" : "Refinance- Rate/Term"
                              : null

                              (Atlas_Loan_Scenario.loanPurpose === "Purchase" ? "Purchase" : null)
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol border-right-0">Location:</td>
                        <td className="rightCol">
                            {Atlas_Loan_Scenario.propertyCountry + " County, " + Atlas_Loan_Scenario.propertyState}
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol border-right-0">Est. Value/ Sale Price:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.houseValue))}
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol border-right-0">Lock Period:</td>
                        <td className="rightCol">
                            {Atlas_Loan_Scenario.lockPeriod}
                            </td>
                    </tr>
                    <tr>
                        <td className="leftCol border-right-0">Credit Score:</td>
                        <td className="rightCol">
                            {Atlas_Loan_Scenario.creditScore}
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td  className="td-heading" colSpan="2">PROPOSED TERMS</td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol border-right-0">Loan Program:</td>
                        <td className="rightCol">
                            {Atlas_Loan_Scenario.loanTypeSpecial} {Atlas_Loan_Scenario.loanProduct}
                            </td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol border-right-0">Loan Amount:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Math.round(totalLoanAmount))}
                        </td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol border-right-0">Interest Rate:</td>
                        <td className="rightCol">
                            {Atlas_Loan_Scenario.interestRate}%
                            </td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol border-right-0">Monthly Principal &amp; Interest:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Math.round(principalInterest))}
                            <i style={{"fontSize": "8px"}}> <span>(See below for your Estimated Total Monthly Payment)</span></i>
                        </td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol border-right-0">Prepayment Penalty:</td>
                        <td className="rightCol">NO</td>
                    </tr>
                    <tr>
                        <td className="leftCol border-right-0">Balloon Payment:</td>
                        <td className="rightCol">NO</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td className="td-heading"  colSpan="2">PROJECTED PAYMENTS</td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol border-right-0">Principal &amp; Interest:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Math.round(principalInterest))}
                        </td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol border-right-0">Mortgage Insurance:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.annualMortgageInsuranceRate * totalLoanAmount/1200))}
                        </td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol border-right-0">Estimated Taxes:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.monthlyPropertyTax))}
                        </td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol border-right-0">Estimated Homeowners Insurance:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.monthlyHOI))}
                        </td>
                    </tr>
                    { Atlas_Loan_Scenario.monthlyHOA !=0 ?
                        <tr className="border-bottom">
                            <td className="leftCol border-right-0">HOA Dues:</td>
                            <td className="rightCol">
                                ${numberWithCommas(Math.round(Atlas_Loan_Scenario.monthlyHOA))}
                            </td>
                        </tr>
                    : null}
                    <tr>
                        <td className="leftCol border-right-0"><strong>Estimated Total Monthly Payment:</strong></td>
                        <td className="rightCol">
                        <strong>
                            ${
                                numberWithCommas(Math.round(
                                    principalInterest
                                    + Atlas_Loan_Scenario.monthlyPropertyTax
                                    + Atlas_Loan_Scenario.monthlyHOI
                                    + (Atlas_Loan_Scenario.mortgageInsurancePremiumType === "Monthly" ? Atlas_Loan_Scenario.annualMortgageInsuranceRate * Atlas_Loan_Scenario.baseLoanAmount/12 : 0)
                                    + Atlas_Loan_Scenario.monthlyHOA
                                ))
                            }
                        </strong>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td className="td-heading"  colSpan="3">COSTS AT CLOSING</td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol5 border-right-0"><strong>Estimated Closing Costs:</strong></td>
                        <td className="middleCol5">
                            <strong>${numberWithCommas(Math.round(blockJ))}</strong>
                        </td>
                        <td className="rightCol5">Includes lender fees and third-party fees (ie title fees, taxes, recording, etc)</td>
                    </tr>
                    <tr>
                        
                        <td className="leftCol5 border-right-0"><strong>Estimated Cash to Close:</strong></td>
                        {estimatedCashToClose > 0 ? 
                            <>
                                <td className="middleCol5">
                                    <strong>${numberWithCommas(Math.round(estimatedCashToClose))}</strong> 
                                </td>
                                <td className="rightCol5">Includes escrows and prepaids</td>
                            </>
                        :
                            <>
                                <td className="middleCol5">
                                    <strong>$0</strong> 
                                </td>
                                <td className="rightCol5">You will receive {" "}
                                    <strong>${numberWithCommas(Math.abs(Math.round(estimatedCashToClose)))}</strong> {" "}
                                    cash at closing
                                </td>
                            </>
                        }
                    </tr>
                </tbody>
            </table>
        </div>
        { Atlas_Loan_Scenario.monthlyHOA === 0 ?
            <><br/><br/></>
        : null}
        <br/>
        <div>
            <p className="heading-h3"><b>Closing Cost Details</b></p>
            
            <table className="table-closing" style={{"display":"block"}}> 
                <tbody style={{border:0}}>
                    <tr style={{border:0}}>
                        <td style={{"verticalAlign": "top"}}>
                            <table className="table-child1">
                                <tr className="blueRow">
                                    <td colSpan="2"  className="td-heading"  style={{fontSize:"12px"}}>Estimated Loan Costs</td>
                                </tr>
                                <tr>
                                    <td className="leftCol2"><strong>A. Origination Charges</strong></td>
                                    <td className="rightCol2">
                                        <strong>${numberWithCommas(Math.round(blockA))}</strong>
                                    </td>
                                </tr>
                                {Atlas_Loan_Scenario.blockADiscountFee != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Loan Discount Fee (Points)</td>
                                        <td className="rightCol2">
                                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockADiscountFee))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockAprocessingFee != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Loan Processing Fee</td>
                                        <td className="rightCol2">
                                                ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockAprocessingFee))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockATaxService != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Tax Service Fee</td>
                                        <td className="rightCol2">
                                             ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockATaxService))}
                                        </td>
                                    </tr>
                                : null}
                                
                                <tr className="border-bottom">
                                    {Atlas_Loan_Scenario.blockAOriginationFee != 0 ? 
                                        <>
                                            <td className="leftCol2">Loan Origination Fees</td>
                                            <td className="rightCol2">
                                                ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockAOriginationFee))}
                                            </td>
                                        </>
                                    : null}
                                </tr>
                                <tr>
                                    <td className="leftCol2"><strong>B. Services You Cannot Shop For</strong></td>
                                    <td className="rightCol2">
                                        <strong>${numberWithCommas(Math.round(blockB))}</strong>
                                    </td>
                                </tr>
                                    {Atlas_Loan_Scenario.blockBAppraisalFee != 0 ? 
                                        <tr>
                                            <td className="leftCol2">Appraisal</td>
                                            <td className="rightCol2">
                                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBAppraisalFee))}
                                            </td>
                                        </tr>
                                    : null}
                                {Atlas_Loan_Scenario.blockBCreditFees != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Credit Report</td>
                                        <td className="rightCol2">
                                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBCreditFees))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockBFloodCertification != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Flood Certification</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBFloodCertification))}
                                  
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockBhoaQuestionnaire != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Condo Questionnaire</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBhoaQuestionnaire))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockBcondoProjectApproval != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Condo Project Approval</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBcondoProjectApproval))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockBsinglePremiumMI != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Upfront Mortgage Insurance Premium</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBsinglePremiumMI))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockBtaxReturnVerificationFee != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Tax Return Verification Fee</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBtaxReturnVerificationFee))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockBverificationEmployment != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Verification of Employment</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBverificationEmployment))}
                                        </td>
                                    </tr>
                                : null}
                                <tr className="border-bottom">
                                    {governmentFundingFee != 0 ? 
                                        <>
                                            <td className="leftCol2">FHA, VA, or USDA Funding Fee</td>
                                            <td className="rightCol2">
                                                ${numberWithCommas(Math.round(governmentFundingFee))}
                                            </td>
                                        </>
                                    :null}
                                </tr>
                                <tr>
                                    <td className="leftCol2"><strong>C. Services You Can Shop For</strong></td>
                                    <td className="rightCol2">
                                        <strong>${numberWithCommas(Math.round(blockC))}</strong>
                                    </td>
                                </tr>
                                {Atlas_Loan_Scenario.blockCTitleServices != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Title Services &amp; Insurance</td>
                                        <td className="rightCol2">
                                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockCTitleServices))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockCSurvey != 0 ? 
                                
                                    <tr className="border-bottom">
                                        <td className="leftCol2">Survey (if required)</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockCSurvey))}
                                        </td>
                                    </tr>
                                : null}
                                <tr>
                                    <td className="leftCol2" height="20px">
                                        <strong>D. Total Loan Costs (A&#43;B&#43;C)</strong></td>
                                    <td className="rightCol2" height="20px">
                                        <strong>${numberWithCommas(Math.round(blockD))}</strong>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td style={{"verticalAlign": "top"}}>
                            <table className="table-child2">
                                <tr className="blueRow">
                                    <td className="td-heading" colSpan="2">Other Costs</td>
                                </tr>
                                <tr>
                                    <td className="leftCol2"><strong>E. Taxes &amp; Other Government Fees</strong></td>
                                    <td className="rightCol2">
                                        <strong>${numberWithCommas(Math.round(blockE))}</strong>
                                    </td>
                                </tr>
                                {Atlas_Loan_Scenario.blockERecordingCharges != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Recording Fees &amp; Other Taxes</td>
                                        <td className="rightCol2">
                                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockERecordingCharges))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockETransferTaxes != 0 ? 
                                
                                    <tr className="border-bottom">
                                        <td className="leftCol2">Transfer Taxes (if required)</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockETransferTaxes))}
                                        </td>
                                    </tr>
                                : null}
                                <tr>
                                    <td className="leftCol2"><strong>F. Estimated Prepaids</strong></td>
                                    <td className="rightCol2">
                                        <strong>${numberWithCommas(Math.round(blockF))}</strong>
                                    </td>
                                </tr>
                                {totalHOIPremium != 0 ? 
                                <>
                                    <tr>
                                            <td className="leftCol2">Homeowner’s Insurance Premium</td>
                                            <td className="rightCol2">
                                            
                                            ${numberWithCommas(Math.round(totalHOIPremium))}
                                            </td>
                                        </tr>
                                    
                                    <tr>
                                        <td className="leftCol2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i>
                                                {numberWithCommas(Atlas_Loan_Scenario.blockFnumMonthsPrepaidHOI)}{" "}
                                                months at    
                                                    ${numberWithCommas(Atlas_Loan_Scenario.monthlyHOI)} {" "}
                                                per month
                                            </i>
                                        </td>
                                        <td className="rightCol2"></td>
                                    </tr>
                                </>
                                :null}
                                 {totalPrepaidInterest != 0 ? 
                                <>
                                    <tr>
                                            <td className="leftCol2">Prepaid Interest</td>
                                            <td className="rightCol2">
                                            
                                            ${numberWithCommas(Math.round(totalPrepaidInterest))}
                                            </td>
                                        </tr>
                                    
                                    <tr>
                                        <td className="leftCol2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i>
                                                ${numberWithCommas((totalLoanAmount *(Atlas_Loan_Scenario.interestRate/100)/360).toFixed(2)) }{" "}
                                                per day for      {" "}
                                                {numberWithCommas(Math.round(Atlas_Loan_Scenario.blockFdaysPrepaidInterest)) }{" "}
                                                days
                                            </i>
                                        </td>
                                        <td className="rightCol2"></td>
                                    </tr>
                                </>
                                :null}
                                {totalPrepaidTaxes != 0 ? 
                                   <>
                                    <tr>
                                            <td className="leftCol2">Prepaid Homeowner&#39;s Insurance</td>
                                            <td className="rightCol2">
                                                ${numberWithCommas(Math.round(totalPrepaidTaxes))}
                                            </td>
                                        </tr>
                                    
                                    <tr>
                                        <td className="leftCol2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i>
                                                {numberWithCommas((Atlas_Loan_Scenario.blockFnumMonthsPrepaidTaxes).toFixed(2))}{" "}
                                                months at    
                                                    ${numberWithCommas(Atlas_Loan_Scenario.monthlyPropertyTax)}{" "}
                                                per month
                                            </i>
                                        </td>
                                        <td className="rightCol2"></td>
                                    </tr>
                                    </>
                                :null}
                                
                                <tr className="border-top">
                                    <td className="leftCol2"><strong>G. Estimated Escrow Payment</strong></td>
                                    <td className="rightCol2">
                                        <strong>${numberWithCommas(Math.round(blockG))}</strong>
                                    </td>
                                </tr>
                                {totalHOI != 0 ?
                                       <>
                                            <tr>
                                                    <td className="leftCol2">Homeowners Insurance</td>
                                                    <td className="rightCol2">
                                                        ${numberWithCommas(Math.round(totalHOI))}
                                                    </td>
                                                </tr>
                                            
                                            <tr>
                                                <td className="leftCol2">&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <i>
                                                        ${numberWithCommas(Atlas_Loan_Scenario.monthlyHOI)}{" "}
                                                        per month for    {" "}
                                                        {numberWithCommas(Math.round(Atlas_Loan_Scenario.blockGnumMonthsInsReserves))}{" "}
                                                        months
                                                    </i>
                                                </td>
                                                <td className="rightCol2"></td>
                                            </tr>
                                        </>
                                :null}
                                {totalPropertyTaxes != 0 ? 
                                    <>
                                        <tr>
                                            <td className="leftCol2">Property taxes</td>
                                            <td className="rightCol2">
                                            ${numberWithCommas(Math.round(totalPropertyTaxes))}
                                            </td>
                                        </tr>
                                    
                                    <tr className="border-bottom">
                                        <td className="leftCol2">&nbsp;&nbsp;&nbsp;&nbsp;
                                            <i>
                                                ${numberWithCommas(Atlas_Loan_Scenario.monthlyPropertyTax)}{" "}
                                                per month for {" "}   
                                                {numberWithCommas(Math.round(Atlas_Loan_Scenario.blockGnumMonthsTaxReserves))}{" "}
                                                months
                                            </i>
                                        </td>
                                        <td className="rightCol2"></td>
                                    </tr>
                                    </>
                                :null}
                                <tr>
                                    <td className="leftCol2"><strong>H. Other</strong></td>
                                    <td className="rightCol2">
                                        <strong>${numberWithCommas(Math.round(blockH))}</strong>
                                    </td>
                                </tr>
                                
                                {Atlas_Loan_Scenario.blockHOwnersTitleInsPremium != 0 ? 
                                    <tr >
                                        <td className="leftCol2">Owner&#39;s Title Insurance</td>
                                        <td className="rightCol2">
                                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockHOwnersTitleInsPremium))}
                                        </td>
                                    </tr>
                                :null}
                                
                                <tr className="border-top">
                                    <td className="leftCol2" height="20px">
                                        <strong>I. Total Other Costs (E&#43;F&#43;G&#43;H)</strong>
                                    </td>                                        
                                    <td className="rightCol2" height="20px">
                                        <strong>${numberWithCommas(Math.round(blockI))}</strong>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <div>
            <table>
                <tbody style={{border:0}}>
                    <tr className="blueRow">
                        <td className="td-heading" align="center" colSpan="4">Total Closing Costs</td>
                    </tr>
                    <tr style={{"padding":"5px 0"}}>
                        <td className="leftCol6">&nbsp;</td>
                        <td className="middleColA6" align="right">
                            ${numberWithCommas(Math.round(blockD+blockI))}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Loan Costs + Other Costs (D+I)</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" align="right">&#8211;</td>
                        <td className="border-bottom middleColA6" align="right">
                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.lenderCredit))}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Lender Credits</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" width="290px" align="right">&#61;</td>
                        <td className="middleColA6" width="53px" align="right">
                            ${numberWithCommas(Math.round(blockJ))}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6"><strong>Total Closing Costs (J)</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <table style={{marginTop:"16px"}}>
                <tbody style={{border:0}}>
                    <tr className="blueRow">
                        <td className="td-heading" align="center" colSpan="4">Estimated Cash to Close</td>
                    </tr>
                    <tr>
                        <td className="leftCol6">&nbsp;</td>
                        <td className="middleColA6" align="right">
                            ${numberWithCommas(Math.round(sale_Price_OR_Payoffs))}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Sale Price/Payoffs</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" width="290px" align="right">&#43;</td>
                        <td className="middleColA6" align="right">
                            ${numberWithCommas(Math.round(blockJ))}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Total Closing Costs (J)</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" align="right">&#8211;</td>
                        <td className="middleColA6" align="right">
                            ${numberWithCommas(Math.round(totalLoanAmount))}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Total Loan Amount</td>
                    </tr>
                    {
                        secondMortgage !== 0 ?
                            <tr>
                                <td className="operatorPadding leftCol6" align="right">&#8211;</td>
                                <td className="middleColA6" align="right">
                                    ${numberWithCommas(Math.round(secondMortgage))}
                                </td>
                                <td className="middleColB6">&nbsp;</td>
                                <td className="rightCol6">Second Mortgage</td>
                            </tr>
                       : null
                    }
                    {
                      Atlas_Loan_Scenario.loanPurpose === "Purchase" ?
                        <tr>
                            <td className="operatorPadding leftCol6" align="right">&#8211;</td>
                            <td className="middleColA6" align="right">
                                ${numberWithCommas(Math.round(Atlas_Loan_Scenario.sellerCredit))}
                            </td>
                            <td className="middleColB6">&nbsp;</td>
                            <td className="rightCol6">Seller Credit</td>
                        </tr>
                    :null}
                    <tr>
                        <td className="operatorPadding leftCol6" align="right">
                        &#8211;
                        </td>
                        <td className="border-bottom middleColA6" align="right">
                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.otherCredits))}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Other Credits and Adjustments</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" align="right">&#61;</td>
                            <td className="middleColA6" align="right">
                                { 
                                    Math.sign(estimatedCashToClose) === -1 ?
                                    <b>(${numberWithCommas(Math.abs(Math.round(estimatedCashToClose)))})</b>
                                    :
                                    <b>${numberWithCommas(Math.round(estimatedCashToClose))}</b>
                                }
                            </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6"><strong>Estimated Cash to Close From (To) Borrower</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <table style={{border:0}}>
                <tbody style={{border:0}}>
                    <tr style={{border:0}}>
                        <td align="center" style={{border:0}}>
                            <p className="heading-h4"><b>Please Review Your Options on the Bottom of Page 3</b></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div style={{"pageBreakAfter": "always"}}></div>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td  className="td-heading" colSpan="2">Other Considerations</td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>Rate Changes</strong></td>
                        <td className="rightCol4 lineheight">Rates change multiple times daily until rate is locked. Factors affecting rate include property state, lock period, loan-to-value, credit, and debt-to-income ratio</td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>Escrow Account</strong></td>
                        <td className="rightCol4 lineheight">If this is a refinance transaction,<span>&nbsp;</span> 
                       
                               <span className="border-bottom text-bold">funds held in escrow by your current loan servicer</span> 
                               <span className="border-bottom text-bold"> will be returned to you in approximately 30
                                                days following settlement.</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>First Payment</strong></td>
                        <td className="rightCol4 lineheight">Your payment of a partial month’s interest at settlement (a prepaid charge) constitutes the first payment on your new loan and 
                        
                        <span>&nbsp;</span> <span className="border-bottom text-bold">you will not have to make a mortgage payment </span> 
                               <span className="border-bottom text-bold">until the beginning of the second month after settlement, </span>e.g., close in November, your first scheduled payment will be January.
                            
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>Home Owner’s Insurance</strong></td>
                        <td className="rightCol4 lineheight">This loan requires a homeowner's insurance on the property or, in the case of condominiums, an HO-6 insurance policy. You may obtain
                            this insurance policy from a company of your choice.
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>Origination Fee</strong></td>
                        <td className="rightCol4 lineheight">The Origination Fee represents the total fees we pay outside parties for their services - the processing, underwriting, a pre-fund
                                                audit, and warehouse bank draw fee.
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>New Escrow Account &amp; Prepaid</strong></td>
                        <td className="rightCol4 lineheight">
                            Based on the estimated escrow information, we have conservatively set aside {Atlas_Loan_Scenario.blockGnumMonthsTaxReserves} months of property taxes 
                            and {Atlas_Loan_Scenario.blockGnumMonthsInsReserves} months of hazard insurance premiums for payment at settlement to populate your new escrow account.
                             Additionally, we estimated the prepaid interest at {Atlas_Loan_Scenario.blockFdaysPrepaidInterest} days.<span>&nbsp;</span>  
                             
                               <span className="border-bottom text-bold">Both the prepaid interest and the amount required for the escrow </span> 
                               <span className="border-bottom text-bold">account will be adjusted to match your specific requirements once the loan is </span> 
                               <span className="border-bottom text-bold">locked; a settlement date is finalized; and escrow amount are verified.</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td className="td-heading" >Options</td>
                    </tr>
                    <tr>
                        <td className="oneCol"><strong>You have options available to you either based on your Loan-to-Value (LTV) or the interest rate you choose:</strong></td>
                    </tr>
                    <tr>
                        <td className="oneCol"><span className="border-bottom">If this is a refinance transaction</span>, you might be able to increase the loan amount to reduce the amount needed at settlement; 
                                                you may also select a lower interest rate to save money in interest over the life of the loan, or, on the other hand, you may 
                                                select a higher interest rate and the resultant premium provided by the lender can be used to lower your costs at closing/settlement.  
                                                Discuss the available options with your Mortgage Consultant.
                        </td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="oneCol"><span  className="border-bottom">If this is a purchase transaction</span>, you may select a lower interest rate to save money in interest over the life of the loan, 
                                                or, on the other hand, you may select a higher interest rate and the resultant premium provided by the lender can be used to lower 
                                                your costs at closing/settlement.  Discuss the available options with your Mortgage Consultant.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        </body>
    </html>
    ) 
}

export default Home2_PDF;