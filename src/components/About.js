import React, {useState} from 'react';

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor:'white',
        //  border: '2px solid black'
        
       
    })
    const [btntext, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () => {
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                // border: '2px solid white'
            })
            setBtnText("🔦Light Theme");
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("🕯️ Dark Theme");
        }
    }

  return (

    <div className='accpordian' id="accordionExample" style={myStyle}>
        <h1 className='my-3'>About Us - AksharDocs</h1>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h3>Transform the Way You Work with Text!</h3>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      At AksharDocs, we believe in simplifying your writing experience. Whether you're a student polishing assignments, a professional drafting reports, or a content creator fine-tuning your next big piece, we provide the tools to make your work seamless and efficient.
<br />
We understand that time is precious, and clear, professional documents are essential. That's why AksharDocs offers an intuitive text management solution that is accessible, powerful, and free.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <h3>🚀 Why AksharDocs?</h3>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <ul>
      <li>Boost Productivity: No more manual text editing — convert, clean, and format in seconds.</li>
      <li>User-Centric Design: Our clean interface ensures easy navigation for all users.</li>
      <li>Time-Saving Features: From estimating reading time to word count analysis, we’ve got you covered.</li>
      <li>Free and Secure: No hidden fees or intrusive ads — just a seamless experience.</li>
     </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <h3>💡 Our Features</h3>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
      <li>  Convert with Ease: Instantly switch text between UPPERCASE, lowercase, or sentence case.</li>

      <li> Clear in One Click: Remove all unwanted content instantly.</li>

      <li> Smart Word and Character Counter: Track your progress in real-time.</li>

      <li> Reading Time Estimator: Know how long your content takes to read.</li>

      <li> Live Preview: Visualize your formatted text before exporting.</li>

      <li> Export to PDF: Get a clean and professional PDF version of your content.</li>

      <li> Copy to Clipboard: One-click to copy your text — no fuss, no stress.</li>

      <li> Remove Extra Spaces: Say goodbye to annoying extra spaces with a single tap.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
       <h3>🎉 For Students - More Than Just Text Management</h3>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Managing your expenses as a student just got easier! Use AksharDocs to quickly log your spending, track your daily expenses, and maintain a clean financial summary.

<br />Planning a party? Easily list who owes what, adjust the calculations, and export it as a PDF to share with friends. No more confusion over expenses — just clarity and fairness!

<br />Stay organized, budget smartly, and keep every rupee accounted for.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
        <h3>🌎 Our Vision</h3>
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>We believe in democratizing technology for everyone. No complex installations or steep learning curves — just a reliable text management tool that enhances your productivity.

<br />Whether you're preparing a business proposal, writing a research paper, or simply organizing your thoughts, AksharDocs is your go-to solution.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseOne">
        <h3>🤝 Join Our Community</h3>
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p>Thousands of users trust AksharDocs daily to handle their text-related needs. Become a part of our growing family and experience the difference.

      <br />For feedback, inquiries, or support, feel free to reach out at: support@akshardocs.com.</p>
      </div>
    </div>
  </div>
  <div>
    <p>AksharDocs - Simplify Your Words, Amplify Your Impact.</p>
  </div>
  <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
  <footer className="bg-light text-dark text-center py-4">
  <p className="mb-1">Made with ❤️ by the students of <strong>Government Engineering College, Siwan</strong></p>
  <small>© 2025 AksharDocs. All rights reserved.</small>
  <br />
  <a href="https://forms.gle/wNUVvETqS5weXvFXA" className="btn btn-outline-primary mt-3" target="_blank" rel="noopener noreferrer">🌟 Say Thanks or Join Our Developer Community</a>
</footer>

</div>

  )
}


