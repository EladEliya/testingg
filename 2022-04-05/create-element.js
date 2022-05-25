
function createHeadline() {                          
    let headline = document.createElement("h1");
      //יצירת אלמנט חדש (במקרה זה מסוגהד ליין )
    headline.innerHTML = "new headline h1"; 
      //    <h1>new headline h1</h1>  // הכנסת טקסט לכותרת שיצרנו

// headline.style.color="blue";
headline.className="color";
   document.body.appendChild(headline);
       // השמה של מה שיצרנו בתוך הBODY של ה-HTML וז כמובן שגם נראה את זה על המסך
}