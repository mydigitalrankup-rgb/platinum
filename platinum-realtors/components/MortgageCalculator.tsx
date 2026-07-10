"use client";

import { useState } from "react";

const BUILDING_IMAGE =
  "/c92646273926fa505fef4f88870fc83e53b9dbdb.png";

function CalculatorIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="1"
        width="14"
        height="16"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <rect
        x="4.5"
        y="3.5"
        width="9"
        height="3"
        rx="0.5"
        fill="currentColor"
      />

      <circle cx="5.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="9" cy="9.5" r="1" fill="currentColor" />
      <circle cx="12.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="5.5" cy="13" r="1" fill="currentColor" />
      <circle cx="9" cy="13" r="1" fill="currentColor" />
      <circle cx="12.5" cy="13" r="1" fill="currentColor" />
    </svg>
  );
}

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState("Rs 50Lac");
  const [downPayment, setDownPayment] = useState("Rs 20Lac");
  const [interestRate, setInterestRate] = useState("3.5");
  const [loanTerm, setLoanTerm] = useState("30");

  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const price =
      parseFloat(propertyPrice.replace(/[^0-9.]/g, "")) * 100000;

    const down =
      parseFloat(downPayment.replace(/[^0-9.]/g, "")) * 100000;

    const principal = price - down;

    const monthlyRate =
      parseFloat(interestRate) / 100 / 12;

    const months =
      parseFloat(loanTerm) * 12;

    if (!principal || !monthlyRate || !months) {
      setResult("Please enter valid values");
      return;
    }

    const monthly =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setResult(
      `Rs ${Math.round(monthly).toLocaleString(
        "en-IN"
      )}/month`
    );
  };

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }


        /* =================================
           MAIN SECTION
        ================================= */

        .mc-section {
          width: 100%;
          height: 80vh;
          min-height: 600px;

          display: flex;

          position: relative;

          overflow: hidden;

          background: #ffffff;
        }


        /* =================================
           LEFT RED SECTION
        ================================= */

        .mc-content {
          width: 58%;
          height: 100%;


          position: relative;

          z-index: 3;

          display: flex;

          flex-direction: column;

          justify-content: center;

          align-items: center;

          padding: 50px 13% 50px 4%;

        background-image:url(/images/vector.png);
          background-size:100% 100%;
      
        }


        /* =================================
           DARK BLUE TOP TRIANGLE
        ================================= */

      


        /* =================================
           HEADING
        ================================= */

        .mc-content h2 {
          width: 100%;

          font-family: "Playfair Display", serif;

          font-size: 38px;

          font-weight: 700;

          color: #ffffff;

          line-height: 1.2;

          margin: 0 0 14px;

          text-align: center;
        }


        .mc-content > p {
          width: 100%;

          font-family: "Inter", sans-serif;

          font-size: 14px;

          color: rgba(255,255,255,0.9);

          margin: 0 0 35px;

          text-align: center;
        }


        /* =================================
           FORM CARD
        ================================= */

        .mc-card {
          width: 90%;

          max-width: 600px;

          background: #ffffff;

          padding: 35px;

          box-shadow:
            0 8px 32px rgba(0,0,0,0.12);
        }


        /* =================================
           FORM GRID
        ================================= */

        .mc-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          column-gap: 50px;

          row-gap: 25px;

          margin-bottom: 28px;
        }


        /* =================================
           FORM FIELD
        ================================= */

        .mc-field label {
          display: block;

          font-family: "Inter", sans-serif;

          font-size: 12px;

          font-weight: 400;

          color: #e71932;

          text-transform: uppercase;

          letter-spacing: 0.05em;

          margin-bottom: 8px;
        }


        .mc-field input {
          width: 100%;

          border: none;

          border-bottom:
            1px solid #dddddd;

          padding: 7px 0;

          font-family:
            "Inter", sans-serif;

          font-size: 14px;

          color: #333333;

          background: transparent;

          outline: none;
        }


        .mc-field input:focus {
          border-bottom-color:
            #e71932;
        }


        /* =================================
           BUTTON
        ================================= */

        .mc-btn {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          padding: 13px 16px;

          background: #e71932;

          color: #ffffff;

          border: none;

          font-family:
            "Inter", sans-serif;

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 0.03em;

          text-transform: uppercase;

          cursor: pointer;

          transition: 0.2s ease;
        }


        .mc-btn:hover {
          background: #c8102e;
        }


        /* =================================
           RESULT
        ================================= */

        .mc-result {
          margin-top: 15px;

          padding-top: 15px;

          border-top:
            1px solid #eeeeee;

          font-family:
            "Inter", sans-serif;

          font-size: 17px;

          font-weight: 700;

          color: #e71932;

          text-align: center;
        }


        /* =================================
           RIGHT IMAGE
        ================================= */

        .mc-building {
          width: 58%;

          height: 100%;

          margin-left: -17%;

          position: relative;

          overflow: hidden;

          z-index: 1;
        }


        .mc-building img {
          width: 100%;

          height: 100%;

          position: absolute;
top:20px;
          inset: 0;

          object-fit: cover;

          object-position: top;
        }


        /* =================================
           TABLET
        ================================= */

        @media (max-width: 1100px) {

          .mc-content {
            width: 60%;

            padding-left: 4%;

            padding-right: 13%;
          
          }


          .mc-content h2 {
            font-size: 32px;
          }


          .mc-card {
            padding: 30px;
          }


          .mc-grid {
            column-gap: 30px;
          }


          .mc-section::before {
            left: 47%;

            width: 15%;
          }


          .mc-building {
            width: 58%;

                      margin-left: -16%;

          }

        }


        /* =================================
           MOBILE
        ================================= */

        @media (max-width: 768px) {

          .mc-section {
            height: auto;

            min-height: auto;

            flex-direction: column-reverse;
          }


          .mc-section::before {
            display: none;
          }


          .mc-content {
            width: 100%;

            height: auto;

            padding: 50px 24px;

            clip-path: none;
          }


          .mc-content h2 {
            font-size: 34px;
          }


          .mc-building {
            width: 100%;

            height: 400px;

            margin-left: 0;
          }

        }


        /* =================================
           SMALL MOBILE
        ================================= */

        @media (max-width: 480px) {

          .mc-content {
            padding: 40px 16px;
              background:#e71932;
          }


          .mc-content h2 {
            font-size: 30px;
          }


          .mc-content > p {
            font-size: 13px;
          }


          .mc-card {
            padding: 25px 20px;
            
          }


          .mc-grid {
            grid-template-columns: 1fr;

            gap: 20px;
          }


          .mc-building {
            height: 300px;
          }

        }

      `}</style>


      <section className="mc-section">

        {/* =================================
            LEFT CONTENT
        ================================= */}

        <div className="mc-content">

          <h2>
            Mortage Calculator
          </h2>

          <p>
            Estimate your monthly payments and plan your budget
          </p>


          {/* =================================
              CALCULATOR FORM
          ================================= */}

          <div className="mc-card">

            <div className="mc-grid">


              {/* PROPERTY PRICE */}

              <div className="mc-field">

                <label htmlFor="mc-property-price">
                  Property Price
                </label>

                <input
                  id="mc-property-price"

                  value={propertyPrice}

                  onChange={(e) =>
                    setPropertyPrice(
                      e.target.value
                    )
                  }

                  placeholder="Rs 50Lac"
                />

              </div>


              {/* DOWN PAYMENT */}

              <div className="mc-field">

                <label htmlFor="mc-down-payment">
                  Down Payment
                </label>

                <input
                  id="mc-down-payment"

                  value={downPayment}

                  onChange={(e) =>
                    setDownPayment(
                      e.target.value
                    )
                  }

                  placeholder="Rs 20Lac"
                />

              </div>


              {/* INTEREST RATE */}

              <div className="mc-field">

                <label htmlFor="mc-interest-rate">
                  Interest Rate (%)
                </label>

                <input
                  id="mc-interest-rate"

                  value={interestRate}

                  onChange={(e) =>
                    setInterestRate(
                      e.target.value
                    )
                  }

                  placeholder="3.5"
                />

              </div>


              {/* LOAN TERM */}

              <div className="mc-field">

                <label htmlFor="mc-loan-term">
                  Loan Term (Years)
                </label>

                <input
                  id="mc-loan-term"

                  value={loanTerm}

                  onChange={(e) =>
                    setLoanTerm(
                      e.target.value
                    )
                  }

                  placeholder="30"
                />

              </div>

            </div>


            {/* CALCULATE BUTTON */}

            <button
              type="button"

              className="mc-btn"

              onClick={calculate}
            >

              <CalculatorIcon />

              Calculate Monthly Payment

            </button>


            {/* RESULT */}

            {result && (

              <p className="mc-result">
                {result}
              </p>

            )}

          </div>

        </div>


        {/* =================================
            RIGHT BUILDING IMAGE
        ================================= */}

        <div className="mc-building">

          <img
            src={BUILDING_IMAGE}

            alt="Modern skyscraper"
          />

        </div>

      </section>

    </>
  );
}